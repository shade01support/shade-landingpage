# Step-by-Step Guide: How to Get Firebase Keys

Follow these steps to get all the Firebase configuration keys you need.

## Step 1: Go to Firebase Console

1. Open your browser and go to: **https://console.firebase.google.com/**
2. Sign in with your Google account

## Step 2: Create or Select a Project

### If you DON'T have a project yet:
1. Click **"Add project"** or **"Create a project"**
2. Enter a project name (e.g., "shade-blog")
3. Click **Continue**
4. **Disable** Google Analytics (optional, you can skip this)
5. Click **Create project**
6. Wait for project creation (takes ~30 seconds)
7. Click **Continue**

### If you already have a project:
1. Click on your project name from the project list

## Step 3: Add a Web App to Your Project

1. In your Firebase project dashboard, look for the **gear icon (⚙️)** in the top left
2. Click on **"Project settings"** (or go directly to: https://console.firebase.google.com/project/_/settings/general)
3. Scroll down to the section called **"Your apps"**
4. You'll see icons for different platforms (iOS, Android, Web)
5. Click on the **Web icon** (`</>` or `< / >`)
6. A popup will appear asking you to register your app

## Step 4: Register Your Web App

1. In the popup, enter a nickname for your app (e.g., "Shade Website" or "Shade Blog")
2. **DO NOT** check "Also set up Firebase Hosting" (unless you want to)
3. Click **"Register app"**

## Step 5: Copy Your Firebase Configuration

After registering, you'll see a code snippet that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

**Copy these values!** You'll need them in the next step.

## Step 6: Create .env File in Your Project

1. Go back to your project folder (`/Users/vidhesh/Desktop/shade`)
2. Create a new file named `.env` in the root directory (same level as `package.json`)
3. Open the `.env` file and paste this template:

```env
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

4. **Replace each value** with the actual values from Step 5:

   - `VITE_FIREBASE_API_KEY` = the `apiKey` value
   - `VITE_FIREBASE_AUTH_DOMAIN` = the `authDomain` value
   - `VITE_FIREBASE_PROJECT_ID` = the `projectId` value
   - `VITE_FIREBASE_STORAGE_BUCKET` = the `storageBucket` value
   - `VITE_FIREBASE_MESSAGING_SENDER_ID` = the `messagingSenderId` value
   - `VITE_FIREBASE_APP_ID` = the `appId` value

## Step 7: Enable Firestore Database

1. In Firebase Console, go to **"Build"** in the left sidebar
2. Click on **"Firestore Database"**
3. Click **"Create database"**
4. Choose **"Start in test mode"** (for development) or **"Start in production mode"** (for production)
5. Select a location (choose the closest to your users, e.g., "us-central" or "asia-south1")
6. Click **"Enable"**
7. Wait for Firestore to be created (takes ~1 minute)

## Step 8: Set Firestore Security Rules

1. In Firestore Database, click on the **"Rules"** tab
2. Replace the default rules with this (for development):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

3. Click **"Publish"**

## Step 9: Test Your Setup

1. Go back to your project terminal
2. Make sure your `.env` file is saved
3. Restart your development server:
   ```bash
   npm run dev
   ```
4. Navigate to the Blog page
5. Try adding a blog post
6. Check Firebase Console > Firestore Database > Data tab to see if your blog appears

## Visual Guide - Where to Find Each Key

```
Firebase Console
└── Project Settings (⚙️ icon)
    └── Your apps section
        └── Web app (</> icon)
            └── Config object contains:
                ├── apiKey → VITE_FIREBASE_API_KEY
                ├── authDomain → VITE_FIREBASE_AUTH_DOMAIN
                ├── projectId → VITE_FIREBASE_PROJECT_ID
                ├── storageBucket → VITE_FIREBASE_STORAGE_BUCKET
                ├── messagingSenderId → VITE_FIREBASE_MESSAGING_SENDER_ID
                └── appId → VITE_FIREBASE_APP_ID
```

## Quick Reference - Direct Links

- **Firebase Console**: https://console.firebase.google.com/
- **Project Settings**: https://console.firebase.google.com/project/_/settings/general
- **Firestore Database**: https://console.firebase.google.com/project/_/firestore

## Troubleshooting

**Problem**: Can't find "Your apps" section
- **Solution**: Make sure you're in Project Settings, not User Settings

**Problem**: No Web app icon
- **Solution**: Scroll down in "Your apps" section, or click "Add app" button

**Problem**: Keys not working after adding to .env
- **Solution**: 
  1. Make sure `.env` file is in the root directory (same folder as `package.json`)
  2. Restart your development server (`npm run dev`)
  3. Check that there are no spaces around the `=` sign in `.env` file
  4. Make sure all values are in quotes if they contain special characters

**Problem**: "Permission denied" error
- **Solution**: Check Firestore Rules tab and make sure rules allow read/write

## Example .env File

Here's what a complete `.env` file should look like (with example values):

```env
VITE_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz
VITE_FIREBASE_AUTH_DOMAIN=shade-blog-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=shade-blog-12345
VITE_FIREBASE_STORAGE_BUCKET=shade-blog-12345.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=987654321098
VITE_FIREBASE_APP_ID=1:987654321098:web:abcdef1234567890abcdef
```

**Important**: 
- Never commit your `.env` file to Git (it's already in `.gitignore`)
- Never share your Firebase keys publicly
- Each value should be on a single line (no line breaks)
