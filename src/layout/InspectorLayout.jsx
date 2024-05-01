import { Outlet } from "react-router-dom";
import InsNavbar from "../components/InsNavbar";

function InspectorLayout() {
  return (
    <div>
      <header className=" w-screen fixed top-0 right-0 left-0">
        <InsNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default InspectorLayout;
