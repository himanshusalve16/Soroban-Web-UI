import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Solution from './components/Solution/Solution';
import DetailedSolution from './components/DetailedSolution/DetailedSolution';
import './App.css';

function App() {
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
