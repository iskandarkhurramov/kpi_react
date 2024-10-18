import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const indicatorAx = axios.create({
  baseURL: "http://localhost:3000",
});

export function getData(url) {
  const [dataAll, setDataAll] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const dataFetch = async () => {
      setIsPanding(true);
      try {
        await axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((req) => {
            console.log(req);
            setIsPanding(false);
            setDataAll(req);
          });
      } catch (err) {
        if (err.response.status === 401) {
          window.location.href = "/login";
        }
        console.log(err.response.status);

        setError(err.message);
        console.log(err.message);
        setIsPanding(false);
      }
    };

    dataFetch();
  }, [url]);

  return { dataAll, error, isPanding };
}
export function postData(url) {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      setIsPanding(true);
      try {
        const req = await axios.post(url);
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
export function getDataFile(url) {
  const [dataAll, setDataAll] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const dataFetch = async () => {
      setIsPanding(true);
      try {
        await axios
          .get(url, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((req) => {
            console.log(req);
            setIsPanding(false);
            setDataAll(req);
          });
      } catch (err) {
        if (err.response.status === 401) {
          window.location.href = "/login";
        }
        console.log(err.response.status);

        setError(err.message);
        console.log(err.message);
        setIsPanding(false);
      }
    };

    dataFetch();
  }, [url]);

  return { dataAll, error, isPanding };
}
