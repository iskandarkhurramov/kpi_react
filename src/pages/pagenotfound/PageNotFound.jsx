import { NavLink } from "react-router-dom";
import "./pagenotfound.css";
function PageNotFound() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 pagenotfound">
        <div className="text-center notfound p-10">
          <p className="text-xl font-semibold text-red-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-500 sm:text-5xl">
            Sahifa topilmadi!
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            Kechirasiz, siz qidirayotgan sahifani topa olmadik.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Bosh sahifa
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
