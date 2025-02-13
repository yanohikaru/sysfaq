import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FAQItemProps {
  title: string;
  hasChildren: boolean;
  isAnswer: boolean;
  answer?: string;
  onClick: () => void;
}

export const FAQItem = ({ title, hasChildren, isAnswer, answer, onClick }: FAQItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-lg transition-all duration-200 cursor-pointer
        ${hasChildren 
          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500' 
          : 'bg-gray-800 border border-gray-700'}
        ${isAnswer ? 'hover:border-green-500' : 'hover:border-blue-500'}
      `}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-gray-100 font-medium">{title}</h3>
        {hasChildren && (
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>
      {isAnswer && (
        <p className="mt-3 text-gray-400 text-sm">{answer}</p>
      )}
    </div>
  );
};