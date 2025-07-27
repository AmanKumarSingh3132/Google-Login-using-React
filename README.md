Step 1: Google Cloud Setup
Go to Google Cloud Console.

Create a new project or select an existing one.

Navigate to "APIs & Services" → "OAuth consent screen".

Choose "External", fill in app details (name, email), and avoid using “Google” in the name.

Add your email as a test user, then finish the setup.

Step 2: Create OAuth Credentials
Go to "Credentials" in the same menu.

Click "Create Credentials" → "OAuth client ID".

Choose "Web Application".

Add authorized origins like http://localhost:5173 (for Vite) or http://localhost:3000 (for React).

Copy the Client ID shown after creation.

Step 3: In Your React App
Install the Google OAuth library (@react-oauth/google) using npm/yarn.

Wrap your app with the Google OAuth provider using the Client ID.

Add a Google login button using the library's component.

Use the login response to handle authentication or user info.

Step 4: Run & Test
Start your app (npm run dev or npm start).

Visit your local site, click the login button, and sign in using Google.
