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
      color: 'linear-gradient(135deg, #6e8efb, #a777e3)',
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
      color: 'linear-gradient(135deg, #42e695, #3bb2b8)',
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
      color: 'linear-gradient(135deg, #ffaa85, #ff7d7d)',
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
      color: 'linear-gradient(135deg, #ffd3a5, #fd6585)',
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
    <div className="solution-container">
      <div className="solution-header">
        <h2>Solution Methods</h2>
        <p className="problem-text">Problem: {problem}</p>
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
                style={{background: method.color}}
                onClick={() => handleCardClick(method.id)}
              >
                <div className="card-content">
                  <h3>{method.title}</h3>
                  <p>{method.preview}</p>
                  <div className="card-footer">
                    <button className="view-solution-btn">
                      View full solution <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="instructions">
        <div className="instruction-card">
          <div className="instruction-icon">↔️</div>
          <p>Swipe cards to explore different solution methods</p>
        </div>
        <div className="instruction-card">
          <div className="instruction-icon">👆</div>
          <p>Tap on a card to view the detailed step-by-step solution</p>
        </div>
      </div>
      
      <button 
        className="back-button"
        onClick={() => navigate(-1)}
      >
        Back to Input
      </button>
    </div>
  );
};

export default Solution; 