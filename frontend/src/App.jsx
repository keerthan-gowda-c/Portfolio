import { useState } from 'react'
import './App.css'
import Header from './component/Header/header';
import HomePage from './pages/Home/Homepage';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
   <Header/>

   <Outlet/>
   
    </>
  )
}

export default App;
