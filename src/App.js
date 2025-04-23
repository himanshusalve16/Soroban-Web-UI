import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Solution from './components/Solution/Solution';
import DetailedSolution from './components/DetailedSolution/DetailedSolution';
import './App.css';

function App() {
  useEffect(() => {
    // Add Poppins font from Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/detailed-solution" element={<DetailedSolution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
