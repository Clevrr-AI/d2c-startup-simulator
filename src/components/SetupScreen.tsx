import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import PixelButton from './ui/PixelButton';
import MetricsDisplay from './MetricsDisplay';

const SetupScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const [brandName, setBrandName] = useState('');
  const [showingInitialMetrics, setShowingInitialMetrics] = useState(false);
  
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (brandName.trim()) {
      setShowingInitialMetrics(true);
    }
  };
  
  const handleStartGame = () => {
    dispatch({ type: 'SET_BRAND_NAME', payload: brandName });
  };
  
  if (showingInitialMetrics) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <h2 className="pixel-text text-3xl mb-6">
          Welcome to <span className="text-blue-600">{brandName}</span>!
        </h2>
        
        <div className="pixel-border p-6 max-w-2xl mb-8 bg-white">
          <h3 className="pixel-text text-2xl mb-4">Your Starting Metrics</h3>
          
          <div className="mb-6">
            <MetricsDisplay metrics={state.metrics} />
          </div>
          
          <p className="pixel-text mb-6">
            These are your starting metrics. Your decisions will affect these values throughout the game.
            Remember, your goal is to reach $10M in annual revenue, which means about $833K in monthly revenue.
          </p>
          
          <p className="pixel-text mb-4 font-bold">
            You have 12 months. Good luck!
          </p>
        </div>
        
        <PixelButton onClick={handleStartGame} className="animate-pulse">
          Begin Month 1: January
        </PixelButton>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <h2 className="pixel-text text-3xl mb-6">Name Your D2C Brand</h2>
      
      <div className="pixel-border p-6 max-w-2xl mb-8 bg-white">
        <p className="pixel-text mb-6">
          Every great brand needs a name. What will you call your D2C company?
        </p>
        
        <form onSubmit={handleNameSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="YourBrand"
            className="pixel-input w-full max-w-md mb-6 p-2 text-center text-xl"
            maxLength={20}
          />
          
          <PixelButton type="submit" disabled={!brandName.trim()}>
            Continue
          </PixelButton>
        </form>
      </div>
    </div>
  );
};

export default SetupScreen;