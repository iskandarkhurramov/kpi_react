import TeacherList from "./TeacherList";
import axios from "axios";
import { useEffect, useState } from "react";
import { getData } from "../../../hooks/useFetch";
function Teachers() {
  return (
    <div>
      <div className="mx-auto md:mt-32 mt-24 max-w-90f px-2 sm:px-6 lg:px-8">
        <h1 className="mx-auto md:mt-10 mt-5 text-center px-3 py-3 shadow-3xl my-5 rounded-md bg-green-200 text-xs md:text-2xl lg:last:text-3xl md:mb-12"></h1>

        <TeacherList />
      </div>
    </div>
  );
}

export default Teachers;
