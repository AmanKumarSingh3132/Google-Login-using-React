## 🔐 Google Login Setup in React (with @react-oauth/google)

This guide walks you through setting up Google Login using React and Google Cloud Console.

---

###  Step 1: Google Cloud Console Configuration

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one.
3. Navigate to **APIs & Services → OAuth consent screen**
4. Choose **External**, enter your app name and support email.
   > ⚠️ *Avoid using "Google" or other brand names in the app name.*
5. Add your email as a **test user**.
6. Save and continue through the remaining steps.

---

###  Step 2: Create OAuth Credentials

1. Go to **Credentials** → click **Create Credentials → OAuth client ID**
2. Choose **Web application**
3. Set **Authorized JavaScript origins**:
   - `http://localhost:3000` (for Create React App)
   - or `http://localhost:5173` (for Vite)
4. Click **Create** and **copy your Client ID**

---

###  Step 3: React App Setup

1. Install the Google OAuth library:
   ```bash
   npm install @react-oauth/google

2. Wrap your root component with:
   
<GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
  <App />
</GoogleOAuthProvider>

3. Add the Google Login button inside your component:

<GoogleLogin
  onSuccess={credentialResponse => console.log(credentialResponse)}
  onError={() => console.log('Login Failed')}
/>

###  Step 4: Run Your App with:

npm start
# or
npm run dev




