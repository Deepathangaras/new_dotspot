import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes
import Navbar from './components/navbar/Navbar'; // Your Navbar component
import Home from './pages/home/Home'; // Your Home component
import NavbarComponent from './components/navbar/Navbar';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Update Route elements */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
