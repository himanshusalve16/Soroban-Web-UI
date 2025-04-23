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
    <div className="home-container modern-style">
      <div className="hero-section">
        <div className="hero-content">
          <h1>AI Education Helper</h1>
          <p>Solve math and science problems with detailed step-by-step solutions</p>
        </div>
        <div className="hero-illustration">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <div className="input-section">
          <h2>Enter Your Problem</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-area">
              <textarea
                placeholder="Type your math or science problem here..."
                value={textInput}
                onChange={handleTextInputChange}
                className="problem-input"
              />
              <button 
                type="submit" 
                className="submit-btn"
                disabled={!textInput.trim()}
              >
                <span>Solve Now</span>
                <span className="btn-icon">→</span>
              </button>
            </div>
          </form>
          
          <div className="separator">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>
          
          <button 
            className="camera-btn"
            onClick={handleCameraInput}
          >
            <span className="camera-icon">📷</span>
            <span>Take Photo of Problem</span>
          </button>
        </div>
        
        <div className="examples-section">
          <h2>Example Problems</h2>
          <div className="examples-list">
            {exampleProblems.map(example => (
              <div 
                key={example.id} 
                className="example-card"
                onClick={() => setTextInput(example.text)}
              >
                <div className="example-icon">{example.icon}</div>
                <div className="example-content">
                  <p>{example.text}</p>
                  <span className="example-label">{example.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-card">
          <div className="info-icon">✨</div>
          <h3>AI-Powered</h3>
          <p>Our advanced AI provides accurate solutions to complex problems</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📝</div>
          <h3>Step-by-Step</h3>
          <p>Detailed explanations help you understand the solution process</p>
        </div>
        <div className="info-card">
          <div className="info-icon">🔍</div>
          <h3>Multiple Methods</h3>
          <p>See different approaches to solving the same problem</p>
        </div>
      </div>
      
      <div className="footer">
        <p>Tap an example or enter your own problem to begin</p>
      </div>
    </div>
  );
};

export default Home; 