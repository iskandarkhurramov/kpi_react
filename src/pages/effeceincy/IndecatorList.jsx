import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../hooks/useFetch";
import { DocumentArrowUpIcon, EyeIcon } from "@heroicons/react/24/outline";
import ViewModal from "./helpers/ViewModal";
import UploadModal from "./helpers/UploadModal";
import axios from "axios";
import IsPanding from "../../components/IsPanding";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function IndecatorList({ teacherId }) {
  const [indicatorId, setIndicatorId] = useState(null);
  const [criteriaId, setCriteriaId] = useState(null);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [url, setUrl] = useState(
    "https://panel.ssuv.uz/api/v1/teacher/indicator/index"
  );
  const { dataAll: indicators, isPanding } = getData(url);
  const notifyError = () => {
    toast.error("Yuklashda xatolik!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const notifySuccess = () => {
    toast.success("Muvaffaqiyatli yukladingiz!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  console.log(indicators);
  const showModal = () => {
    setOpen(true);
  };

  const showModal2 = () => {
    setOpen2(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const closeModal2 = () => {
    setOpen2(false);
  };

  // const { indicators, error, isPanding } = useFetch(url);

  return (
    <div>
      {indicators &&
        indicators.data.result.map((indicator) => {
          return (
            <div
              className="px-3 py-3 shadow-item hover:shadow-3xl my-2 md:my-6 md:px-5 rounded-md hover:scale-102 duration-200 grid grid-cols-12 gap-1 "
              key={indicator.id}>
              <div className="col-span-7 md:col-span-8">
                <h3 className="text-aa sm:text-xs md:text-base">
                  Indecator nomi
                </h3>
                <h3 className="text-aa sm:text-sm md:text-base font-semibold">
                  {indicator.name}
                </h3>
              </div>
              <div className="col-span-1">
                <h3 className="text-ab sm:text-xs md:text-base">Max bal</h3>
                <h1 className="text-aa sm:text-sm md:text-xl font-semibold">
                  {indicator.max_score}
                </h1>
              </div>
              <div className="col-span-1">
                <h3 className="text-ab sm:text-xs md:text-base">Balingiz</h3>
                <h1 className="text-aa sm:text-sm md:text-xl font-semibold">
                  0
                </h1>
              </div>
              <div className=" md:col-span-1 col-span-2">
                <h3 className="text-ab sm:text-xs md:text-base">Status</h3>
                <h1 className="text-aa sm:text-sm md:text-xl font-semibold text-lime-600">
                  Baholanmagan
                </h1>
              </div>
              <div className="col-span-1 text-center md:text-end align-middle md:py-3">
                {1 > 0 ? (
                  <button
                    onClick={() => {
                      setOpen(true);
                      setIndicatorId(indicator.id);
                    }}
                    className="py-1 px-2 bg-indigo-700 rounded-md text-white">
                    <EyeIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setOpen2(true);
                      setIndicatorId(indicator.id);
                      setCriteriaId(indicator.criteria_id);
                    }}
                    className="py-1 px-2 bg-indigo-700 rounded-md text-white">
                    <DocumentArrowUpIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      {open && <ViewModal closeModal={closeModal} indicatorId={indicatorId} />}
      {open2 && (
        <UploadModal
          closeModal2={closeModal2}
          indicatorId={indicatorId}
          criteriaId={criteriaId}
          teacherId={teacherId}
          notifySuccess={notifySuccess}
          notifyError={notifyError}
        />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      
      {isPanding && <IsPanding />}
    </div>
  );
}

export default IndecatorList;
