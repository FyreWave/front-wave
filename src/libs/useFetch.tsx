import { useEffect, useState } from "react";
import { WavesDataType } from "../types/models";

const useFetch = (url: string) => {
  const [data, setData] = useState([] as WavesDataType[]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setError] = useState(null);
  useEffect(() => {
    fetch(url)
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
        setError(err.message);
        setIsLoading(false);
        console.log(err.message);
      });
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
