import { useState, useEffect, useRef } from "react";

const useFetchNews = (url, delay = 300) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.articles.length === 0) {
          setError("No news found. Please adjust your filters.");
          setNews([]);
        } else {
          setNews(data.articles);
          setError(null);
        }
      } catch (error) {
        setError("An error has occurred. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(fetchNews, delay);

    return () => clearTimeout(timerRef.current);
  }, [url, delay]);

  return { news, error, loading };
};

export default useFetchNews;
