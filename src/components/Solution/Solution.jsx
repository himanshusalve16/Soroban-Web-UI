import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

// import required modules
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import './Solution.css';

const Solution = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { problem } = location.state || { problem: 'Example Problem' };
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Dummy solution methods for demonstration
  const solutionMethods = [
    {
      id: 1,
      title: 'Standard Method',
      preview: 'Solving using algebraic manipulation and standard formulas...',
      color: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
      iconColor: '#6c5ce7',
      icon: '🧮',
      steps: [
        'Step 1: Identify the variables',
        'Step 2: Apply the formula',
        'Step 3: Solve algebraically'
      ]
    },
    {
      id: 2,
      title: 'Graphical Method',
      preview: 'Visualizing the problem using coordinate geometry...',
      color: 'linear-gradient(135deg, #55efc4, #00b894)',
      iconColor: '#00b894',
      icon: '📊',
      steps: [
        'Step 1: Plot the variables',
        'Step 2: Identify key points',
        'Step 3: Use geometric principles'
      ]
    },
    {
      id: 3,
      title: 'Alternative Approach',
      preview: 'Using an unconventional but efficient approach...',
      color: 'linear-gradient(135deg, #fab1c9, #fd79a8)',
      iconColor: '#fd79a8',
      icon: '💡',
      steps: [
        'Step 1: Reframe the problem',
        'Step 2: Apply shortcut formula',
        'Step 3: Calculate the result'
      ]
    },
    {
      id: 4,
      title: 'Step-by-Step Analysis',
      preview: 'Breaking down the problem into smaller, manageable pieces...',
      color: 'linear-gradient(135deg, #dfe6e9, #b2bec3)',
      iconColor: '#636e72',
      icon: '🔍',
      steps: [
        'Step 1: Identify the core problem',
        'Step 2: Break down into sub-problems',
        'Step 3: Solve each part systematically'
      ]
    }
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleCardClick = (methodId) => {
    navigate('/detailed-solution', { 
      state: { 
        problem,
        method: solutionMethods.find(method => method.id === methodId)
      } 
    });
  };

  return (
    <div className="solution-container modern-style">
      <div className="solution-header">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <span className="back-arrow">←</span>
          <span>Back</span>
        </button>
        <h2>Solutions</h2>
        <div className="header-spacer"></div>
      </div>
      
      <div className="problem-container">
        <div className="problem-card">
          <h3>Your Problem</h3>
          <p className="problem-text">{problem}</p>
        </div>
      </div>
      
      <div className="solutions-title">
        <div className="title-line"></div>
        <h3>Available Solution Methods</h3>
        <div className="title-line"></div>
      </div>
      
      <div className="carousel-container">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          onSlideChange={handleSlideChange}
          className="solution-carousel"
        >
          {solutionMethods.map((method, index) => (
            <SwiperSlide key={method.id}>
              <div 
                className="solution-card"
                onClick={() => handleCardClick(method.id)}
                style={{
                  background: method.color
                }}
              >
                <div className="solution-card-header">
                  <div className="solution-card-icon">
                    {method.icon}
                  </div>
                  <h3>{method.title}</h3>
                </div>
                <div className="solution-card-content">
                  <p>{method.preview}</p>
                  <ul className="solution-steps-preview">
                    {method.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                  <button className="view-button">
                    View Detailed Solution
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="swipe-instruction">
        <div className="instruction-indicator"></div>
        <p>Swipe cards to explore different solution methods</p>
      </div>
      
      <div className="solution-footer">
        <button 
          className="new-problem-button"
          onClick={() => navigate('/')}
        >
          <span>Try Another Problem</span>
        </button>
      </div>
    </div>
  );
};

export default Solution; 