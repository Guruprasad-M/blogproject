import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

export default function Login({ setIsAuth }) {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate("/");

      })
      .catch((error) => {
        // Handle errors, if any
        console.error('Error signing in with Google:', error);
      });
  };

  return (
<div className="flex-container">
    <div className="left-div">   </div>
    <div className="right-div"> 
    <div className="welcome-container">
    <h1 className="welcome-caption">Explore, Discover, Inspire</h1>
    <p className="sub-caption">Your Source for Engaging Content</p>
    <p>Sign In with Google to continue</p>
    <button className='login-with-google-btn' onClick={signInWithGoogle}>
        Sign in with Google 
      </button>
  </div>
   
    
    </div>
    </div>
  );
}
