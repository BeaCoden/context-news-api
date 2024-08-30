import { useState, useEffect } from "react";

const useFetchNews = (url) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.articles.length === 0) {
          setError("No messages found. Please check your input.");
        } else {
          setNews(data.articles);
          setError(null);
        }
      } catch (error) {
        setError("An error has occurred. Please try again later.");
        console.error(error);
      }
    };

    fetchNews();
  }, [url]);

  return { news, error };
};

export default useFetchNews;
