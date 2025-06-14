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
    <div className="min-h-screen" style={{ background: `url(${import.meta.env.BASE_URL}background.png)`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="container mx-auto">
        <div className="container bg-white text-blue-600 mx-auto rounded p-3 flex justify-between">
          <a href="https://getclevrr.com?utm_source=d2c_simulator&utm_medium=app&utm_campaign=game" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-32 mr-2" />
          </a>
          <div className="flex items-center">
            <h1 className="pixel-text text-4xl me-5 font-bold tracking-tight hidden sm:block">D2C Simulator</h1>
            <h1 className="pixel-text text-4xl me-5 font-bold tracking-tight hidden sm:block">|</h1>
            <h1 className="pixel-text text-4xl me-5 font-bold tracking-tight">
              <a href="https://getclevrr.com?utm_source=d2c_simulator&utm_medium=app&utm_campaign=game" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Learn More
              </a>
            </h1>
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