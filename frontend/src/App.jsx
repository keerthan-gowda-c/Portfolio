import { useState } from 'react'
import './App.css'
import Header from './component/Header/header';
import HomePage from './pages/Home/Homepage';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer/footer';


function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
