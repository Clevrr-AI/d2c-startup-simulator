import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';

interface MonthTransitionProps {
  month: number;
  onTransitionComplete: () => void;
}

const MonthTransition: React.FC<MonthTransitionProps> = ({ 
  month, 
  onTransitionComplete 
}) => {
  const { getMonthName } = useGame();
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    // Show transition for 2 seconds then trigger callback
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onTransitionComplete, 500); // Allow fade-out animation to complete
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <h2 className="pixel-text text-5xl text-white mb-4 animate-pulse">
          {getMonthName(month)}
        </h2>
        <div className="pixel-text text-white text-xl">
          A new month brings new challenges...
        </div>
      </div>
    </div>
  );
};

export default MonthTransition;