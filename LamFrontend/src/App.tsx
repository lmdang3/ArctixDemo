import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import AppNavbar from './components/Navbar/AppNavbar';
import AppFooter from './components/Footer/AppFooter';
       
// Pages
import Home from './pages/home/home';
import About from './pages/about/about'
import './App.css';
import './aos.css';



const App = () => {
  return (

    
    <div className="">
      <AppNavbar />

      {/* Main Contents */}
      <div>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={ <About/>}/>
      </Routes>
    
      </div>
      <AppFooter />
    </div>

  
  );
};

export default App;