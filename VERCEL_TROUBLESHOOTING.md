# Vercel Deployment Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: Build Fails
**Symptoms**: Build fails in Vercel dashboard

**Solutions**:
1. Check build logs in Vercel dashboard for specific errors
2. Ensure Node.js version is compatible (Vercel auto-detects, but you can set it in `package.json`):
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```
3. Make sure all dependencies are in `package.json` (not just devDependencies)

### Issue 2: Blank Page / 404 Errors
**Symptoms**: Site loads but shows blank page or 404 errors

**Solutions**:
1. Check that `vercel.json` has the correct rewrite rules (already configured)
2. Ensure `outputDirectory` is set to `dist` (already configured)
3. Check browser console for JavaScript errors

### Issue 3: Firebase Not Working
**Symptoms**: Blog posts don't load, Firebase errors in console

**Solutions**:
1. **CRITICAL**: Add all Firebase environment variables in Vercel dashboard:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all 6 Firebase variables (see VERCEL_DEPLOYMENT.md)
   - **Redeploy** after adding variables

2. Check that variables are named correctly (must start with `VITE_`)

### Issue 4: Assets Not Loading
**Symptoms**: Images, CSS, or JS files not loading

**Solutions**:
1. Check that assets are in the `public` folder or imported correctly
2. Verify build output includes all assets (check `dist` folder after local build)
3. Check Vercel build logs for missing files

### Issue 5: Routing Not Working
**Symptoms**: Direct URL access shows 404, but navigation works

**Solutions**:
1. Verify `vercel.json` has rewrite rules (already configured)
2. Ensure React Router is set up correctly
3. Check that all routes are defined in `App.jsx`

## Step-by-Step Deployment Checklist

### Before Deploying:
- [ ] All code is committed and pushed to GitHub
- [ ] Local build works (`npm run build`)
- [ ] No console errors in local development
- [ ] All environment variables are documented

### During Deployment:
- [ ] Connect GitHub repository to Vercel
- [ ] Vercel auto-detects Vite framework (should show "Vite" in framework)
- [ ] Build command: `npm run build` (auto-detected)
- [ ] Output directory: `dist` (auto-detected)
- [ ] Install command: `npm install` (auto-detected)

### After Deployment:
- [ ] Add all Firebase environment variables in Vercel dashboard
- [ ] Redeploy after adding environment variables
- [ ] Test all pages and features
- [ ] Check browser console for errors
- [ ] Verify Firebase connection works (blog posts load)

## Quick Fixes

### If Build Fails:
```bash
# Test build locally first
npm run build

# Check for errors
npm run build 2>&1 | grep -i error
```

### If Site is Blank:
1. Check Vercel deployment logs
2. Open browser DevTools → Console tab
3. Look for JavaScript errors
4. Check Network tab for failed requests

### If Firebase Doesn't Work:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify all 6 variables are added
3. Check variable names start with `VITE_`
4. Redeploy the project

## Getting Help

If issues persist:
1. Check Vercel deployment logs (most important!)
2. Check browser console for errors
3. Verify all environment variables are set
4. Test local build works first
5. Check Vercel status page: https://www.vercel-status.com/

## Current Configuration

Your `vercel.json` is configured correctly:
- ✅ Framework: Vite
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Rewrite rules for React Router

The main thing to check is **Firebase environment variables** in Vercel dashboard!
