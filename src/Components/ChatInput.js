
import React, { useState } from 'react'
import { Button } from '@mui/material';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { addDoc , serverTimestamp, collection} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelName, channelId,chatRef}) {
    const [input, setInput] = useState('')
    const [user] = useAuthState(auth)
    console.log(channelId);
    const sendMessage =  async(e) => {
      
  
        e.preventDefault()
            if(!channelId) {
                return false
            }
            try{
                const document = collection(db, 'rooms', channelId.roomId,'messages')
                const payload = {
                    message: input,
                    timestamp: serverTimestamp(),
                    user: user.displayName,
                    userImage: user.photoURL
                }
                const docRef= await addDoc( document, payload)

                        console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
              }
              chatRef?.current?.scrollIntoView({
                behavior: "smooth"
              })
              setInput('')
    }
  return (
    <ChatInputContainer>
        <form >
            <input value={input}  placeholder={`Message #${channelName}`} onChange={e => setInput(e.target.value)}/>
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput
const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {    
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;

    }
    > form > button {
        display: none !important;
    }
`