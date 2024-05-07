import React, { useState } from 'react';
import firebase from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(userCredential);
      // Redirect user to dashboard or other page after successful signup
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result);
      // Redirect user to dashboard or other page after successful signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up with Email</button>
      </form>
      <button onClick={handleGoogleSignup}>Sign Up with Google</button>
    </div>
  );
};

export default Signup;



