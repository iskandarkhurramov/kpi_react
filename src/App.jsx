import "./App.css";
import "./index.css";
//component
import Navbar from "./components/Navbar";
//Pages
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import Effeciency from "./pages/effeceincy/Effeciency";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Profile from "./pages/profile/Profile";
//react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Prof from "./layout/Prof";
import MainLayout from "./layout/MainLayout";
import { Children, useState } from "react";
import LoginLayout from "./layout/LoginLayout";
import InspectorLayout from "./layout/InspectorLayout";
import Inspector from "./pages/inspector/inspector/Inspector";
import Indicators from "./pages/inspector/indicators/Indicators";
import InsProfile from "./pages/inspector/inspectorprofile/InsProfile";
import Teachers from "./pages/inspector/teachers/Teachers";
import IndicatorLayout from "./layout/IndicatorLayout";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const RequeryAuth = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route element={<RootLayout />}>
          <Route
            path="/home"
            element={
              <RequeryAuth>
                <Home />
              </RequeryAuth>
            }
          />
          <Route
            path="/effeciency"
            element={
              <RequeryAuth>
                <Effeciency />
              </RequeryAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequeryAuth>
                <Profile />
              </RequeryAuth>
            }
          />
        </Route>
        <Route element={<InspectorLayout />}>
          <Route path="/inspector" element={<Inspector />} />
          <Route path="indicators" element={<IndicatorLayout />}>
            <Route index element={<Indicators />} />
            <Route path=":teachers" element={<Teachers />} />
          </Route>
          <Route path="/insprofile" element={<InsProfile />} />
        </Route>
        <Route element={<Prof />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="/teacher" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
