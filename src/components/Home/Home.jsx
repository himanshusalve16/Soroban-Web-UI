import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [textInput, setTextInput] = useState('');
  const navigate = useNavigate();

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim()) {
      navigate('/solution', { state: { problem: textInput } });
    }
  };

  const handleCameraInput = () => {
    // In a real app, this would open the camera
    alert('Camera functionality would open here.');
    // For demo purposes, we'll just navigate with dummy data
    navigate('/solution', { state: { problem: 'Example Math Problem: Find the value of x in equation 3x + 7 = 22' } });
  };

  const exampleProblems = [
    {
      id: 1,
      text: "What is the area of a circle with radius 5cm?",
      icon: "📏",
      label: "Geometry"
    },
    {
      id: 2,
      text: "Solve the quadratic equation: x² - 5x + 6 = 0",
      icon: "📊",
      label: "Algebra"
    },
    {
      id: 3,
      text: "If a ball is thrown upward with an initial velocity of 15 m/s, when will it reach its maximum height?",
      icon: "🎯",
      label: "Physics"
    }
  ];

  return (
    <div className="home-container ios-style">
      <div className="ios-header">
        <h1>AI Education Helper</h1>
      </div>
      
      <div className="ios-subheader">
        <p>Solve math and science problems with steps</p>
      </div>
      
      <div className="ios-main-content">
        <div className="ios-section">
          <div className="ios-input-field">
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Type your problem here..."
                value={textInput}
                onChange={handleTextInputChange}
              />
              <button 
                type="submit" 
                className="ios-primary-button"
                disabled={!textInput.trim()}
              >
                Solve Problem
              </button>
            </form>
          </div>
          
          <div className="ios-separator">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>
          
          <button 
            className="ios-secondary-button"
            onClick={handleCameraInput}
          >
            <span className="ios-camera-icon">📷</span>
            Take Photo of Problem
          </button>
        </div>
        
        <div className="ios-section">
          <h2>Example Problems</h2>
          <div className="ios-examples-list">
            {exampleProblems.map(example => (
              <div 
                key={example.id} 
                className="ios-example-item"
                onClick={() => setTextInput(example.text)}
              >
                <div className="ios-example-icon">{example.icon}</div>
                <div className="ios-example-content">
                  <p>{example.text}</p>
                  <span className="ios-example-label">{example.label}</span>
                </div>
                <div className="ios-chevron">›</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="ios-footnote">
        <p>Tap an example or enter your own problem to begin</p>
      </div>
    </div>
  );
};

export default Home; 