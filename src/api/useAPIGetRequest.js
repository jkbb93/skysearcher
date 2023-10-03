import { useState, useCallback } from "react";

function useAPIGetRequest() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setError(err);
    }

    setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
    getRequest
  };
}

export default useAPIGetRequest;
