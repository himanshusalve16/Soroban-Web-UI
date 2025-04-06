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
      color: 'linear-gradient(135deg, #E8F0FE, #F2F6FD)',
      borderColor: '#007AFF',
      iconColor: '#007AFF',
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
      color: 'linear-gradient(135deg, #F0F8FF, #F5FBFF)',
      borderColor: '#34C759',
      iconColor: '#34C759',
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
      color: 'linear-gradient(135deg, #F5F5F7, #F8F8FA)',
      borderColor: '#FF9500',
      iconColor: '#FF9500',
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
      color: 'linear-gradient(135deg, #F2F2F7, #F5F5FA)',
      borderColor: '#5856D6',
      iconColor: '#5856D6',
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
    <div className="solution-container ios-style">
      <div className="ios-header">
        <button 
          className="ios-back-button"
          onClick={() => navigate(-1)}
        >
          <span className="ios-back-arrow">‹</span>
          <span>Back</span>
        </button>
        <h2>Solutions</h2>
        <div className="spacer"></div>
      </div>
      
      <div className="ios-problem">
        <p className="problem-text">{problem}</p>
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
                className="ios-card"
                onClick={() => handleCardClick(method.id)}
                style={{
                  background: method.color,
                  borderColor: method.borderColor
                }}
              >
                <div className="ios-card-icon" style={{color: method.iconColor}}>
                  {method.icon}
                </div>
                <div className="ios-card-content">
                  <h3>{method.title}</h3>
                  <p>{method.preview}</p>
                  <button className="ios-button" style={{backgroundColor: method.borderColor}}>
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="ios-instructions">
        <div className="instruction-dot"></div>
        <p>Swipe cards to view different solution methods</p>
      </div>
    </div>
  );
};

export default Solution; 