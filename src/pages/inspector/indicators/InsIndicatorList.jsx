import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function InsIndecatorList({ teacherId }) {
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
        const data = req.data;
        setIndecators(data);
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
              className="px-3 py-3 shadow-item hover:shadow-3xl my-2 md:my-6 md:px-5 rounded-md hover:scale-102 duration-200 grid grid-cols-12 gap-1 "
              key={indicator.id}>
              <div className="col-span-8 ">
                <h3 className="text-aa sm:text-xs md:text-base">
                  Indecator nomi
                </h3>
                <h3 className="text-aa sm:text-sm md:text-base font-semibold">
                  {indicator.name}
                </h3>
              </div>
              <div className="col-span-1">
                <h3 className="text-ab sm:text-xs md:text-base">Xodimlar</h3>
                <h1 className="text-aa sm:text-sm md:text-xl font-semibold">
                  {indicator.max_score}
                </h1>
              </div>
              <div className="col-span-1">
                <h3 className="text-ab sm:text-xs md:text-base">Topshirdi</h3>
                <h1 className="text-aa sm:text-sm md:text-xl font-semibold">
                  3
                </h1>
              </div>
              <div className="col-span-1">
                <h3 className="text-ab sm:text-xs md:text-base">Baholandi</h3>
                <h1 className="text-aa sm:text-sm md:text-xl font-semibold">
                  3
                </h1>
              </div>

              <div className="col-span-1 text-center h-full md:px-3  md:py-3">
                <NavLink
                  className=" bg-indigo-800  rounded-md px-2 py-1 flex justify-center my-auto"
                  to="/indicators/teachers">
                  <ChevronRightIcon className="h-3 w-3 md:h-6 md:w-6 text-white" />
                </NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default InsIndecatorList;
