import React, { useState } from 'react'
import {auth, googleProvider} from '../config/FirebaseConfig'

import { createUserWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth'

function Auth() {
    //State Values
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function signIn(){
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err)
        }
    }
    async function signInWithGoogle(){
        try{
            await signInWithPopup(auth,googleProvider)
        }catch(err){
            console.log(err)
        }
    }
    async function signOut(){
        try{
            await signOut(auth)
        }catch(err){
            alert(err)
        }
    }

    return (
        <main>
            <section>
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button onClick={signIn}>Create Account and Sign In</button>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
                <button onClick={signOut}>Log Out</button>
            </section>
            <section>
                <img src={auth?.currentUser?.photoURL} alt={auth?.currentUser?.email}/>
                <p>{auth?.currentUser?.email}</p>
            </section>
        </main>
    )
}

export default Auth