import React, { useState } from 'react';
import { faqData, FAQItem } from './data/faqData';
import { FAQItem as FAQItemComponent } from './components/FAQItem';
import { FAQNavigation } from './components/FAQNavigation';
import { FAQSearch } from './components/FAQSearch';
import { getAIResponse } from './services/aiService';

function App() {
  const [currentItems, setCurrentItems] = useState(faqData);
  const [navigationPath, setNavigationPath] = useState<string[]>(['ホーム']);
  const [searchResults, setSearchResults] = useState<FAQItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FAQItem | null>(null);

  const handleItemClick = (item: FAQItem) => {
    if (item.children) {
      setCurrentItems(item.children);
      setNavigationPath([...navigationPath, item.title]);
      setAiAnswer(null); // AIの回答をリセット
      setSelectedItem(null);
    } else if (item.answer) {
      setSelectedItem(item);
    }
  };

  const handleAIHelp = async (item: FAQItem) => {
    if (!item.answer) return;
    
    setIsLoadingAI(true);
    try {
      const enhancedAnswer = await getAIResponse(item.title, item.answer);
      setAiAnswer(enhancedAnswer);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setAiAnswer("エラーが発生しました。しばらく経ってからお試しください。");
    } finally {
      setIsLoadingAI(false);
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
    setAiAnswer(null);
    setSelectedItem(null);
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
    setAiAnswer(null);
    setSelectedItem(null);
  };

  const displayItems = isSearching ? searchResults : currentItems;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 py-12 px-4 shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-100 tracking-wider">
          <span className="text-blue-400">情シス・Security</span> FAQ
        </h1>
        <div className="mb-12 max-w-4xl mx-auto">
          <FAQSearch onSearch={searchFAQ} />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {!isSearching && (
          <div className="mb-6">
            <FAQNavigation path={navigationPath} onNavigate={handleNavigation} />
          </div>
        )}
        
        <div className="space-y-3">
          {displayItems.map((item) => (
            <div key={item.id} className="relative">
              <FAQItemComponent
                title={item.title}
                hasChildren={!!item.children}
                isAnswer={!!item.answer}
                answer={item.answer}
                onClick={() => handleItemClick(item)}
              />
              {selectedItem?.id === item.id && item.answer && (
                <div className="mt-4 ml-4">
                  <button
                    onClick={() => handleAIHelp(item)}
                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"/>
                    </svg>
                    AIに詳しく聞く
                  </button>
                  
                  {isLoadingAI && (
                    <div className="mt-2 text-gray-400">
                      AI が回答を生成中...
                    </div>
                  )}
                  
                  {aiAnswer && (
                    <div className="mt-3 p-4 bg-gray-700 rounded-lg border border-blue-500/30">
                      <p className="text-gray-200 text-sm">{aiAnswer}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {displayItems.length === 0 && (
          <div className="text-center text-gray-400 mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
            質問が見つかりませんでした
          </div>
        )}
      </div>
    </div>
  );
}

export default App;