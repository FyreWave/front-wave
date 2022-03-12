import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setError] = useState(null);
  useEffect(() => {
    //abort fetching data if component unmounts

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not connect to server anymore");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    //abort fetching data if component unmounts

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
