import { useState, useEffect } from 'react';

export const useFetch = (url:string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => console.error('Error', err));
  }, [url]);

  return { data, loading };
};