// src/pages/Onboarding.tsx
import { useState, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const onboardingSteps = [
  {
    id: 1,
    image: '/assets/image.png',
    title: 'በደህና መጡ! Welcome!',
    subtitle: 'Swipe up to begin your learning journey',
    bgColor: '#6A5ACD'
  },
  {
    id: 2,
    image: '/assets/onboarding/2-lesson.jpg',
    title: 'Learn Anywhere',
    subtitle: '5-minute lessons that fit your schedule',
    bgColor: '#FF6B6B'
  },
  {
    id: 3,
    image: '/assets/onboarding/3-goal.jpg',
    title: 'Reach Your Goals',
    subtitle: 'Start with a quick placement test',
    bgColor: '#20B2AA'
  }
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    // Swipe up (next)
    if (touchStart - touchEnd > 50) {
      if (currentStep < onboardingSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        window.location.href = '/assessment';
      }
    }
    // Swipe down (back)
    if (touchEnd - touchStart > 50 && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div 
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        background: onboardingSteps[currentStep].bgColor
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <img
        src={onboardingSteps[currentStep].image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.7
        }}
      />

      {/* Content */}
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '20px',
        color: 'white',
        textAlign: 'center'
      }}>
        {/* Progress Dots */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '20px'
        }}>
          {onboardingSteps.map((_, i) => (
            <div 
              key={i}
              style={{
                width: i === currentStep ? '24px' : '8px',
                height: '8px',
                background: i === currentStep ? 'white' : 'rgba(255,255,255,0.5)',
                borderRadius: '4px',
                transition: 'width 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '12px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {onboardingSteps[currentStep].title}
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.5',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            {onboardingSteps[currentStep].subtitle}
          </p>
        </div>

        {/* Swipe Hint */}
        <div style={{
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'bounce 2s infinite'
        }}>
          <FaArrowUp size={24} />
          <p style={{ marginTop: '8px', fontSize: '14px' }}>Swipe up to continue</p>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          overscroll-behavior: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}