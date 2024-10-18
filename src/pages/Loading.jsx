import React from "react";
import "./pagenotfound/pagenotfound.css";
import axios from "axios";
import IsPanding from "../components/IsPanding";
import { useNavigate } from "react-router-dom";
function Loading() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  axios
    .get("https://panel.ssuv.uz/api/v1/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((req) => {
      if (req.data.role[0] === "professor") {
        navigate("/indicators");
      } else {
        navigate("/home");
      }
      console.log(req.data.role);
    });
  return (
    <div>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 pagenotfound">
        <div className="text-center notfound p-10">
          <p className="text-xl font-semibold text-red-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-500 sm:text-5xl"></h1>
          <p className="mt-6 text-base leading-7 text-white">
            Kechirasiz, sizni vaqtingizni olganimiz uchun uzur
          </p>
        </div>
      </main>
      <IsPanding />
    </div>
  );
}

export default Loading;
