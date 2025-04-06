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
      color: 'linear-gradient(135deg, #E8F0FE, #F2F6FD)',
      borderColor: '#007AFF',
      iconColor: '#007AFF',
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
    <div className="detailed-solution-container ios-style">
      <div className="ios-header">
        <button 
          className="ios-back-button"
          onClick={() => navigate(-1)}
        >
          <span className="ios-back-arrow">‹</span>
          <span>Back</span>
        </button>
        <h2>{method.title}</h2>
        <div className="spacer"></div>
      </div>
      
      <div className="ios-problem">
        <p className="problem-text">{problem}</p>
      </div>
      
      <div className="ios-solution-content">
        <div className="ios-steps-section">
          <div className="ios-section-header">
            <div className="ios-section-icon" style={{color: method.borderColor || '#007AFF'}}>
              {method.icon || '🧮'}
            </div>
            <h3>Step-by-Step Solution</h3>
          </div>
          
          <div className="ios-steps-list">
            {method.steps.map((step, index) => (
              <div key={index} className="ios-step-item">
                <div className="ios-step-number" style={{ 
                  backgroundColor: index === method.steps.length - 1 ? '#34C759' : '#007AFF' 
                }}>
                  {index + 1}
                </div>
                <div className="ios-step-content">
                  <p className="ios-step-title">{step}</p>
                  
                  {index === 0 && (
                    <div className="ios-step-detail">
                      <p>Begin by understanding what we're looking for and identifying the known variables.</p>
                      <p>In this equation: <strong>3x + 7 = 22</strong></p>
                      <p>We need to solve for the value of x.</p>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="ios-step-detail">
                      <p>Apply the appropriate mathematical formula to the problem.</p>
                      {method.id === 1 && 
                        <div className="ios-formula">
                          <p>3x + 7 = 22</p>
                          <p>3x = 22 - 7</p>
                          <p>3x = 15</p>
                        </div>
                      }
                      {method.id === 2 && 
                        <div className="ios-formula">
                          <p>Plot the line 3x + 7 = 22</p>
                          <p>Find x-intercept by setting y = 0</p>
                        </div>
                      }
                      {method.id === 3 && 
                        <div className="ios-formula">
                          <p>Rearranging to standard form:</p>
                          <p>3x = 22 - 7</p>
                          <p>3x = 15</p>
                        </div>
                      }
                      {method.id === 4 && 
                        <div className="ios-formula">
                          <p>Step 1: Subtract 7 from both sides</p>
                          <p>3x + 7 - 7 = 22 - 7</p>
                          <p>3x = 15</p>
                        </div>
                      }
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="ios-step-detail">
                      <p>Solve for the unknown variable to find the final answer.</p>
                      <div className="ios-formula">
                        <p>3x = 15</p>
                        <p>x = 15 ÷ 3</p>
                        <p>x = 5</p>
                      </div>
                      <div className="ios-final-answer">
                        <div className="ios-answer-badge">Solution</div>
                        <div className="ios-answer-value">x = 5</div>
                      </div>
                    </div>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {showGraph && (
          <div className="ios-graph-section">
            <div className="ios-section-header">
              <div className="ios-section-icon" style={{color: '#34C759'}}>📊</div>
              <h3>Visual Representation</h3>
            </div>
            <div className="ios-graph-area">
              <div className="ios-graph-placeholder">
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
              <p className="ios-graph-caption">Graph showing the line 3x + 7 = 22</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="ios-footer">
        <button 
          className="ios-footer-button try-new"
          onClick={() => navigate('/')}
        >
          Try New Problem
        </button>
      </div>
    </div>
  );
};

export default DetailedSolution; 