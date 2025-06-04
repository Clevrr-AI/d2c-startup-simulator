import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import StartScreen from './components/StartScreen';
import SetupScreen from './components/SetupScreen';
import GameScreen from './components/GameScreen';

const GameContainer: React.FC = () => {
  const { state } = useGame();

  // Render different screens based on game status
  const renderScreen = () => {
    switch (state.gameStatus) {
      case 'not-started':
        return <StartScreen />;
      case 'setup':
        return <SetupScreen />;
      case 'in-progress':
        return <GameScreen />;
      default:
        return <GameScreen />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto">
        {renderScreen()}
      </div>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}

export default App;