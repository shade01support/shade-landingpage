/**
 * Service to fetch live Google Play Store app rating
 */
const CACHE_KEY = 'shade_playstore_rating_v2'
const CACHE_EXPIRY_MS = 60 * 60 * 1000 // 1 hour

export const getPlayStoreRating = async () => {
  // Check local cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
      const { rating, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < CACHE_EXPIRY_MS && rating) {
        return rating
      }
    }
  } catch (e) {
    // Ignore storage errors
  }

  try {
    // 1. Try internal API endpoint
    const response = await fetch('/api/rating?id=com.shade.app')
    if (response.ok) {
      const data = await response.json()
      if (data && data.rating) {
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ rating: data.rating, timestamp: Date.now() })
          )
        } catch (e) {}
        return data.rating
      }
    }
  } catch (err) {
    console.warn('Could not fetch rating from /api/rating:', err)
  }

  // 2. Fallback: try querying through public proxy if client-side standalone
  try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      'https://play.google.com/store/apps/details?id=com.shade.app&hl=en'
    )}`
    const res = await fetch(proxyUrl)
    if (res.ok) {
      const html = await res.text()
      const match =
        html.match(/\[\["([1-5]\.\d)",\s*[\d.]+/) ||
        html.match(/"ratingValue"\s*:\s*"?([\d.]+)"?/i) ||
        html.match(/aria-label="Rated\s+([\d.]+)\s+stars/i) ||
        html.match(/\["([1-5]\.\d)",\s*[\d.]+/) ||
        html.match(/itemprop="ratingValue"[^>]*content="([\d.]+)"/i)

      if (match && match[1]) {
        const rating = parseFloat(match[1]).toFixed(1)
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ rating, timestamp: Date.now() })
          )
        } catch (e) {}
        return rating
      }
    }
  } catch (err) {
    console.warn('Fallback rating fetch failed:', err)
  }

  return '4.4'
}
