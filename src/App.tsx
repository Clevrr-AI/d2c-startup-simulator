import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import background from './assets/background.png';
import logo from './assets/logo.png';
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
    <div className="min-h-screen" style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="container mx-auto">
        <div className="container bg-white text-blue-600 mx-auto rounded p-3 flex justify-between">
          <img src={logo} alt="D2C Simulator Logo" className="w-32 mr-2" />
          <div className="flex items-center">
            <h1 className="pixel-text text-4xl me-5 font-bold tracking-tight">D2C Simulator</h1>
            <h1 className="pixel-text text-4xl me-5 font-bold tracking-tight">|</h1>
            <h1 className="pixel-text text-4xl me-5 font-bold tracking-tight">Know More</h1>
          </div>
        </div>
        {renderScreen()}
      </div>
    </div >
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