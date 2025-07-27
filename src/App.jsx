import React from 'react'
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google'
import './App.css'

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwt_decode(credentialResponse.credential);
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <h1>Hi, trying Google Login in React here.</h1>
    </div>
  )
}

export default App;
