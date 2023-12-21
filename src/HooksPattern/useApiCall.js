import { useEffect, useState } from "react";

const useApiCall = (baseUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(baseUrl)
      .then((response) => response.json())
      .then((responseData) => {
        setTimeout(() => {
          setData(responseData);
          setIsLoading(false);
        }, 2000);
      });
  }, [baseUrl]);

  return { isLoading, data };
};

export default useApiCall;
