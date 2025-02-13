import { FAQSearch } from './FAQSearch';
import { faqData } from '../data/faqData';

export const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
      <FAQSearch />
      
      {/* 既存のFAQ一覧表示 */}
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-bold">{item.question}</h3>
            <p className="mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 