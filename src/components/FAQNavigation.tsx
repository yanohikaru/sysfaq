import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface FAQNavigationProps {
  path: string[];
  onNavigate: (index: number) => void;
}

export const FAQNavigation: React.FC<FAQNavigationProps> = ({ path, onNavigate }) => {
  if (path.length <= 1) return null;

  return (
    <div className="flex items-center space-x-2 mb-6 text-sm">
      <button
        onClick={() => onNavigate(path.length - 2)}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        戻る
      </button>
      <div className="text-gray-400">
        {path.join(' > ')}
      </div>
    </div>
  );
};