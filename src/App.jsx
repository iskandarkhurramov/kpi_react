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
import AuthLogin from "./pages/login/AuthLogin";
import Markes from "./pages/inspector/teachers/Markes";
import Loading from "./pages/Loading";
import TeachersLayout from "./layout/TeachersLayout";
import InsIndecatorList from "./pages/inspector/indicators/InsIndicatorList";
import Indicator from "./pages/inspector/indicators/Indicator";
import InsCafideraLayout from "./layout/InsCafideraLayout";
import { InsIndicatorId } from "./components/Context";
function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [insIndicatorIdVal, setInsIndecatorIdVal] = useState(null);

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
        <Route
          element={
            <InsIndicatorId.Provider
              value={{ insIndicatorIdVal, setInsIndecatorIdVal }}>
              <RequeryAuth>
                <InspectorLayout />
              </RequeryAuth>
            </InsIndicatorId.Provider>
          }>
          <Route
            path="/inspector"
            element={
              <RequeryAuth>
                <Inspector />
              </RequeryAuth>
            }
          />
          <Route path="/indicators" element={<InsCafideraLayout />}>
            <Route
              index
              element={
                <RequeryAuth>
                  <Indicators />
                </RequeryAuth>
              }
            />
            <Route path=":id" element={<Indicator />} />
            <Route path=":id/:indicatorid" element={<Teachers />} />
            {/* <Route index element={<Indicator />} /> */}
            {/* <Route path=":teachers" element={<TeachersLayout />}> */}
          </Route>
          {/* <Route path=":markes" element={<Markes />} /> */}
          {/* </Route> */}
          {/* </Route> */}
          <Route path="/insprofile" element={<InsProfile />} />
        </Route>
        <Route element={<Prof />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/authlogin" element={<AuthLogin />} />
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
