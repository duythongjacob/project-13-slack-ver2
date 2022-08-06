
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import styled from 'styled-components'
import { provider, auth } from '../firebase'

function Login() {
    const signIn = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider).then(
            () => {

            }
        ).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = provider.credentialFromError(error);
        })

    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg   " alt="" />
                <h1>Sign in to the Rooms</h1>
                <p>rooms.slack.com</p>
                <Button onClick={signIn}>
                    Sig in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh; 
    display: grid;
    place-items: center;
`
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0,0.24);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`