import { useState, useCallback } from "react";
import simulatedAPI from "./simulatedAPI";

function useLocationQuery() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  const fetch = useCallback(async (query) => {
    try {
      setStatus("loading");

      const simulatedRequest = async () =>
        new Promise((resolve) =>
          setTimeout(() => {
            const simulatedResponse = simulatedAPI(query);
            setStatus("success");
            setData(simulatedResponse);
            resolve();
          }, 500)
        );

      await simulatedRequest();
      clearTimeout(simulatedRequest);
    } catch (error) {
      setStatus("error");
      console.error(error);
      return null;
    }
  }, []);

  const clearData = useCallback(() => {
    setData(null);
    setStatus("idle");
  }, []);

  return {
    data,
    status,
    fetch,
    clearData
  };
}

export default useLocationQuery;
