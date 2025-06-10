/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, GameMetrics, Question } from '../types';
import { getQuestionsForMonth } from '../data/questions';

// Initial game state
const initialMetrics: GameMetrics = {
  revenue: 50000,       // Starting with $50k monthly revenue
  margins: 40,         // 40% margins
  employeeHappiness: 80, // Scale 0-100
  founderSanity: 90,     // Scale 0-100
  cash: 500000,         // $500k in the bank
};

const initialState: GameState = {
  brandName: '',
  currentMonth: 0, // 0 means game not started yet
  metrics: initialMetrics,
  gameStatus: 'not-started',
  questionHistory: [],
};

type GameAction = 
  | { type: 'START_GAME' }
  | { type: 'SET_BRAND_NAME', payload: string }
  | { type: 'ANSWER_QUESTION', payload: { question: Question, choiceIndex: number } }
  | { type: 'NEXT_MONTH' }
  | { type: 'RESET_GAME' };

// Game reducer to handle state changes
const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        gameStatus: 'setup',
      };
      
    case 'SET_BRAND_NAME':
      return {
        ...state,
        brandName: action.payload,
        gameStatus: 'in-progress',
        currentMonth: 1, // Start at month 1
      };
      
    case 'ANSWER_QUESTION': {
      const { question, choiceIndex } = action.payload;
      const choice = question.choices[choiceIndex];
      const effects = choice.effects;
      
      // Calculate new metrics
      const newMetrics = { ...state.metrics };
      
      // Apply effects
      if (effects.revenue !== undefined) newMetrics.revenue += effects.revenue;
      if (effects.margins !== undefined) newMetrics.margins += effects.margins;
      if (effects.employeeHappiness !== undefined) newMetrics.employeeHappiness += effects.employeeHappiness;
      if (effects.founderSanity !== undefined) newMetrics.founderSanity += effects.founderSanity;
      if (effects.cash !== undefined) newMetrics.cash += effects.cash;
      
      // Ensure metrics stay within bounds
      newMetrics.margins = Math.max(0, Math.min(100, newMetrics.margins));
      newMetrics.employeeHappiness = Math.max(0, Math.min(100, newMetrics.employeeHappiness));
      newMetrics.founderSanity = Math.max(0, Math.min(100, newMetrics.founderSanity));
      newMetrics.cash = Math.max(0, newMetrics.cash);
      newMetrics.revenue = Math.max(0, newMetrics.revenue);
      
      // Check for game over conditions
      let gameStatus = state.gameStatus;
      
      if (newMetrics.cash <= 0) {
        gameStatus = 'lost';
      } else if (newMetrics.founderSanity <= 0) {
        gameStatus = 'lost';
      } else if (newMetrics.employeeHappiness <= 0) {
        gameStatus = 'lost';
      } else if (newMetrics.revenue <= 1000) {
        gameStatus = 'lost';
      } else if (newMetrics.margins < 10) {
        gameStatus = 'lost';
      } else if (state.currentMonth === 12 && getQuestionsForMonth(12).indexOf(question) === getQuestionsForMonth(12).length - 1) {
        // Last question of month 12
        gameStatus = newMetrics.revenue >= 10000000 ? 'won' : 'lost';
      }
      
      return {
        ...state,
        metrics: newMetrics,
        gameStatus,
        questionHistory: [
          ...state.questionHistory,
          {
            question: question.text,
            choice: choice.text,
            effects: effects
          }
        ]
      };
    }
      
    case 'NEXT_MONTH':
      return {
        ...state,
        currentMonth: state.currentMonth + 1,
      };
      
    case 'RESET_GAME':
      return initialState;
      
    default:
      return state;
  }
};

// Create context
interface GameContextType {
  state: GameState & { isAudioPlaying: boolean };
  dispatch: React.Dispatch<GameAction>;
  getMonthName: (month: number) => string;
  getRemainingQuestionsForCurrentMonth: () => Question[];
  formatCurrency: (amount: number) => string;
  pauseAudio: () => void;
  playAudio: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider component
export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [audio] = React.useState(() => new Audio(`${import.meta.env.BASE_URL}music/background.mp3`));
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);

  React.useEffect(() => {
    if (state.gameStatus === 'in-progress') {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().then(() => setIsAudioPlaying(true)).catch(() => setIsAudioPlaying(false));
    } else if (state.gameStatus === 'lost' || state.gameStatus === 'won') {
      audio.pause();
      audio.currentTime = 0;
      setIsAudioPlaying(false);
    }
  }, [state.gameStatus, audio]);
  
  const pauseAudio = () => {
    audio.pause();
    setIsAudioPlaying(false);
  };

  const playAudio = () => {
    audio.play().then(() => setIsAudioPlaying(true)).catch(() => setIsAudioPlaying(false));
  };

  // Helper to get month name
  const getMonthName = (month: number): string => {
    const months = [
      'Start', 'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  };
  
  // Get remaining questions for current month
  const getRemainingQuestionsForCurrentMonth = (): Question[] => {
    if (state.currentMonth === 0) return [];
    
    const monthQuestions = getQuestionsForMonth(state.currentMonth);
    const answeredQuestionsIds = state.questionHistory
      .filter(qh => {
        const question = monthQuestions.find(q => q.text === qh.question);
        return question && question.month === state.currentMonth;
      })
      .map(qh => {
        const question = monthQuestions.find(q => q.text === qh.question);
        return question?.id || '';
      });
    
    return monthQuestions.filter(q => !answeredQuestionsIds.includes(q.id));
  };
  
  // Format currency with appropriate suffix (k, M)
  const formatCurrency = (amount: number): string => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}k`;
    }
    return `$${amount.toFixed(0)}`;
  };
  
  return (
    <GameContext.Provider value={{
      state: { ...state, isAudioPlaying },
      dispatch,
      getMonthName,
      getRemainingQuestionsForCurrentMonth,
      formatCurrency,
      pauseAudio,
      playAudio
    }}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};