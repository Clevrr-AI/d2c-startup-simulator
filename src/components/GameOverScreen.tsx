import React from 'react';
import { useGame } from '../context/GameContext';
import PixelButton from './ui/PixelButton';
import MetricsDisplay from './MetricsDisplay';
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';

const GameOverScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const isWin = state.gameStatus === 'won';

  const winningMessages = {
    "win": [
      "Victory achieved! You've hit your ₹10 Cr ARR quicker than relatives spot you at weddings to pitch rishtas. Thankfully, Clevrr AI managed your chaos, or you'd still be drowning in Excel hell.",
      "Congratulations on building a $10M business! Your strategic decisions paid off. Jeff Bezos is willing to suck your dick.",
      "Congrats! You've scaled faster than a street-side pani puri vendor in peak summer. VCs now slide into your DMs more than spammy marriage proposals on Shaadi.com."
    ]
  };

  const loosingMessages = {
    "cash": [
      "You've run out of cash faster than a Bangalore startup burns investor money. Now you're back selling chai at your local tapri, dodging judgmental aunties.",
      "Bank account empty. Investors ghosted. You're reduced to haggling with autowalas for spare change, wondering if that MBA was worth it.",
      "Cash gone quicker than your dignity at an Indian family wedding. Now you're freeloading on free Wi-Fi at CCD, joblessly updating LinkedIn.",
      "You've got no cash and you're caught stealing chavannis from a local beggar who earns more than you, begging."
    ],
    "founderSanity": [
      "Stress finally breaks you. You quit, shave your head, and retreat to the Himalayas, babbling incoherently about CAC, ROAS, and conversion funnels.",
      "Founder burnout hits hard—you're now seen meditating outside a traffic signal, dispensing startup advice to uninterested Zomato riders.",
      "Sanity depleted. You’re caught distributing pamphlets titled 'How Excel Sheets Stole My Soul' outside Connaught Place, Delhi.",
      "Your sanity is gone, and now you're wandering the streets of Bangalore, muttering about 'synergies' and 'pivoting' to anyone who will listen."
    ],
    "employeeHappiness": [
      "Your team abandoned ship quicker than Bangaloreans flee the city on a long weekend. You’re left alone, refreshing Slack like a desperate Tinder swipe.",
      "Employees revolted and left you faster than Maggi cooks. You’re now solo manning customer support from your bathroom, crying softly.",
      "Team quits en masse—you're now posting desperate 'Urgently Hiring Interns' notices at local chai stalls, paying them in exposure."

    ],
    "revenue": [
      "Revenue dreams crushed harder than an IIT aspirant after JEE results. Now you're stuck attending cousin weddings, awkwardly explaining your 'startup experiment.'",
      "Missed revenue targets hit you harder than an Indian mom’s flying chappal. You're living off mom’s dabbas again, desperately avoiding ‘settle down’ conversations.",
      "Revenue shortfall hits brutally—you're last seen convincing Ola drivers to become your business partners, offering 50% equity for petrol money."
    ],
    "margins": [
      "Margins tighter than your jeans after Diwali. You’re now selling homemade ladoos on Instagram, hoping to recoup losses.",
      "Your margins are so low, you’re now offering free samples at local markets, trying to convince people that your brand is 'premium.'",
      "Margins are in the red, and you're now seen hawking discount coupons outside malls, trying to salvage your dignity."
    ]
  }

  const handleRestart = () => {
    dispatch({ type: 'RESET_GAME' });
    dispatch({ type: 'START_GAME' });
  };

  const saveToFirebase = async () => {
    try {
      const gameData = {
        brandName: state.brandName,
        metrics: state.metrics,
        questionHistory: state.questionHistory,
        gameStatus: state.gameStatus,
        timestamp: new Date()
      };
      console.log(gameData);
      const docRef = await addDoc(collection(db, 'gameResults'), gameData);
      console.log('Game data saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving game data:', error);
    }
  };
  useEffect(() => {
    const gameData = {
      brandName: state.brandName,
      metrics: state.metrics,
      questionHistory: state.questionHistory,
      gameStatus: state.gameStatus,
      timestamp: new Date()
    };
    console.log(gameData);
    // Save game results to Firebase when the component mounts
    saveToFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.brandName, state.metrics, state.questionHistory, state.gameStatus]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <h2 className="pixel-text text-3xl mb-6">
        {isWin ? '🏆 Congratulations!' : '💀 Game Over'}
        <PixelButton onClick={handleRestart} className="animate-pulse">
          {isWin ? "Play Again" : "Try again?"}
        </PixelButton>
      </h2>

      <div className="pixel-border p-6 max-w-2xl mb-8 bg-white">
        <h3 className="pixel-text text-2xl mb-6">
          {/* get random winning or loosing message to display here */}
          {isWin
            ? winningMessages.win[Math.floor(Math.random() * winningMessages.win.length)]
            : state.metrics.cash <= 0
              ? loosingMessages.cash[Math.floor(Math.random() * loosingMessages.cash.length)]
              : state.metrics.founderSanity <= 0
                ? loosingMessages.founderSanity[Math.floor(Math.random() * loosingMessages.founderSanity.length)]
                : state.metrics.employeeHappiness <= 0
                  ? loosingMessages.employeeHappiness[Math.floor(Math.random() * loosingMessages.employeeHappiness.length)]
                  : state.metrics.revenue <= 1000
                    ? loosingMessages.revenue[Math.floor(Math.random() * loosingMessages.revenue.length)]
                    : state.metrics.margins < 10
                      ? loosingMessages.margins[Math.floor(Math.random() * loosingMessages.margins.length)]
                      :
                      "You made it through, but not without challenges. Reflect on your decisions and learn for next time."}
        </h3>

        <div className="mb-6">
          <MetricsDisplay metrics={state.metrics} />
        </div>

        <div className="mb-6 pixel-text">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* WhatsApp Share */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                (isWin
                  ? `I built a $10M D2C brand in 12 months! Can you beat my score?`
                  : `I failed to build a successful D2C brand. Can you do better?`
                ) + ` Check it out: https://getclevrr.com/d2c-startup-simulator?utm-source=whatsapp&utm-medium=share&utm-campaign=d2c_startup_simulator`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Share on WhatsApp
            </a>

            {/* Twitter Share */}
            <a
              href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                (isWin
                  ? `I built a $10M D2C brand in 12 months! Can you beat my score?`
                  : `I failed to build a successful D2C brand. Can you do better?`
                ) + ` Check it out: https://getclevrr.com/d2c-startup-simulator/?utm-source=whatsapp&utm-medium=share&utm-campaign=d2c_startup_simulator`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-black text-white px-4 py-2 rounded hover:bg-black-700 transition-colors"
            >
              Share on X
            </a>

            {/* Landing Page */}
            <a
              href={`https://getclevrr.com/?utm-source=game&utm-medium=game-over&utm-campaign=d2c_startup_simulator`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Get Better at this
            </a>

            {/* Book a Demo Page */}
            <a
              href={`https://cal.getclevrr.com/demo`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Meet the Creators
            </a>
          </div>

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

    </div>
  );
};

export default GameOverScreen;