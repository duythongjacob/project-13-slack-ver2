import React from 'react'
import styled from 'styled-components';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat';

import {

  Routes,
  Route,

} from "react-router-dom";


function HomeScreen() {
  return (
    <>
    <Header/>
    <AppBody>
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Chat />}></Route>
      </Routes>
    </AppBody>

    </>
  )
}

export default HomeScreen
const AppBody= styled.div`

  display: flex;
  height: 100vh;
`