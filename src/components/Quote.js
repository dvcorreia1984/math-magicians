import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'dad';
    const apiKey = 'xsMDArWF6f+8AkNvslvn3Q==pjl8kk4WA80axEhR';

    const getQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          },
        );

        if (!response.ok) {
          setError('Network response was not ok');
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (data && data.length > 0) {
          const randomQuote = data[0];

          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
          setLoading(false);
          setError(null);
        }
      } catch (error) {
        setError('Error fetching quote');
        setLoading(false);
        throw new Error('Error fetching quote', error);
      }
    };

    getQuote();
  }, []);

  return (
    <div id="quote">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>
              Error:
              {' '}
              {error}
            </p>
          ) : (
            <>
              <h3>{quote}</h3>
              <h2>{author}</h2>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quote;
