import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((payload) => {
        if (!payload.ok) {
          throw Error("Could not Reach to Server");
        }
        return payload.json();
      })
      .then((resp) => {
        setData(resp);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Cleaned Up for fetch");
        } else {
          setIsPending(false);
          console.log(err.message);
        }
      });
    return () => {
      console.log("Clean up ");
    };
  }, [url]);

  return { data, isPending };
};

export default useFetch;
