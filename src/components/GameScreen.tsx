/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Question } from '../types';
import QuestionCard from './QuestionCard';
import MetricsDisplay from './MetricsDisplay';
import MonthTransition from './MonthTransition';
import GameOverScreen from './GameOverScreen';

const GameScreen: React.FC = () => {
  const { state, getMonthName, getRemainingQuestionsForCurrentMonth, dispatch } = useGame();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showMonthTransition, setShowMonthTransition] = useState(false);
  const [transitionMonth, setTransitionMonth] = useState(state.currentMonth);
  
  // Get the first unanswered question for this month
  useEffect(() => {
    const remainingQuestions = getRemainingQuestionsForCurrentMonth();
    if (remainingQuestions.length > 0) {
      setCurrentQuestion(remainingQuestions[0]);
    } else if (state.currentMonth < 12) {
      // Prepare for month transition
      setTransitionMonth(state.currentMonth + 1);
      setShowMonthTransition(true);
    }
  }, [state.currentMonth, state.questionHistory]);
  
  // Handle month transition complete
  const handleMonthTransitionComplete = () => {
    setShowMonthTransition(false);
    dispatch({ type: 'NEXT_MONTH' });
  };
  
  // Handle question answered
  const handleQuestionAnswered = (question: Question, choiceIndex: number) => {
    dispatch({ 
      type: 'ANSWER_QUESTION', 
      payload: { question, choiceIndex } 
    });
    setCurrentQuestion(null);
  };
  
  // Show game over screen if game is won or lost
  if (state.gameStatus === 'won' || state.gameStatus === 'lost') {
    return <GameOverScreen />;
  }
  
  return (
    <div className="game-screen px-4 py-4">
      {/* Month transition overlay */}
      {showMonthTransition && (
        <MonthTransition 
          month={transitionMonth} 
          onTransitionComplete={handleMonthTransitionComplete} 
        />
      )}
      
      {/* Game header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 pixel-border p-3 bg-white">
        <div className="mb-3 md:mb-0">
          <h2 className="pixel-text text-xl">
            <span className="text-blue-600">{state.brandName}</span> - {getMonthName(state.currentMonth)}
          </h2>
          <div className="pixel-text text-sm">
            Goal: $10M Annual Revenue (${(10000000 / 12).toFixed(0)}/month)
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <MetricsDisplay metrics={state.metrics} compact />
        </div>
      </div>
      
      {/* Current question */}
      <div className="flex justify-center">
        {currentQuestion ? (
          <QuestionCard 
            question={currentQuestion} 
            onAnswer={(choiceIndex) => handleQuestionAnswered(currentQuestion, choiceIndex)} 
          />
        ) : (
          <div className="pixel-border p-6 bg-white text-center">
            <p className="pixel-text mb-4">Processing your decision...</p>
            <div className="pixel-spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;