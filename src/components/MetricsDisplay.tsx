import React from 'react';
import { useGame } from '../context/GameContext';
import { GameMetrics } from '../types';
import { TrendingUp, PieChart, Heart, Brain, Coins, Megaphone } from 'lucide-react';

interface MetricsDisplayProps {
  metrics: GameMetrics;
  compact?: boolean;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics, compact = false }) => {
  const { formatCurrency, state, pauseAudio, playAudio } = useGame();

  if (compact) {
    return (
      <div className="metrics grid grid-cols-2 md:grid-cols-6 gap-2 text-center">

        <div className="metric pixel-border p-1 bg-green-100">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-1">
              <TrendingUp size={14} className="mr-1" />
              <span className="pixel-text text-sm">{formatCurrency(metrics.revenue)}/mo</span>
            </div>
            <div className="w-full bg-green-200 h-4 pixel-border">
              <div className="bg-green-500 h-full" style={{ width: `${metrics.revenue / 10000}%` }}>
              </div>
            </div>
          </div>
        </div>

        <div className="metric pixel-border p-1 bg-blue-100">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-1">
              <PieChart size={14} className="mr-1" />
              <span className="pixel-text text-sm">{metrics.margins}% margin</span>
            </div>
            <div className="w-full bg-blue-200 h-4 pixel-border">
              <div className="bg-blue-500 h-full" style={{ width: `${metrics.margins}%` }}>
              </div>
            </div>
          </div>
        </div>

        <div className="metric pixel-border p-1 bg-red-100">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-1">
              <Heart size={14} className="mr-1" />
              <span className="pixel-text text-sm">{metrics.employeeHappiness}% happy</span>
            </div>
            <div className="w-full bg-red-200 h-4 pixel-border">
              <div className="bg-red-500 h-full" style={{ width: `${metrics.founderSanity}%` }}>
              </div>
            </div>
          </div>
        </div>

        <div className="metric pixel-border p-1 bg-purple-100">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-1">
              <Brain size={14} className="mr-1" />
              <span className="pixel-text text-sm">{metrics.founderSanity}% sanity</span>
            </div>
            <div className="w-full bg-gray-200 h-4 pixel-border">
              <div className="bg-purple-500 h-full" style={{ width: `${metrics.founderSanity}%` }}>
              </div>
            </div>
          </div>
        </div>

        <div className="metric pixel-border p-1 bg-yellow-100 col-span-2 md:col-span-1">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-1">
              <Coins size={14} className="mr-1" />
              <span className="pixel-text text-sm">{formatCurrency(metrics.cash)} cash</span>
            </div>
            <div className="w-full bg-gray-200 h-4 pixel-border">
              <div className="bg-yellow-500 h-full" style={{ width: `${metrics.cash / 10000}%` }}>
              </div>
            </div>
          </div>
        </div>

        <div
          className="metric text-white text-bold pixel-border p-1 bg-red-600 col-span-2 md:col-span-1 cursor-pointer"
          onClick={() => {
            if (state.isAudioPlaying) {
              pauseAudio();
            } else {
              playAudio();
            }
          }}
          title={state.isAudioPlaying ? 'Mute audio' : 'Unmute audio'}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-1">
              <Megaphone
          size={14}
          className={`mr-1`}
              />
              <span className="pixel-text text-sm">
          {state.isAudioPlaying ? 'Mute' : 'Unmute'}
              </span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="metrics grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="metric pixel-border p-4 bg-green-100">
        <div className="flex items-center mb-2">
          <TrendingUp className="mr-2" />
          <h4 className="pixel-text font-bold">Revenue</h4>
        </div>
        <p className="pixel-text text-2xl">{formatCurrency(metrics.revenue)}/month</p>
        <p className="pixel-text text-sm">Annual: {formatCurrency(metrics.revenue * 12)}</p>
      </div>

      <div className="metric pixel-border p-4 bg-blue-100">
        <div className="flex items-center mb-2">
          <PieChart className="mr-2" />
          <h4 className="pixel-text font-bold">Profit Margins</h4>
        </div>
        <p className="pixel-text text-2xl">{metrics.margins}%</p>
        <p className="pixel-text text-sm">Profit: {formatCurrency(metrics.revenue * (metrics.margins / 100))}/mo</p>
      </div>

      <div className="metric pixel-border p-4 bg-yellow-100">
        <div className="flex items-center mb-2">
          <Coins className="mr-2" />
          <h4 className="pixel-text font-bold">Cash</h4>
        </div>
        <p className="pixel-text text-2xl">{formatCurrency(metrics.cash)}</p>
        <p className="pixel-text text-sm">Runway: {Math.floor(metrics.cash / (metrics.revenue * (1 - metrics.margins / 100)))} months</p>
      </div>

      <div className="metric pixel-border p-4 bg-red-100 md:col-span-1.5">
        <div className="flex items-center mb-2">
          <Heart className="mr-2" />
          <h4 className="pixel-text font-bold">Employee Happiness</h4>
        </div>
        <div className="w-full bg-gray-200 h-4 pixel-border">
          <div
            className="bg-red-500 h-full"
            style={{ width: `${metrics.employeeHappiness}%` }}
          ></div>
        </div>
        <p className="pixel-text text-sm mt-1">{metrics.employeeHappiness}%</p>
      </div>

      <div className="metric pixel-border p-4 bg-purple-100 md:col-span-1.5">
        <div className="flex items-center mb-2">
          <Brain className="mr-2" />
          <h4 className="pixel-text font-bold">Founder Sanity</h4>
        </div>
        <div className="w-full bg-gray-200 h-4 pixel-border">
          <div
            className="bg-purple-500 h-full"
            style={{ width: `${metrics.founderSanity}%` }}
          ></div>
        </div>
        <p className="pixel-text text-sm mt-1">{metrics.founderSanity}%</p>
      </div>
    </div>
  );
};

export default MetricsDisplay;