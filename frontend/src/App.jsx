
import './App.css'
import Header from './component/Header/header';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer/footer';
import { useState } from 'react';


function App() {
  const [lightMode, setLightMode] = useState(false);
  const toggleTheme = () => {
    setLightMode(prev => !prev);
  }

  return (

    <div className={lightMode ? "app light-mode" : "app"}>
      <header>
        <Header lightMode={lightMode} toggleTheme={toggleTheme}/>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>

  )
}

export default App;
