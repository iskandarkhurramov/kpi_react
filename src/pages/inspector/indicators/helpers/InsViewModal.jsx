import {
  XMarkIcon,
  CheckIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function InsViewModal({ closeModal }) {
  const [url, setUrl] = useState("http://localhost:3000/articles");
  const { data: works } = useFetch(url);
  const [checkStatus, setCheckStatus] = useState(true);
  const [submitBtn, setSubmitBtn] = useState(false);
  const onSubmitFile = (e) => {
    e.preventDefault();
  };
  const showSubmitBtn = () => {
    setSubmitBtn(true);
  };
  return (
    <div>
      <div className="overlay fixed w-full h-full bg-bgoverlay top-0 left-0 flex justify-center items-center">
        <div className="modal bg-gray-200 md:max-w-600 max-w-80 min-w-80 md:min-w-595 md:p-8 px-2 py-6 rounded relative">
          <div className="header text-center border-b-2 py-1 mt-2 border-sky-700"></div>
          <div className="close-btn absolute right-0 top-0 p-3">
            <button
              type="button"
              className="relative rounded-md text-black hover:text-red-500 "
              onClick={closeModal}>
              <span className="absolute -inset-2.5" />
              <span className="sr-only">Close panel</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div>
            <div className="indicator-group mb-3 ">
              <p className="text-sm">Indicator guruhi:</p>
              <p className="font-semibold">Indicator guruhi nomi</p>
            </div>
            <div className="indicator-name mb-2">
              <p className="text-sm">Indicator nomi:</p>
              <p className="font-semibold">Indicator nomi</p>
            </div>
            <div className="indicator-ball mb-2 flex">
              <div className="px-1 bg-slate-400 p-1 m-1 grid content-between">
                <span className="text-sm leading-liniin">Eng yuqori ball</span>
                <span className="font-semibold block">15</span>
              </div>
              <div className="px-1 bg-slate-400 p-1 m-1 grid content-between ">
                <span className="text-sm leading-liniin">
                  Ishtirokchilar soni
                </span>
                <span className="font-semibold block">1</span>
              </div>
              <div className="px-1 bg-slate-400 p-1 m-1 grid content-between ">
                <span className="text-sm leading-liniin">
                  Ishtirokchilar uchun eng yuqori ball
                </span>
                <span className="font-semibold block">15</span>
              </div>
              <div className="px-1 bg-slate-400 p-1 m-1 grid content-between ">
                <span className="text-sm leading-liniin">Sizning balingiz</span>
                <span className="font-semibold block">10</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Ishlar</h3>
            {works &&
              works.map((work) => {
                return (
                  <div
                    key={work.id}
                    className="  last:mb-4 px-3 py-3 shadow-item hover:shadow-3xl my-2 md:my-6 md:px-5 rounded-md hover:scale-102 duration-200 grid grid-cols-12 gap-1 ">
                    <span className=" inline-block align-middle">
                      {checkStatus ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                      ) : (
                        <MinusCircleIcon className="h-6 w-6 text-gray-500" />
                      )}
                    </span>
                    <a href="#" download className="inline-block">
                      <span className="mr-1 text-blue-500 text-base font-medium">
                        {" "}
                        - {work.title}
                      </span>
                    </a>
                  </div>
                );
              })}
          </div>

          <form className=" border-t-2 border-sky-700">
            <div className="">
              <label
                htmlFor="inputFile"
                className="block text-xs font-medium  text-orange-600 leading-liniin">
                Agar natijangizni yaxshilamoqchi bo'lsangiz qo'shimcha fayl
                yuklang!
              </label>
              <div className="mt-2">
                <input
                  onClick={showSubmitBtn}
                  type="file"
                  name="inputFile"
                  id="inputFile"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {submitBtn && (
              <div className="text-end mt-2">
                <button
                  className="py-1 px-3 text-white bg-indigo-600 rounded "
                  onClick={onSubmitFile}>
                  Yuklash
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsViewModal;
