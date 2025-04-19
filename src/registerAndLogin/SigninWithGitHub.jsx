import React, { useState } from 'react'
import { getAuth, signInWithPopup, GithubAuthProvider, signOut} from "firebase/auth";
import { app } from './firebase/firebaseInfo';

function SigninWithGitHub() {
    const [user, setUser] = useState(null);
    console.log(user);
    

    const auth = getAuth(app);
    const provider = new GithubAuthProvider();


    const handleGitHubSignin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const userInfo = result.user
            setUser(userInfo) 
        }).catch(error => {
            console.log(error);
        })
    };

    const handleGitHubSignOut = () => {
           signOut(auth)
                .then(result => {
                    setUser(null)
                }).catch(error => {
                    console.log(error);
                    
                })
    };

    return (
        <div className='text-center mx-auto my-auto space-x-4 bg-sky-50 py-14'>
            <h2 className='text-center my-5 text-2xl font-semibold'>Sign in With GitHub</h2>
            {
                user
                    ?
                    <button onClick={handleGitHubSignOut} className='bg-rose-300 px-4 py-2 rounded-md hover:bg-rose-400 active:bg-rose-500'>Log Out</button>
                    :
                    <button onClick={handleGitHubSignin} className='bg-green-300 px-4 py-2 rounded-md hover:bg-green-400 active:bg-green-500'>Sign In With GitHub</button>
            }
            <br />
            {
                user && <div className='mt-7 flex flex-col justify-center items-center'>
                    <img className='w-20 h-20 object-cover rounded-full bg-slate-400' src={user.photoURL || "https://avatars.githubusercontent.com/u/179904818?v=4"} alt="user photo" />
                    <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                    <p className='font-semibold'>{user.email}</p>
                </div>
            }
        </div>
    )
}

export default SigninWithGitHub