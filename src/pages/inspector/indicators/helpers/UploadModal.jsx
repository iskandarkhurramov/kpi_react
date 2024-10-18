import { useRef, useState } from "react";
import axios from "axios";
function UploadModal({ closeModal2, indicatorId, criteriaId, teacherId }) {
  const inFile = useRef(null);
  const inCount = useRef(null);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    "https://panel.ssuv.uz/api/v1/teacher/works/create"
  );
  console.log(indicatorId, criteriaId, teacherId);
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inFile.current.value);
    const token = window.localStorage.getItem("token");
    console.log(token);
    console.log(indicatorId, criteriaId, teacherId);
    const formData = new FormData();
    formData.append("indicator_id", indicatorId);
    formData.append("criteria_id", criteriaId);
    formData.append("teacher_id", teacherId);
    formData.append("count", inCount.current.value);
    formData.append("file", inFile.current.files[0]);
    const postData = async () => {
      try {
        const response = await axios.post(url, formData, {
          headers: {
            // Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };
  return (
    <div>
      <div className="overlay fixed w-full h-full bg-bgoverlay top-0 left-0 flex justify-center items-center">
        <div className="modal bg-gray-200 md:max-w-600 max-w-80 min-w-80 md:min-w-595 md:p-8 px-2 py-6 rounded relative">
          <div className="header text-center border-b-2 mb-1 pb-1 border-sky-700 font-semibold">
            Indecator nomi Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet..
          </div>
          <form className="mt-3" onSubmit={onFormSubmit}>
            <div className="">
              <div className="">
                <label
                  htmlFor="number-participants"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  <span className="text-xs md:text-base font-semibold">
                    Ishtirokchilar soni:
                  </span>
                  <input
                    ref={inCount}
                    type="number"
                    name="number-participants"
                    id="number-participants"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </label>
              </div>
              <div className="my-4">
                <label className="block">
                  <span className="text-xs md:text-base font-semibold">
                    Fayllaringizni yuklang:
                  </span>
                  <input
                    ref={inFile}
                    type="file"
                    className="block w-full text-sm text-white rounded cursor-pointer
                    file:mr-4 file:py-2 file:px-4
                     file:border-1
                    file:text-sm file:font-semibold
                    file: bg-zinc-500 file:text-violet-700
                    hover:file:bg-indigo-700 focus:outline-none hover:file:text-white
                  "
                  />
                </label>
              </div>
            </div>
            <div className="text-end mt-8">
              <button
                type="button"
                className="py-1 px-3 text-white bg-orange-500 rounded mx-2 text-sm md:text-base"
                onClick={closeModal2}>
                Yopish
              </button>
              <button
                type="button"
                className="py-1 px-3 text-white bg-gray-600 rounded mx-2 text-sm md:text-base"
                onClick={closeModal2}>
                Tozalash
              </button>
              <button
                type="submit"
                className="py-1 px-3 text-white bg-indigo-600 rounded mx-2 text-sm md:text-base">
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
