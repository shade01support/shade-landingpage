export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')

  try {
    const appId = req.query.id || 'com.shade.app'
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${appId}&hl=en`

    const response = await fetch(playStoreUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    })

    if (!response.ok) {
      return res.status(200).json({ rating: '4.4', isLive: false })
    }

    const html = await response.text()

    // 1. Check for Play Store serialized rating pattern: [["4.4",4.3809524]
    let match = html.match(/\[\["([1-5]\.\d)",\s*[\d.]+/)
    if (!match) {
      // 2. Try JSON-LD / schema metadata: "ratingValue":"4.4"
      match = html.match(/"ratingValue"\s*:\s*"?([\d.]+)"?/i)
    }
    if (!match) {
      // 3. Try aria-label="Rated 4.4 stars out of five stars"
      match = html.match(/aria-label="Rated\s+([\d.]+)\s+stars/i)
    }
    if (!match) {
      // 4. Try secondary serialized array pattern
      match = html.match(/\["([1-5]\.\d)",\s*[\d.]+/)
    }
    if (!match) {
      // 5. Try itemprop="ratingValue" content="4.4"
      match = html.match(/itemprop="ratingValue"[^>]*content="([\d.]+)"/i)
    }
    if (!match) {
      // 6. Try Google Play UI rating container
      match = html.match(/class="TT9OTd"[^>]*>([\d.]+)<\/div>/i)
    }

    if (match && match[1]) {
      const parsedRating = parseFloat(match[1])
      if (!isNaN(parsedRating) && parsedRating > 0 && parsedRating <= 5) {
        return res.status(200).json({ rating: parsedRating.toFixed(1), isLive: true })
      }
    }

    return res.status(200).json({ rating: '4.4', isLive: false })
  } catch (err) {
    return res.status(200).json({ rating: '4.4', isLive: false, error: err.message })
  }
}
