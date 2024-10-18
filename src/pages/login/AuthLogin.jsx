import { Navigate, useParams } from "react-router-dom";

import "./login.css";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/image/logo.png";
function AuthLogin() {
  const { authlogin } = useParams();
  const usernameIn = useRef(null);
  console.log(authlogin);
  const currentUrl = window.location.href;
  console.log(currentUrl);
  // const password = useRef(null);
  const emailIn = useRef(null);
  const location = useLocation();

  const getUrl = () => {
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");
      console.log("https://panel.ssuv.uz/api/v1/hemis-id/auth-url" + code);
      axios
        .post("https://panel.ssuv.uz/api/v1/hemis-id/auth-url", {
          redirect_url: "http://127.0.0.1:5173/login",
          code: code,
        })
        .then((req) => {
          console.log(req);
        })
        .catch((error) => {
          console.log(error);
        });
      // code degan qiymat ma'lumotlar bilan ishlovchi funksiya chaqirishingiz mumkin
    }, [location]);
  };

  // const loginHemis = () => {
  //   console.log(authlogin);
  //   axios
  //     .get("https://panel.ssuv.uz/api/v1/hemis-id/auth-url")
  //     .then((req) => {
  //       console.log(req.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="w-screen h-screen login-page">
      <div className=" m-auto flex min-h-max flex-1 flex-col justify-center px-6 md:py-8 py-5 lg:px-8 max-w-80 md:max-w-lg bg-bg-login backdrop-blur-sm rounded ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto md:h-28 h-12 w-auto"
            src={logoImg}
            alt="Your Company"
          />
          <h2 className="md:mt-5 mt-4 text-center text-sm md:text-xl font-monospace font-medium leading-6 tracking-widest text-white">
            SAMARQAND DAVLAT VETERINARIYA MEDITSINASI CHORVACHILIK VA
            BIOTEXNOLOGIYALAR UNIVERSITETI
          </h2>
        </div>

        <div className="mt-4 md:mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              color="white"
              href="https://panel.ssuv.uz/api/v1/hemis-id/auth-url">
              O'tish
            </a>
            <br></br>
            <button
              type="button"
              onClick={getUrl}
              className="font-semibold leading-6 text-seniy hover:text-black">
              Hemis orqali kirish
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;
