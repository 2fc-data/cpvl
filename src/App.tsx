import "normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/global/globalStyles";

import { BaseLayout } from "./components/baseLayout";
import { About } from "./pages/about";
import { Airspace } from "./pages/airSpace";
import { Direction } from "./pages/direction";
import { ErrorPage } from "./pages/error";
import { Home } from "./pages/home/";
import { Login } from "./pages/login/";
import { Regiment } from "./pages/regiment";
import { Signup } from "./pages/signup";
import { Statute } from "./pages/statute";

import { DashboardFiscal } from "./pages/dashboard/dashboardFiscal/DashboardFiscal";

import { PilotsTakeOff, Loader as pilotsTakeoffLoader } from "./pages/dashboard/pilotsTakeOff";
import { PilotTakeOffDetails } from "./pages/dashboard/pilotTakeOffDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "airspace", element: <Airspace /> },
      { path: "direction", element: <Direction /> },
      { path: "login", element: <Login /> },
      { path: "regiment", element: <Regiment /> },
      { path: "signup", element: <Signup /> },
      { path: "statute", element: <Statute /> },
      {
        path: "fiscal",
        element: <DashboardFiscal />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true, 
            element: <PilotsTakeOff />,
            loader: pilotsTakeoffLoader,
          },
          { path: ":pilotTakeOffId", element: <PilotTakeOffDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;