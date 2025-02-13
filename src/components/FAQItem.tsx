import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FAQItemProps {
  title: string;
  hasChildren: boolean;
  isAnswer: boolean;
  answer?: string;
  onClick: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  title,
  hasChildren,
  isAnswer,
  answer,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 mb-2 rounded-lg transition-all duration-200 ${
        isAnswer
          ? 'bg-blue-50 cursor-default'
          : 'bg-white hover:bg-gray-50 cursor-pointer'
      } shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <span className={`${isAnswer ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>
          {title}
        </span>
        {hasChildren && !isAnswer && (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </div>
      {isAnswer && answer && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};