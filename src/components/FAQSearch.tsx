import { useState } from 'react';
import { FAQItem, searchFAQ } from '../data/faqData';

export const FAQSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FAQItem[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSearchResults(searchFAQ(query));
  };

  return (
    <div className="faq-search">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="キーワードを入力して検索..."
        className="w-full p-2 border rounded-lg mb-4"
      />
      
      {searchQuery && searchResults.length > 0 && (
        <div className="search-results mb-6">
          {searchResults.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{item.question}</h3>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 