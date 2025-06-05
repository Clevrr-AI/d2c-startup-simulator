import React from 'react';
import { useGame } from '../context/GameContext';
import PixelButton from './ui/PixelButton';
import MetricsDisplay from './MetricsDisplay';

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
    ]
  }

  const handleRestart = () => {
    dispatch({ type: 'RESET_GAME' });
    dispatch({ type: 'START_GAME' });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <h2 className="pixel-text text-3xl mb-6">
        {isWin ? '🏆 Congratulations!' : '💀 Game Over'}
      </h2>

      <div className="pixel-border p-6 max-w-2xl mb-8 bg-white">
        <h3 className="pixel-text text-2xl mb-6">
          {/* get random winning or loosing message to display here */}
          {isWin
            ? winningMessages.win[Math.floor(Math.random() * winningMessages.win.length)]
            : state.metrics.cash < 0
              ? loosingMessages.cash[Math.floor(Math.random() * loosingMessages.cash.length)]
              : state.metrics.founderSanity <= 20
                ? loosingMessages.founderSanity[Math.floor(Math.random() * loosingMessages.founderSanity.length)]
                : state.metrics.employeeHappiness <= 10
                  ? loosingMessages.employeeHappiness[Math.floor(Math.random() * loosingMessages.employeeHappiness.length)]
                  : state.metrics.revenue <= 1000
                    ? loosingMessages.revenue[Math.floor(Math.random() * loosingMessages.revenue.length)]
                    : "You made it through, but not without challenges. Reflect on your decisions and learn for next time."}
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
              ) + ` Check it out: https://getclevrr.com/d2c-simulator?utm-source=d2c-simulator&utm-medium=referral&utm-campaign=d2c-simulator`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Share on WhatsApp
            </a>

            {/* Twitter Share */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              (isWin
                ? `I built a $10M D2C brand in 12 months! Can you beat my score?`
                : `I failed to build a successful D2C brand. Can you do better?`
              ) + ` Check it out: https://d2c-simulator.com?utm-source=d2c-simulator&utm-medium=referral&utm-campaign=d2c-simulator`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Share on Twitter
            </a>

            {/* Copy to Clipboard */}
            <button
              onClick={() => {
              const shareText = isWin
                ? `I built a $10M D2C brand in 12 months! Can you beat my score?`
                : `I failed to build a successful D2C brand. Can you do better?`;
              const shareUrl = `https://d2c-simulator.com?utm-source=d2c-simulator&utm-medium=referral&utm-campaign=d2c-simulator`;
              const shareMessage = `${shareText} Check it out: ${shareUrl}`;
              navigator.clipboard.writeText(shareMessage);
              alert('Results copied to clipboard! Share your journey with friends!');
              }}
              className="pixel-button bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Copy to Clipboard
            </button>
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

      <PixelButton onClick={handleRestart} className="animate-pulse">
        Play Again
      </PixelButton>
    </div>
  );
};

export default GameOverScreen;