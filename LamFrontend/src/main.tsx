import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter as Router,
} from "react-router-dom";

// Componenents
import AppNavbar from './components/Navbar/AppNavbar';
import AppFooter from './components/Footer/AppFooter';
       
// Pages
import Home from './pages/home/home';
import './App.css';
import './aos.css';

import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/vendor/aos/aos.css";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Router>
  <App/>
</Router>
  )
