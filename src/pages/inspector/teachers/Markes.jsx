import {
  XMarkIcon,
  CheckIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import { getData } from "../../../hooks/useFetch";

function Markes({ closeModal, data }) {
  const [checkStatus, setCheckStatus] = useState(true);
  const score = useRef(null);
  const formIn = useRef(null);
  console.log(score);
  console.log(data);
  // const url =
  //   "https://panel.ssuv.uz/api/v1/teacher/works/view?id=" + indicatorId;

  // console.log(url);
  // const { dataAll, isPanding, error } = getData(url);
  // console.log(dataAll?.data.result[0].file);
  const onSubmitFile = (e) => {
    e.preventDefault();

    closeModal();
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
            <div className="indicator-name mb-2 mt-2">
              <p className="text-sm">Indicator nomi:</p>
              <p className="font-semibold">{data.indicator}</p>
            </div>
            <div className="indicator-ball mb-2 flex">
              <div className="px-1 bg-slate-400 flex-grow p-1 m-1 grid content-between">
                <span className="text-sm leading-liniin">Eng yuqori ball</span>
                <span className="font-semibold block">{data.max_score}</span>
              </div>
              <div className="px-1 bg-slate-400 flex-grow p-1 m-1 grid content-between ">
                <span className="text-sm leading-liniin">Quyilgan baho</span>
                <span className="font-semibold block">1</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Fayllar:</h3>
            {/* {dataAll?.data.success &&
              dataAll?.data.result.map((work) => {
                return (
                  <div key={work.id} className=" last:mb-4">
                    <span className=" inline-block align-middle">
                      {checkStatus ? (
                        <CheckIcon className="h-6 w-6 text-green-500" />
                      ) : (
                        <MinusCircleIcon className="h-6 w-6 text-gray-500" />
                      )}
                    </span>
                    <a
                      href={
                        "https://panel.ssuv.uz/api/v1/professor/marks/download?id=" +
                        work.id
                      }
                      download="file.pdf"
                      className="inline-block">
                      <span className="mr-1 text-blue-500 text-base font-medium">
                        {" "}
                        - {work.file}
                      </span>
                    </a>
                  </div>
                );
              })} */}
          </div>

          <form className=" border-t-2 border-sky-700" ref={formIn}>
            <div className="mt-2">
              <label
                htmlFor="inputFile"
                className="block text-xs font-medium  text-orange-600 leading-liniin">
                Baho quying
              </label>
              <div className="mt-2">
                <input
                  ref={score}
                  type="number"
                  name="inputScore"
                  id="inputScore"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-end mt-2">
              <button
                className="py-1 px-3 text-white bg-indigo-600 rounded "
                onClick={onSubmitFile}>
                Saqalash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Markes;
