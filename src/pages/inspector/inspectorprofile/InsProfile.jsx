import { useState, useEffect } from "react";
import {
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import userImg from "../../../assets/image/user2.jpg"
function InsProfile() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    "https://panel.ssuv.uz/api/v1/teacher/user/profile"
  );
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((req) => {
        const data = req.data;
        setData(data);
        console.log(req.data);
      });
  }, [url]);
  const [img, setImg] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {data && (
        <div className="mx-auto mt-28 max-w-90f px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 mt-10">
            <div className="md:col-span-1 col-span-2 bg-gray-300 p-2 md:p-5 min-h-fit md:m-5 my-5 basis-11/12">
              <div className="text-center border-b-2 border-blue-600 py-3">
                <img
                  src={img ? img : "../../src/assets/image/user2.jpg"}
                  alt="User image"
                  className="md:w-28 md:h-28 w-12 h-12 rounded-full mx-auto"
                />
              </div>
              <div className="mt-3">
                <div className="mt-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    <span class="text-xs md:text-base font-semibold">Ism:</span>
                    <input
                      type="text"
                      value={data.full_name}
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      readOnly
                      className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-400 text-gray-900 shadow-sm md:text-base sm:leading-6"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="surname"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    <span class="text-xs md:text-base font-semibold">
                      Familiya:
                    </span>
                    <input
                      type="text"
                      value={data.full_name}
                      name="surname"
                      id="surname"
                      autoComplete="given-name"
                      readOnly
                      className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-400 text-gray-900 shadow-sm md:text-base sm:leading-6"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    <span class="text-xs md:text-base font-semibold">
                      Otangizning ismi:
                    </span>
                    <input
                      type="text"
                      value={data.full_name}
                      name="last-name"
                      id="last-name"
                      autoComplete="given-name"
                      readOnly
                      className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-400 text-gray-900 shadow-sm md:text-base sm:leading-6"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    <span class="text-xs md:text-base font-semibold">
                      Username:
                    </span>
                    <input
                      type="text"
                      value={data.username}
                      name="username"
                      id="username"
                      autoComplete="given-name"
                      readOnly
                      className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-400 text-gray-900 shadow-sm md:text-base sm:leading-6"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Parol
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <LockClosedIcon className="h-4 w-4 text-gray-500" />
                        </span>
                      </div>
                      <input
                        type={visible ? "text" : "password"}
                        name="password"
                        id="password"
                        className="block w-full rounded-md border-0 py-2  pl-10 pr-20 text-gray-900 mr-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base sm:leading-6"
                        value="Iskandar"
                        readOnly
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center ">
                        {visible ? (
                          <button
                            type="button "
                            onClick={() => setVisible(false)}>
                            <EyeSlashIcon className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                          </button>
                        ) : (
                          <button
                            type="button "
                            onClick={() => setVisible(true)}>
                            <EyeIcon className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2 bg-gray-300 p-2 md:p-5 min-h-fit md:m-5 my-5 basis-11/12">
              <div>
                <div className="p-3 border-b-2 border-blue-700 mb-3">
                  <span className="block font-medium md:text-base text-xs text-gray-500">
                    Biriktirilgan kriteria:
                  </span>
                  <span className="font-bold text-sm md:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet sunt veniam eius quis, magni molestiae incidunt est
                    inventore. Impedit, cupiditate.
                  </span>
                </div>
                <div className="p-3 border-b-2 border-blue-700 mb-3">
                  <span className="block font-medium md:text-base text-xs text-gray-500">
                    Biriktirilgan samaradorlik:
                  </span>
                  <span className="font-bold text-sm md:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet sunt veniam eius quis, magni molestiae incidunt est
                    inventore. Impedit, cupiditate.
                  </span>
                </div>
                <div className="p-3 border-b-2 border-blue-700 mb-3">
                  <span className="block font-medium md:text-base text-xs text-gray-500">
                    Biriktirilgan samaradorlik:
                  </span>
                  <span className="font-bold text-sm md:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet sunt veniam eius quis, magni molestiae incidunt est
                    inventore. Impedit, cupiditate.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InsProfile;
