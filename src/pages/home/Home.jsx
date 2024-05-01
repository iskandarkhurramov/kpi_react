import AreaBarChart from "./AreaBarChart";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
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
        console.log(req);
      });
  }, [url]);
  return (
    <div>
      {data && (
        <div className="mx-auto md:mt-32 mt-24 max-w-90f px-2 sm:px-6 lg:px-8 home-page">
          <div className="mx-auto md:mt-10  text-center px-3 py-3 shadow-3xl  md:my-5 my-1  rounded-md">
            <h1 className="lg:text-3xl md:font-medium text-xs md:text-2xl">
              {data.department_name}
            </h1>
            <h1 className="font-bold md:text-2xl lg:text-3xl text-xs mt-5 md:mb-5 mb-2">
              {data.full_name}
            </h1>
          </div>
          <div className="content-area-charts mx-auto">
            <AreaBarChart />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
