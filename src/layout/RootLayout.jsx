import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <>
      <header className=" w-screen fixed top-0 right-0 left-0 z-100000">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout;
