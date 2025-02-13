import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { faqData } from './data/faqData';
import { FAQItem } from './components/FAQItem';
import { FAQNavigation } from './components/FAQNavigation';

function App() {
  const [currentItems, setCurrentItems] = useState(faqData);
  const [navigationPath, setNavigationPath] = useState<string[]>(['ホーム']);

  const handleItemClick = (item: typeof faqData[0]) => {
    if (item.children) {
      setCurrentItems(item.children);
      setNavigationPath([...navigationPath, item.title]);
    }
  };

  const handleNavigation = (index: number) => {
    let newItems = faqData;
    const newPath = ['ホーム'];

    // Traverse the path to get the correct items
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
  };

  const findItemByTitle = (items: typeof faqData, title: string) => {
    return items.find(item => item.title === title);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex items-center justify-center mb-8 space-x-2">
          <HelpCircle className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">よくある質問</h1>
        </div>

        <FAQNavigation path={navigationPath} onNavigate={handleNavigation} />

        <div className="space-y-2">
          {currentItems.map((item) => (
            <FAQItem
              key={item.id}
              title={item.title}
              hasChildren={!!item.children}
              isAnswer={!!item.answer}
              answer={item.answer}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>

        {currentItems.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            質問が見つかりませんでした
          </div>
        )}
      </div>
    </div>
  );
}

export default App;