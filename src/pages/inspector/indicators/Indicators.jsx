import InsIndecatorList from "./InsIndicatorList";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getData } from "../../../hooks/useFetch";
import IsPanding from "../../../components/IsPanding";
function Indicators() {
  const [url, setUrl] = useState(
    "https://panel.ssuv.uz/api/v1/professor/dashboard/cafedra"
  );

  const { dataAll, isPanding, error } = getData(url);

  return (
    <div>
      <div className="mx-auto md:mt-32 mt-24 max-w-90f px-2 sm:px-6 lg:px-8">
        <div className="mx-auto  bg-gray-300 grid grid-cols-2 py-5 px-6 shadow-item">
          {dataAll?.data &&
            dataAll?.data.result.map((cafedra) => {
              return (
                <NavLink
                  key={cafedra.id}
                  to={`/indicators/${cafedra.id}`}
                  className=" bg-indigo-500 p-4  my-4 shadow-item hover:shadow-caf rounded col-span-2 md:col-span-1 mx-3 text-white cursor-pointer ">
                  {cafedra.name}
                </NavLink>
              );
            })}
        </div>
      </div>
      {isPanding && <IsPanding />}
    </div>
  );
}

export default Indicators;
