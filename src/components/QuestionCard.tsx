import React from 'react';
import { Question } from '../types';
import { personas } from '../data/personas';
import PixelButton from './ui/PixelButton';

interface QuestionCardProps {
  question: Question;
  onAnswer: (choiceIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const persona = personas[question.persona];

  return (
    <div className="question-card pixel-border p-6 bg-white max-w-2xl w-full animate-fadeIn">
      {/* Flex row: image left, info right */}
      <div className="flex items-center mb-6">
        <img
          src={`${import.meta.env.BASE_URL}personas/${persona.id}.png`}
          alt={persona.name}
          className="w-32 h-32 mr-6 rounded-lg object-cover"
        />

        <div className="flex-1">
          <div className="font-bold text-blue-600 text-lg">{persona.name}</div>
          <div className="text-gray-600 mb-2">{persona.title}</div>
          <h3 className="pixel-text text-xl">{question.text}</h3>
        </div>
      </div>

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

export default QuestionCard