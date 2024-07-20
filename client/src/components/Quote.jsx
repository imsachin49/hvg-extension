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

  useEffect(() => {
    const checkOverflow = () => {
      if (quoteRef.current && quoteRef.current.scrollHeight > quoteRef.current.clientHeight) {
        fetchQuote();
      }
    };

    checkOverflow();
  }, [quote]);

  return (
    <div className="bg-[#e0f2e9] p-4 rounded-lg shadow-md w-[530px] h-[200px] overflow-hidden mt-10">
      <p ref={quoteRef} className="text-lg font-serif text-[#2e7d32]">{quote}</p>
      <p className="text-right text-sm font-medium text-[#2e7d32]">- {author}</p>
      <button 
        onClick={fetchQuote}
        className="mt-4 px-4 py-2 bg-[#a5d6a7] text-[#2e7d32] rounded hover:bg-green-200"
      >
        New Quote
      </button>
    </div>
  );
};

export default Quote;
