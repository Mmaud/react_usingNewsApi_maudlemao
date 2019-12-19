import {useEffect, useState} from "react";

export const useFetchArticles = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url + "&apiKey=803fdd9b8517490d89d8c85ade466b8d")
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        if (json.articles) {
          setData(json.articles);
        } else {
          setData([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return {data, loading, error};
};

export default useFetchArticles;
