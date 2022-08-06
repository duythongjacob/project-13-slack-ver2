
import React  from 'react'
import styled from 'styled-components'


import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebase'
// import {useCollection} from 'react-firebase-hooks/firestore'
import {enterRoom} from '../features/appSlice'
import { useDispatch } from 'react-redux'
function SidebarOption({Icon, title, addChannelOption, id}) {
        const dispatch = useDispatch()

        const addChannel = async(e) => {
          const room= prompt('Create a room')
          e.preventDefault()

          try { const collectionRef = collection(db,'rooms')
          const payload = {
            name: room
          }
          const docRef = await addDoc(collectionRef, payload)
      
          console.log("Document written with ID: ", docRef.id);
       
        } catch (e) {
          console.error("Error adding document: ", e);
          }
        }

       const selectChannel = () => {
        if(id) {
          dispatch(enterRoom({
            roomId: id
          }))
        }
     }
  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel  : selectChannel}>
                  {Icon && <Icon fontSize='small' style={{
                   padding: '0 10',
                    fontSize: 36
                  }}/>} 
                  {Icon ? (<h4>{title}</h4>) : (<SidebarOptionChannel>
                    <span>#</span> {title}

                  </SidebarOptionChannel>)}
                
    </SidebarOptionContainer>
  )
}

export default SidebarOption
const SidebarOptionContainer = styled.div`
 display: flex;
 font-size: 16px;
 align-items: center;
 padding-left: 2px;
 cursor: pointer;
 :hover {
    opacity: 0.9;
    background-color: #340e36
 }

 > h3 {
    font-weight: 300
 }
 >h3 > span {
   padding: 15px;
 }

`


const SidebarOptionChannel =  styled.h3`
  padding: 10px 0;
  font-weight: 300;

`