import { useState, useEffect } from "react";
import axios from "axios";

export const indicatorAx = axios.create({
  baseURL: "http://localhost:3000",
});

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      setIsPanding(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setIsPanding(false);
        setData(data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPanding(false);
      }
    };

    dataFetch();
  }, [url]);

  return { data, error, isPanding };
}

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      setIsPanding(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setIsPanding(false);
        setData(data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPanding(false);
      }
    };

    dataFetch();
  }, [url]);

  return { data, error, isPanding };
}
