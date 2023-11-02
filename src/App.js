import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationMenu from './components/Navbar.js';
import Reserve from './pages/Reserve.js'; // Adjusted case
import Home from './pages/Home.js'; // Adjusted case
import Models from './pages/Models.js'; // Adjusted case

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/home" element={<Home />} />
          <Route path="/models" element={<Models />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;