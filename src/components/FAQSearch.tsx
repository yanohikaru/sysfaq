import { useState } from 'react';
import { FAQItem } from '../data/faqData';

interface FAQSearchProps {
  onSearch: (results: FAQItem[]) => void;
}

export const FAQSearch = ({ onSearch }: FAQSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="faq-search w-full max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="セキュリティに関する質問を検索"
          className="w-full h-16 pl-14 pr-4 bg-gray-800 border-2 border-blue-500 rounded-lg text-lg 
            text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-400 
            focus:ring-4 focus:ring-blue-500/20 transition-all shadow-lg"
        />
        <svg 
          className="absolute left-5 top-5 w-6 h-6 text-blue-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
    </div>
  );
}; 