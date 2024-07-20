import { useState, useEffect, useRef } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const quoteRef = useRef(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`bg-light-teal p-4 rounded-lg shadow-md w-[350px] h-[${quote.length / 50}+20px] overflow-hidden mt-5`}>
      <p ref={quoteRef} className="text-sm text-gray-200">{quote}</p>
      <p className="text-right text-xs font-medium text-gray-100">- {author}</p>
    </div>
  );
};

export default Quote;
