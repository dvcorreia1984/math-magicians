import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };
    getQuote();
  }, []);

  return (
    <div id="quote">
      <h3>{quote}</h3>
      <h2>{author}</h2>
    </div>
  );
};

export default Quote;
