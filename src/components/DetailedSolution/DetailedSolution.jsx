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
      color: 'linear-gradient(135deg, #6e8efb, #a777e3)',
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
    <div className="detailed-solution-container">
      <div className="solution-header">
        <h2>
          <span className="method-title">{method.title}</span>
        </h2>
        <p className="problem-text">Problem: {problem}</p>
      </div>
      
      <div className="solution-content">
        <div className="steps-container card">
          <div className="steps-header" style={{ background: method.color || 'linear-gradient(135deg, #6e8efb, #a777e3)' }}>
            <h3>Step-by-Step Solution</h3>
          </div>
          <div className="steps-list">
            {method.steps.map((step, index) => (
              <div key={index} className="solution-step">
                <div className="step-number" style={{ backgroundColor: index === method.steps.length - 1 ? '#4caf50' : '#4c6ef5' }}>
                  {index + 1}
                </div>
                <div className="step-content">
                  <p>{step}</p>
                  {index === 0 && (
                    <div className="step-explanation">
                      Begin by understanding what we're looking for and identifying the known variables.
                    </div>
                  )}
                  {index === 1 && (
                    <div className="step-explanation">
                      Apply the appropriate mathematical formula to the problem.
                      {method.id === 1 && <p>Using the formula: x = (22 - 7) ÷ 3</p>}
                      {method.id === 2 && <p>When plotting points, we can visualize the line 3x + 7 = 22</p>}
                      {method.id === 3 && <p>Rearranging to standard form: 3x = 22 - 7</p>}
                      {method.id === 4 && <p>Breaking down into simpler steps: First subtract 7 from both sides, then divide by 3</p>}
                    </div>
                  )}
                  {index === 2 && (
                    <div className="step-explanation">
                      Solve for the unknown variable to find the final answer.
                      <p>The solution is: <span className="final-answer">x = 5</span></p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {showGraph && (
          <div className="graph-container card">
            <div className="graph-header">
              <h3>Visual Representation</h3>
            </div>
            <div className="graph-area">
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
      </div>
      
      <div className="solution-actions">
        <div className="action-card">
          <div className="action-icon">📋</div>
          <p>This worked example follows the standard algebraic method for solving linear equations</p>
        </div>
      </div>
      
      <div className="navigation-buttons">
        <button 
          className="btn btn-outline back-btn"
          onClick={() => navigate(-1)}
        >
          <span className="arrow-left">←</span> Back to Solutions
        </button>
        <button 
          className="btn btn-primary home-btn"
          onClick={() => navigate('/')}
        >
          Try New Problem
        </button>
      </div>
    </div>
  );
};

export default DetailedSolution; 