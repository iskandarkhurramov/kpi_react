import { NavLink, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function TeacherList({ teacherId }) {
  const [indicatorId, setIndicatorId] = useState(null);
  const [criteriaId, setCriteriaId] = useState(null);
  const [indicators, setIndecators] = useState("");
  const [open, setOpen] = useState(false);

  const [url, setUrl] = useState(
    "https://panel.ssuv.uz/api/v1/teacher/indicator/index"
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
        if (req.status === 401) {
          <Navigate to="/login" />;
        } else {
          const data = req.data;
          setIndecators(data);
        }
        console.log(req.data);
      });
  }, [url]);
  const showModal = () => {
    setOpen(true);
  };

  // const { indicators, error, isPanding } = useFetch(url);

  return (
    <div>
      {indicators.result &&
        indicators.result.map((indicator) => {
          return (
            <div
              className="px-3 py-2 shadow-item hover:shadow-3xl my-2 md:my-3 md:px-5 rounded-md hover:scale-102 duration-200 grid grid-cols-12 gap-1 "
              key={indicator.id}>
              <div className="col-span-10 ">
                <h3 className="text-aa sm:text-sm md:text-base font-semibold">
                  {indicator.name}
                </h3>
              </div>

              <div className="col-span-2 text-center h-full md:px-3  ">
                <NavLink
                  className=" bg-indigo-800 text-xs md:text-base  rounded-md px-2 py-1 flex justify-center my-auto"
                  to="/indicators/teachers">
                  Baholash
                </NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TeacherList;
