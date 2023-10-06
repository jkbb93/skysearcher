import { useState, useCallback } from "react";

function useAPIGetRequest() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isError = !!error;

  const getRequest = useCallback(async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("GET request failed");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      console.log(err);
      setError(err);
    }

    setIsLoading(false);
  }, []);

  const clearData = useCallback(() => setData(null), []);

  return {
    isLoading,
    isError,
    error,
    data,
    getRequest,
    clearData
  };
}

export default useAPIGetRequest;
