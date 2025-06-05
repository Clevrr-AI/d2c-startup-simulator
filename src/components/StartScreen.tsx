import React from 'react';
import { useGame } from '../context/GameContext';
import PixelButton from './ui/PixelButton';

const StartScreen: React.FC = () => {
  const { dispatch } = useGame();

  const handleStartGame = () => {
    dispatch({ type: 'START_GAME' });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <div className="pixel-art flex items-center justify-center">
        <img src={`${import.meta.env.BASE_URL}mascot.png`} alt="Mascot" className="w-56" />
      </div>

      <div className="pixel-border p-6 max-w-2xl mb-8 bg-white">
        <h2 className="pixel-text text-2xl mb-4 text-blue-800">Welcome, Founder!</h2>

        <p className="pixel-text mb-4">
          You're about to embark on a journey to build a successful Direct-to-Consumer brand.
          <strong>Your mission: reach $10 million in annual revenue within 12 months.</strong>
        </p>

        {/* <div className="pixel-border bg-blue-100 p-4 mb-4">
          <h3 className="pixel-text text-xl mb-2 text-blue-800">Game Objectives</h3>
          <ul className="text-left list-disc pl-5 pixel-text">
            <li>Reach $10M annual revenue run rate</li>
            <li>Maintain healthy profit margins</li>
            <li>Keep your employees happy</li>
            <li>Preserve your founder sanity</li>
            <li>Don't run out of cash!</li>
          </ul>
        </div> */}

        {/* <p className="pixel-text mb-4">
          Each month, you'll face 2-3 business challenges with binary choices.
          Choose wisely - your decisions will affect all aspects of your business!
        </p> */}

        <p className="pixel-text mb-6">
          The path to D2C success is challenging, but with smart decisions,
          you might just build the next big brand!
        </p>
      </div>

      <PixelButton onClick={handleStartGame} className="animate-pulse">
        Start Your D2C Journey
      </PixelButton>

      <p className="pixel-text mt-8 text-md bg-blue-600 text-white px-4 py-2 rounded">
        Built with 💝 by{' '}
        <a href="https://getclevrr.com/?utm-source=d2c-simulator&utm-medium=referral&utm-campaign=d2c-simulator" target="_blank" className="underline">
          Clevrr AI
        </a>
        . Opensourced at{' '}
        <a href="https://github.com/clevrr-ai/d2c-startup-simulator" target="_blank" className="underline">
          GitHub
        </a>.
      </p>

    </div>
  );
};

export default StartScreen;