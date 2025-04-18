import React, { useState } from 'react'
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from './firebase/firebaseInfo';

function SignInWithFacebook() {
    const [user, setUser] = useState(null);
    console.log(user);

    const provider = new FacebookAuthProvider();
    const auth = getAuth(app);

    const handleFacebookSignin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const userInfo = result.user
            setUser(userInfo)
        }).catch(error => {
            console.log(error);
        })
    }

    const handleFacebookSignOut = () => {
        console.log("click2");
        
    }


    return (
        <div className='text-center mx-auto my-auto space-x-4 bg-slate-50 py-14'>
            <h2 className='text-center my-5 text-2xl font-semibold'>Sign in With Facebook</h2>
            {
                user
                    ?
                    <button onClick={handleFacebookSignOut} className='bg-rose-300 px-4 py-2 rounded-md hover:bg-rose-400 active:bg-rose-500'>Log Out</button>
                    :
                    <button onClick={handleFacebookSignin} className='bg-green-300 px-4 py-2 rounded-md hover:bg-green-400 active:bg-green-500'>Sign In With Facebook</button>
            }
            <br />
            {
                user && <div className='mt-7 flex flex-col justify-center items-center'>
                    <img className='w-20 h-20 object-cover rounded-full bg-slate-400' src={user.photoURL || "https://graph.facebook.com/1822184948515831/picture"} alt="user photo" />
                    <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                    <p className='font-semibold'>{user.email}</p>
                </div>
            }
        </div>
    )
}

export default SignInWithFacebook