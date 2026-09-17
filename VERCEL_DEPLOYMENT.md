# Vercel Deployment Guide - Firebase Environment Variables

## Problem
Your blogs aren't showing on Vercel because Firebase environment variables are missing. The `.env` file is not deployed (it's in `.gitignore` for security).

## Solution: Add Environment Variables in Vercel

### Step 1: Go to Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Sign in to your account
3. Find your project (the one you deployed)
4. Click on your project name

### Step 2: Navigate to Settings

1. Click on the **"Settings"** tab at the top
2. In the left sidebar, click on **"Environment Variables"**

### Step 3: Add Firebase Environment Variables

Add each of these 6 environment variables one by one:

#### Variable 1:
- **Name**: `VITE_FIREBASE_API_KEY`
- **Value**: `AIzaSyDXwicXcpGQ4Q2xEsFDFT8lUkhfYV43qBg`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

#### Variable 2:
- **Name**: `VITE_FIREBASE_AUTH_DOMAIN`
- **Value**: `launch-blog-d0c62.firebaseapp.com`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

#### Variable 3:
- **Name**: `VITE_FIREBASE_PROJECT_ID`
- **Value**: `launch-blog-d0c62`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

#### Variable 4:
- **Name**: `VITE_FIREBASE_STORAGE_BUCKET`
- **Value**: `launch-blog-d0c62.firebasestorage.app`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

#### Variable 5:
- **Name**: `VITE_FIREBASE_MESSAGING_SENDER_ID`
- **Value**: `907178111128`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

#### Variable 6:
- **Name**: `VITE_FIREBASE_APP_ID`
- **Value**: `1:907178111128:web:b0ad79a31386fc4f7f60ed`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

### Step 4: Redeploy Your Project

After adding all environment variables:

1. Go to the **"Deployments"** tab
2. Find your latest deployment
3. Click the **three dots (⋯)** menu on the right
4. Click **"Redeploy"**
5. Confirm the redeployment

**OR** simply push a new commit to trigger a new deployment:

```bash
git add .
git commit -m "Add environment variables"
git push
```

### Step 5: Verify It Works

1. Wait for the deployment to complete (usually 1-2 minutes)
2. Visit your Vercel site
3. Go to the Blog page
4. You should now see your previously posted blogs!

## Quick Checklist

- [ ] Added `VITE_FIREBASE_API_KEY`
- [ ] Added `VITE_FIREBASE_AUTH_DOMAIN`
- [ ] Added `VITE_FIREBASE_PROJECT_ID`
- [ ] Added `VITE_FIREBASE_STORAGE_BUCKET`
- [ ] Added `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [ ] Added `VITE_FIREBASE_APP_ID`
- [ ] Selected all environments for each variable
- [ ] Redeployed the project
- [ ] Tested the Blog page

## Visual Guide

```
Vercel Dashboard
└── Your Project
    └── Settings
        └── Environment Variables
            └── Add each variable:
                ├── VITE_FIREBASE_API_KEY
                ├── VITE_FIREBASE_AUTH_DOMAIN
                ├── VITE_FIREBASE_PROJECT_ID
                ├── VITE_FIREBASE_STORAGE_BUCKET
                ├── VITE_FIREBASE_MESSAGING_SENDER_ID
                └── VITE_FIREBASE_APP_ID
```

## Troubleshooting

**Problem**: Still can't see blogs after redeploy
- **Solution**: 
  1. Check browser console (F12) for errors
  2. Verify all 6 variables are added correctly
  3. Make sure you selected all environments (Production, Preview, Development)
  4. Clear browser cache and try again
  5. Check Firebase Console to verify blogs exist in Firestore

**Problem**: "Firebase: Error (auth/configuration-not-found)"
- **Solution**: One or more environment variables are missing. Double-check all 6 are added.

**Problem**: "Permission denied" error
- **Solution**: Check Firestore security rules in Firebase Console. They should allow read access.

## Important Notes

- Environment variables are case-sensitive
- Make sure there are no extra spaces in the values
- After adding variables, you MUST redeploy for them to take effect
- The `.env` file is intentionally not deployed (for security)
- All environment variables should be added in Vercel dashboard

## Your Firebase Credentials (for reference)

```
VITE_FIREBASE_API_KEY=AIzaSyDXwicXcpGQ4Q2xEsFDFT8lUkhfYV43qBg
VITE_FIREBASE_AUTH_DOMAIN=launch-blog-d0c62.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=launch-blog-d0c62
VITE_FIREBASE_STORAGE_BUCKET=launch-blog-d0c62.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=907178111128
VITE_FIREBASE_APP_ID=1:907178111128:web:b0ad79a31386fc4f7f60ed
```

Copy these exactly as shown above when adding to Vercel.
