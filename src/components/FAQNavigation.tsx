import { Fragment } from 'react';
import { ChevronLeft } from 'lucide-react';

interface FAQNavigationProps {
  path: string[];
  onNavigate: (index: number) => void;
}

export const FAQNavigation = ({ path, onNavigate }: FAQNavigationProps) => {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      {path.map((item, index) => (
        <Fragment key={index}>
          <span
            onClick={() => onNavigate(index)}
            className={`
              cursor-pointer hover:text-blue-400 transition-colors
              ${index === path.length - 1 ? 'text-blue-400' : ''}
            `}
          >
            {item}
          </span>
          {index < path.length - 1 && (
            <span className="text-gray-600">/</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};