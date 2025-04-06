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

  return (
    <div className="home-container">
      <div className="app-header">
        <h1>AI Education Helper</h1>
        <p>Solve your math and science problems with step-by-step solutions</p>
      </div>
      
      <div className="input-container card">
        <form onSubmit={handleSubmit}>
          <div className="camera-input">
            <button 
              type="button" 
              className="camera-button"
              onClick={handleCameraInput}
            >
              <div className="camera-icon">📷</div>
              <div className="camera-text">
                <span className="primary-text">Take Photo of Problem</span>
                <span className="secondary-text">Snap a picture of your written problem</span>
              </div>
            </button>
          </div>
          
          <div className="separator">
            <span>or</span>
          </div>
          
          <div className="text-input">
            <h3>Type Your Problem</h3>
            <textarea
              placeholder="E.g., Solve for x: 3x + 7 = 22"
              value={textInput}
              onChange={handleTextInputChange}
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={!textInput.trim()}
          >
            Find Solution <span className="arrow-icon">→</span>
          </button>
        </form>
      </div>
      
      <div className="example-problems">
        <h3>Example Problems</h3>
        <div className="examples-grid">
          <div className="example-card" onClick={() => {
            setTextInput("What is the area of a circle with radius 5cm?");
          }}>
            <div className="example-icon">📏</div>
            <div className="example-text">Circle area calculation</div>
          </div>
          <div className="example-card" onClick={() => {
            setTextInput("Solve the quadratic equation: x² - 5x + 6 = 0");
          }}>
            <div className="example-icon">📊</div>
            <div className="example-text">Quadratic equation</div>
          </div>
          <div className="example-card" onClick={() => {
            setTextInput("If a ball is thrown upward with an initial velocity of 15 m/s, when will it reach its maximum height?");
          }}>
            <div className="example-icon">🎯</div>
            <div className="example-text">Physics problem</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 