import React, { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [welcomeText, setWelcomeText] = useState('');
  const fullText = 'Welcome to my corner of the internet!';

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 300);

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setWelcomeText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(loadingInterval);
      setProgress(100);

      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 5500);

    return () => {
      clearInterval(loadingInterval);
      clearInterval(typeInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${progress === 100 ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <h1 className="welcome-text">{welcomeText}</h1>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-percentage">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
