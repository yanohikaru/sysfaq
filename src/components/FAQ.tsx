import { faqData } from '../data/faqData';

export const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-2 px-4">
        {faqData.map((category) => (
          <div key={category.id} className="mb-8">
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            {category.children?.map((subCategory) => (
              <div key={subCategory.id} className="ml-4 mb-4">
                <h4 className="font-bold mb-2">{subCategory.title}</h4>
                {subCategory.children?.map((item) => (
                  <div key={item.id} className="ml-4 mb-2 p-3 bg-white rounded-lg">
                    <p className="font-medium">{item.title}</p>
                    {item.answer && <p className="mt-1 text-gray-600">{item.answer}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}; 