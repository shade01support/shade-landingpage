# Firebase Setup Guide

This guide will help you set up Firebase Firestore for shared blog storage.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Build** > **Firestore Database**
2. Click **Create database**
3. Start in **test mode** (for development) or **production mode** (for production)
4. Choose a location for your database
5. Click **Enable**

## Step 3: Get Your Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app (give it a nickname)
5. Copy the Firebase configuration object

## Step 4: Set Up Environment Variables

1. Create a `.env` file in the root of your project
2. Add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Step 5: Set Up Firestore Security Rules

1. Go to **Firestore Database** > **Rules**
2. For development, use these rules:

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

3. For production, use more secure rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{document=**} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['name', 'date', 'tagline', 'heading', 'content', 'emoji', 'createdAt']);
      allow update, delete: if false; // Only allow creation, not updates/deletes
    }
  }
}
```

4. Click **Publish**

## Step 6: Install Dependencies

```bash
npm install
```

## Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the Blog page
3. Click "Add Blog" and submit a test blog
4. Check Firebase Console > Firestore Database to see your blog

## Troubleshooting

- **Error: "Firebase: Error (auth/configuration-not-found)"**: Make sure your `.env` file has all the required variables
- **Error: "Permission denied"**: Check your Firestore security rules
- **Blogs not appearing**: Check browser console for errors and verify Firestore rules allow read access

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add your environment variables in your hosting platform's settings
2. Make sure to use production Firestore security rules
3. Test that blogs are shared across different users/devices

## Free Tier Limits

Firebase Firestore free tier includes:
- 50K reads/day
- 20K writes/day
- 20K deletes/day
- 1 GB storage

This should be more than enough for a blog feature!
