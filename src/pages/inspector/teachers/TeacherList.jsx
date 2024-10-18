import { NavLink, Navigate, useParams } from "react-router-dom";
import { useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { getData } from "../../../hooks/useFetch";
import Markes from "./Markes";

function TeacherList({ teacherId }) {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const { indicatorid } = useParams();
  const [url, setUrl] = useState(
    "https://panel.ssuv.uz/api/v1/professor/dashboard/teacher?id=" + indicatorid
  );
  console.log(data);
  const { dataAll, isPanding, error } = getData(url);
  const showModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  console.log(dataAll);
  // const { indicators, error, isPanding } = useFetch(url);

  return (
    <div>
      {dataAll?.data &&
        dataAll?.data.map((teacher) => {
          return (
            <div
              className="px-3 py-2 shadow-item hover:shadow-3xl my-2 md:my-3 md:px-5 rounded-md hover:scale-102 duration-200 content-center grid grid-cols-12 gap-1 "
              key={teacher.id}>
              <div className="col-span-11 ">
                <h3 className="align-middle sm:text-sm md:text-xl font-semibold">
                  {teacher.full_name}
                </h3>
              </div>

              <div className="col-span-1 text-center h-full md:px-3  ">
                <button
                  className="text-white bg-indigo-800 text-xs md:text-base items-center rounded-md px-2 py-1 flex justify-center my-auto"
                  type="button"
                  onClick={() => {
                    setData(teacher);
                    showModal();
                  }}>
                  Baholash
                </button>
              </div>
            </div>
          );
        })}
      {open && <Markes data={data} closeModal={closeModal} />}
    </div>
  );
}

export default TeacherList;
