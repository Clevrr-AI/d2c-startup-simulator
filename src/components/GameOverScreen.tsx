import React from 'react';
import { useGame } from '../context/GameContext';
import PixelButton from './ui/PixelButton';
import MetricsDisplay from './MetricsDisplay';
import { Trophy, XCircle } from 'lucide-react';

const GameOverScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const isWin = state.gameStatus === 'won';
  
  const handleRestart = () => {
    dispatch({ type: 'RESET_GAME' });
    dispatch({ type: 'START_GAME' });
  };
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <div className={`mb-6 ${isWin ? 'text-yellow-500' : 'text-red-500'}`}>
        {isWin ? (
          <Trophy className="w-24 h-24 inline-block animate-bounce" />
        ) : (
          <XCircle className="w-24 h-24 inline-block animate-pulse" />
        )}
      </div>
      
      <h2 className="pixel-text text-3xl mb-6">
        {isWin ? 'Congratulations!' : 'Game Over'}
      </h2>
      
      <div className="pixel-border p-6 max-w-2xl mb-8 bg-white">
        <h3 className="pixel-text text-2xl mb-6">
          {isWin
            ? `You successfully grew ${state.brandName} to a $10M business!`
            : `Your D2C journey with ${state.brandName} has ended.`}
        </h3>
        
        <div className="mb-6">
          <MetricsDisplay metrics={state.metrics} />
        </div>
        
        <div className="mb-6 pixel-text">
          {isWin ? (
            <p>You've proven yourself as a successful D2C entrepreneur! Your brand is thriving and the future looks bright.</p>
          ) : (
            <p>
              {state.metrics.cash < 0
                ? "You've run out of money. Cash flow is critical for any business."
                : state.metrics.founderSanity <= 0
                ? "Your founder sanity reached zero. Remember to take care of yourself."
                : state.metrics.employeeHappiness <= 0
                ? "Your employees all quit. A business is only as strong as its team."
                : "You didn't reach $10M in annual revenue. Keep learning and try again!"}
            </p>
          )}
        </div>
      </div>
      
      <div className="pixel-border p-6 max-w-2xl mb-8 bg-blue-100">
        <h3 className="pixel-text text-xl mb-4">Decision History</h3>
        <div className="text-left max-h-60 overflow-y-auto">
          {state.questionHistory.map((item, index) => (
            <div key={index} className="mb-3 pb-3 border-b border-dashed border-gray-300">
              <p className="pixel-text font-bold">{item.question}</p>
              <p className="pixel-text text-sm ml-4">→ {item.choice}</p>
            </div>
          ))}
        </div>
      </div>
      
      <PixelButton onClick={handleRestart} className="animate-pulse">
        Play Again
      </PixelButton>
    </div>
  );
};

export default GameOverScreen;