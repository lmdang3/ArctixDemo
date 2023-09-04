import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/AppNavbar';
import Footer from './components/Footer/AppFooter';
       
// Pages
import Home from './pages/home/home';
import About from './pages/about/about'
import './App.css';
import './aos.css';



function App() {
  return (
    <Router>
            <div>
        <Navbar /> {/* Display the navigation bar */}
      <Routes>
      <Route path='/' element={< Home />}></Route>
      <Route path='/about' element={< About />}></Route>
        {/* Add more routes as needed */}
        <Route path="*" Component={() => <div>404 Not Found</div>} />

      </Routes>
      <Footer /> {/* Display the footer */}
      </div>
    </Router>
  );
}

export default App;