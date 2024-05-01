import InsIndecatorList from "./InsIndicatorList";
import axios from "axios";
import { useEffect, useState } from "react";
function Indicators() {
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
  return (
    <div>
      {data && (
        <div className="mx-auto md:mt-32 mt-24 max-w-90f px-2 sm:px-6 lg:px-8">
          <h1 className="mx-auto md:mt-10 mt-5 text-center px-3 py-3 shadow-3xl my-5 rounded-md bg-green-200 text-xs md:text-2xl lg:last:text-3xl md:mb-12">
            {data.department_name}
          </h1>

          <InsIndecatorList />
        </div>
      )}
    </div>
  );
}

export default Indicators;
