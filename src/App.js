import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/Navbar.js';
import Reserve from './pages/Reserve.js'; // Adjusted case
import Models from './pages/Models.js'; // Adjusted case
import Footer from './components/Footer.js';
import Home from './pages/Home.js'; // Adjusted case
import './index.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/models" element={<Models />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;