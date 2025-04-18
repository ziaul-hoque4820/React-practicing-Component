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
    <div className='text-center mx-auto my-auto space-x-4 bg-slate-100 py-14'>
        <h2 className='text-center my-5 text-2xl font-semibold'>Sign in With Google</h2>
        {
            user 
            ?
            <button onClick={handleSignOut} className='bg-rose-300 px-4 py-2 rounded-md hover:bg-rose-400 active:bg-rose-500'>Log Out</button>
            :
            <button onClick={handleGoogleSignIn} className='bg-green-300 px-4 py-2 rounded-md hover:bg-green-400 active:bg-green-500'>Sign In With Google</button>
        }
        <br />
        {
            user && <div className='mt-7 flex flex-col justify-center items-center'>
                <img className='w-20 h-20 object-cover rounded-full bg-slate-400' src={user.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocIm2zIXi_cCgC8wELX4IQ-tZ3Ygax9p2A_CygB-kHLK4WbFNA0=s96-c"} alt="user photo" />
                <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                <p className='font-semibold'>{user.email}</p>
            </div>
        }
    </div>
  )
}

export default SigningWithGoogle