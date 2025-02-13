import React, { useState } from 'react';
import { faqData, FAQItem } from './data/faqData';
import { FAQItem as FAQItemComponent } from './components/FAQItem';
import { FAQNavigation } from './components/FAQNavigation';
import { FAQSearch } from './components/FAQSearch';

function App() {
  const [currentItems, setCurrentItems] = useState(faqData);
  const [navigationPath, setNavigationPath] = useState<string[]>(['ホーム']);
  const [searchResults, setSearchResults] = useState<FAQItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleItemClick = (item: FAQItem) => {
    if (item.children) {
      setCurrentItems(item.children);
      setNavigationPath([...navigationPath, item.title]);
    }
  };

  const handleNavigation = (index: number) => {
    let newItems = faqData;
    const newPath = ['ホーム'];

    // パンくずリストの位置まで遡って項目を取得
    for (let i = 1; i <= index; i++) {
      const currentTitle = navigationPath[i];
      const found = findItemByTitle(newItems, currentTitle);
      if (found?.children) {
        newItems = found.children;
        newPath.push(currentTitle);
      }
    }

    setCurrentItems(newItems);
    setNavigationPath(newPath);
    setIsSearching(false);
  };

  const findItemByTitle = (items: FAQItem[], title: string) => {
    return items.find(item => item.title === title);
  };

  const searchFAQ = (query: string) => {
    if (!query.trim()) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const searchTerm = query.toLowerCase();
    const results: FAQItem[] = [];

    const searchInItems = (items: FAQItem[]) => {
      items.forEach(item => {
        // タイトル、キーワード、回答文での検索
        const matchTitle = item.title.toLowerCase().includes(searchTerm);
        const matchKeywords = item.keywords?.some(keyword => 
          keyword.toLowerCase().includes(searchTerm)
        );
        const matchAnswer = item.answer?.toLowerCase().includes(searchTerm);

        if (matchTitle || matchKeywords || matchAnswer) {
          results.push(item);
        }

        // 子要素も検索
        if (item.children) {
          searchInItems(item.children);
        }
      });
    };

    searchInItems(faqData);
    setSearchResults(results);
  };

  const displayItems = isSearching ? searchResults : currentItems;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">質問</h1>
        <div className="mb-12 max-w-4xl mx-auto">
          <FAQSearch onSearch={searchFAQ} />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        {!isSearching && <FAQNavigation path={navigationPath} onNavigate={handleNavigation} />}
        
        <div className="space-y-2 mt-4">
          {displayItems.map((item) => (
            <FAQItemComponent
              key={item.id}
              title={item.title}
              hasChildren={!!item.children}
              isAnswer={!!item.answer}
              answer={item.answer}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>

        {displayItems.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            質問が見つかりませんでした
          </div>
        )}
      </div>
    </div>
  );
}

export default App;