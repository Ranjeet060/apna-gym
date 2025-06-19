// src/auth.js or /lib/firebase/auth.js

import {
  getAuth,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword as firebaseEmailSignIn,
  createUserWithEmailAndPassword as firebaseCreateUser
} from 'firebase/auth';

import { firebaseApp } from './firebase-config.js'; //  Adjust path if needed

const auth = getAuth(firebaseApp);

// Listen to auth state changes (user signs in/out)
export function onAuthStateChanged(callback) {
  return _onAuthStateChanged(auth, callback);
}

// Listen to token refresh or ID token change
export function onIdTokenChanged(callback) {
  return _onIdTokenChanged(auth, callback);
}

// Sign in using Google popup
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(" Signed in with Google:", result.user.email);
    return result.user;
  } catch (error) {
    console.error(" Google Sign-in failed:", error.code, error.message);
    throw error;
  }
}

// Email/password sign-in
export async function signInWithEmailPassword(email, password) {
  try {
    const result = await firebaseEmailSignIn(auth, email, password);
    console.log(" Signed in with email/password:", result.user.email);
    return result.user;
  } catch (error) {
    console.error(" Email/Password sign-in failed:", error.code, error.message);
    throw error;
  }
}

// Email/password sign-up ( admin registration)
export async function signUpWithEmailPassword(email, password) {
  try {
    const result = await firebaseCreateUser(auth, email, password);
    console.log(" Account created:", result.user.email);
    return result.user;
  } catch (error) {
    console.error(" Sign-up failed:", error.code, error.message);
    throw error;
  }
}

// Sign out current user
export async function signOutUser() {
  try {
    await firebaseSignOut(auth);
    console.log(" Signed out");
  } catch (error) {
    console.error(" Sign-out error:", error);
    throw error;
  }
}

// Export auth object for direct usage if needed
export { auth };
