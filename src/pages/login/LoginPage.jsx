import { Navigate } from "react-router-dom";

import "./login.css";
import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/image/logo.png";
function LoginPage() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  console.log(currentUrl);
  const usernameIn = useRef(null);
  const location = useLocation();
  // const password = useRef(null);
  const emailIn = useRef(null);
  // const otish = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    console.log(code);
    // fetch("https://panel.ssuv.uz/api/v1/hemis-id/hemis-auth", {
    //   method: "POST",

    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     redirect_url: "http://127.0.0.1:5173/login",
    //     code: code,
    //   }),
    // })
    const dataniol = async () => {
      try {
        const response = await axios.post(
          "https://panel.ssuv.uz/api/v1/hemis-id/hemis-auth",
          {
            redirect_url: "https://kpi-react.vercel.app",
            code: code,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    dataniol();
    // code degan qiymat ma'lumotlar bilan ishlovchi funksiya chaqirishingiz mumkin
  }, [location]);
  // };
  const loginHemis = async () => {
    try {
      const response = await fetch(
        "https://panel.ssuv.uz/api/v1/hemis-id/auth-url",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            redirect_url: currentUrl,
          }),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
    axios
      .post("https://panel.ssuv.uz/api/v1/hemis-id/auth-url", {
        redirect_url: "http://127.0.0.1:5173/login",
      })
      .then((req) => {
        console.log(req);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFormSubmit = (e) => {
    console.log(usernameIn.current.value, emailIn.current.value);
    e.preventDefault();
    axios
      .post("https://panel.ssuv.uz/api/v1/auth/login", {
        username: usernameIn.current.value,
        email: emailIn.current.value,
      })
      .then((req) => {
        const data = req.data;
        console.log(data);
        if (data.token) {
          // Agar kirish muvaffaqiyatli bo'lsa, tokenni saqlash va home sahifasiga o'tish
          window.localStorage.setItem("token", data.token);
          // window.location.href = "../index.html";
          navigate("/loading");
        } else {
          alert("Kirish xato. Iltimos, tekshirib qaytadan urinib ko‘ring.");
        }
      })
      .catch((error) => console.error("Xatolik:", error));
  };
  return (
    <div className="w-screen h-screen login-page">
      <div className=" m-auto flex min-h-max flex-1 flex-col justify-center px-6 md:py-8 py-5 lg:px-8 max-w-80 md:max-w-lg shadow-3xl backdrop-blur-sm rounded ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto md:h-32 h-24 w-auto"
            src={logoImg}
            alt="Your Company"
          />
          <h2 className="md:mt-5 mt-4 text-center text-sm md:text-xl font-monospace font-black leading-6 tracking-widest text-seniy ">
            SAMARQAND DAVLAT VETERINARIYA MEDITSINASI CHORVACHILIK VA
            BIOTEXNOLOGIYALAR UNIVERSITETI
          </h2>
        </div>

        <div className="mt-4 md:mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onFormSubmit}>
            <div>
              <div className="mt-2">
                <input
                  ref={usernameIn}
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  placeholder="Username"
                  required
                  className="block w-full rounded-full border-0 md:text-base tracking-wider
                  py-1.5 px-5 font-mono text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-600
                  focus:outline-green-600 focus:outline-offset-1  focus:bg-white 
                  focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="mt-2">
              <input
                ref={password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                className="block w-full rounded-full border-0 md:text-base tracking-wider
                  py-1.5 px-5 font-mono text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-600
                  focus:outline-green-500 focus:outline-offset-1  focus:bg-white 
                  focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
              />
            </div> */}
            <div className="mt-2">
              <input
                ref={emailIn}
                id="email"
                name="email"
                type="email"
                autoComplete="current-password"
                required
                placeholder="Email"
                className="block w-full rounded-full border-0 md:text-base tracking-wider
                  py-1.5 px-5 font-mono text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-600
                  focus:outline-green-500 focus:outline-offset-1  focus:bg-white 
                  focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-seniy px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Kirish
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              // onClick={otish}
              href="https://hemis.otmsamvmi.uz/oauth/authorize?client_id=8&response_type=code&redirect_uri=https%3A%2F%2Fkpi-react-c74g.vercel.app%2F">
              Hemis orqali kirish
            </a>
            {/* <button
              type="button"
              onClick={loginHemis}
              className="font-semibold leading-6 text-seniy hover:text-black">
              Hemis orqali kirish
            </button> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
