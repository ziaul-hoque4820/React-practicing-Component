import React, { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from './firebase/firebaseInfo';

function SigningWithGoogle() {
    const [user, setUser] = useState(null);
    console.log(user);


    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const userInfo = result.user
            setUser(userInfo);
        }).catch(error => {
            console.log(error);
            
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            setUser(null)
        }).catch(error => {
            console.log(error);
            
        })
    }

  return (
    <div className='text-center mx-auto my-auto space-x-4'>
        {
            user 
            ?
            <button onClick={handleSignOut} className='bg-rose-300 px-4 py-2 rounded-md hover:bg-rose-400 active:bg-rose-500'>Log Out</button>
            :
            <button onClick={handleGoogleSignIn} className='bg-green-300 px-4 py-2 rounded-md hover:bg-green-400 active:bg-green-500'>Sign In With Google</button>
        }
        <br />
        {
            user && <div className='mt-7 '>
                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                <p className='font-semibold'>{user.email}</p>
            </div>
        }
    </div>
  )
}

export default SigningWithGoogle