import { Navigate } from "react-router-dom";
import { indicatorAx } from "../../hooks/indicatorAx";
import "./login.css";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
function LoginPage() {
  const usernameIn = useRef(null);
  const location = useLocation();
  // const password = useRef(null);
  const emailIn = useRef(null);

  const loginHemis = (e) => {
    e.preventDefault();
    fetch("https://panel.ssuv.uz/api/v1/hemis-id/auth-url", {
      method: "POST",
    });
  };
  const onFormSubmit = (e) => {
    console.log(usernameIn.current.value, emailIn.current.value);
    e.preventDefault();
    indicatorAx
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
          window.location.href = "/";
        } else {
          alert("Kirish xato. Iltimos, tekshirib qaytadan urinib ko‘ring.");
        }
      })
      .catch((error) => console.error("Xatolik:", error));
  };
  return (
    <div className="w-screen h-screen login-page">
      <div className=" m-auto flex min-h-max flex-1 flex-col justify-center px-6 md:py-8 py-5 lg:px-8 max-w-80 md:max-w-lg bg-bg-login backdrop-blur-sm rounded ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto md:h-28 h-12 w-auto"
            src="./src/assets/image/logo.png"
            alt="Your Company"
          />
          <h2 className="md:mt-5 mt-4 text-center text-sm md:text-xl font-monospace font-medium leading-6 tracking-widest text-white">
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
                className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Kirish
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <button
              type="button"
              onClick={loginHemis}
              className="font-semibold leading-6 text-white hover:text-black">
              Hemis orqali kirish
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
