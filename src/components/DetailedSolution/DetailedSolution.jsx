import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DetailedSolution.css';

const DetailedSolution = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { problem, method } = location.state || { 
    problem: 'Example Problem',
    method: {
      id: 1,
      title: 'Standard Method',
      color: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
      iconColor: '#6c5ce7',
      icon: '🧮',
      steps: [
        'Step 1: Identify the variables',
        'Step 2: Apply the formula',
        'Step 3: Solve algebraically'
      ]
    }
  };

  // Sample graph data - in a real app this would be dynamic
  const showGraph = method.id === 2; // Only show graph for Graphical Method

  return (
    <div className="detailed-solution-container modern-style">
      <div className="solution-header">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <span className="back-arrow">←</span>
          <span>Back</span>
        </button>
        <h2>{method.title}</h2>
        <div className="header-spacer"></div>
      </div>
      
      <div className="problem-container">
        <div className="problem-card">
          <h3>Your Problem</h3>
          <p className="problem-text">{problem}</p>
        </div>
      </div>
      
      <div className="steps-container">
        <div className="method-intro" style={{
          background: method.color
        }}>
          <div className="method-icon">
            {method.icon || '🧮'}
          </div>
          <h3>Step-by-Step Solution</h3>
          <p>Follow along with the detailed solution process</p>
        </div>
        
        <div className="steps-list">
          {method.steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                <div className="step-number" style={{ 
                  backgroundColor: index === method.steps.length - 1 ? 'var(--secondary-color)' : 'var(--primary-color)' 
                }}>
                  {index + 1}
                </div>
                <h4 className="step-title">{step}</h4>
              </div>
              
              <div className="step-content">
                {index === 0 && (
                  <div className="step-details">
                    <p>Begin by understanding what we're looking for and identifying the known variables.</p>
                    <div className="formula-box">
                      <p>In this equation: <strong>3x + 7 = 22</strong></p>
                      <p>We need to solve for the value of x.</p>
                    </div>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="step-details">
                    <p>Apply the appropriate mathematical formula to the problem.</p>
                    <div className="formula-box">
                      {method.id === 1 && 
                        <>
                          <p>3x + 7 = 22</p>
                          <p>3x = 22 - 7</p>
                          <p>3x = 15</p>
                        </>
                      }
                      {method.id === 2 && 
                        <>
                          <p>Plot the line 3x + 7 = 22</p>
                          <p>Find x-intercept by setting y = 0</p>
                        </>
                      }
                      {method.id === 3 && 
                        <>
                          <p>Rearranging to standard form:</p>
                          <p>3x = 22 - 7</p>
                          <p>3x = 15</p>
                        </>
                      }
                      {method.id === 4 && 
                        <>
                          <p>Step 1: Subtract 7 from both sides</p>
                          <p>3x + 7 - 7 = 22 - 7</p>
                          <p>3x = 15</p>
                        </>
                      }
                    </div>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="step-details">
                    <p>Solve for the unknown variable to find the final answer.</p>
                    <div className="formula-box">
                      <p>3x = 15</p>
                      <p>x = 15 ÷ 3</p>
                      <p>x = 5</p>
                    </div>
                    <div className="final-answer">
                      <div className="answer-badge">Solution</div>
                      <div className="answer-value">x = 5</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showGraph && (
        <div className="graph-container">
          <h3 className="graph-title">
            <span className="graph-icon">📊</span>
            Visual Representation
          </h3>
          <div className="graph-content">
            <div className="graph-placeholder">
              <div className="axis x-axis"></div>
              <div className="axis y-axis"></div>
              <div className="plot-point" style={{bottom: '60%', left: '40%'}}></div>
              <div className="plot-point" style={{bottom: '30%', left: '70%'}}></div>
              <div className="plot-line"></div>
              <div className="coordinate">
                <div className="coordinate-text">(0, 7.33)</div>
              </div>
              <div className="coordinate" style={{left: '70%', bottom: '30%'}}>
                <div className="coordinate-text">(5, 0)</div>
              </div>
            </div>
            <p className="graph-caption">Graph showing the line 3x + 7 = 22</p>
          </div>
        </div>
      )}
      
      <div className="action-buttons">
        <button 
          className="secondary-button"
          onClick={() => navigate(-1)}
        >
          <span>Other Solutions</span>
        </button>
        <button 
          className="primary-button"
          onClick={() => navigate('/')}
        >
          <span>Try New Problem</span>
        </button>
      </div>
    </div>
  );
};

export default DetailedSolution; 