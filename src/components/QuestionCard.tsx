import React from 'react';
import { Question } from '../types';
import PixelButton from './ui/PixelButton';

interface QuestionCardProps {
  question: Question;
  onAnswer: (choiceIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="question-card pixel-border p-6 bg-white max-w-2xl w-full animate-fadeIn">
      <h3 className="pixel-text text-xl mb-6 text-center">{question.text}</h3>
      
      <div className="space-y-4">
        {question.choices.map((choice, index) => (
          <div 
            key={index} 
            className="choice-button flex justify-center"
            onClick={() => onAnswer(index)}
          >
            <PixelButton 
              className="w-full text-left justify-start px-4 py-3 hover:bg-blue-600 transition-colors"
            >
              {choice.text}
            </PixelButton>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pixel-text text-sm text-center opacity-70">
        Choose wisely, this will affect your business!
      </div>
    </div>
  );
};

export default QuestionCard;