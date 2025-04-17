import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase/firebaseInfo';

function SigningWithGoogle() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error);
            
        })
    }

  return (
    <div className='text-center mx-auto my-auto'>
        <button onClick={handleGoogleSignIn} className='bg-green-300 px-4 py-2 rounded-md hover:bg-green-400 active:bg-green-500'>Sign In With Google</button>
    </div>
  )
}

export default SigningWithGoogle