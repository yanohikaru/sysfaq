import { useState } from 'react';
import { FAQItem, searchFAQ } from '../data/faqData';

export const FAQSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FAQItem[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = searchFAQ(query);
    setSearchResults(results);
  };

  return (
    <div className="faq-search w-full max-w-3xl mx-auto">
      <div className="relative shadow-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="キーワードを入力"
          className="w-full h-16 pl-14 pr-4 bg-white border-2 border-gray-300 rounded-full text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
        />
        <svg 
          className="absolute left-5 top-5 w-6 h-6 text-gray-400" 
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
      
      {searchQuery && (
        <div className="search-results mt-4 px-4">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm mb-2 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{item.title}</h3>
                {item.answer && <p className="mt-2 text-gray-600">{item.answer}</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">検索結果が見つかりませんでした</p>
          )}
        </div>
      )}
    </div>
  );
}; 