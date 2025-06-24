import "normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/global/globalStyles";

import { BaseLayout } from "./components/baseLayout";
import { About } from "./pages/about";
import { Airspace } from './pages/airSpace';
import { Direction } from "./pages/direction";
import { ErrorPage } from "./pages/error";
import { Home } from './pages/home/';
import { Login } from './pages/login/';
import { Regiment } from "./pages/regiment";
import { Signup } from './pages/signup';
import { Statute } from "./pages/statute";

import { DashboardLayout } from "./components/dashboardLayout";

import { DashboardDirection } from "./pages/dashboard/dashboardDirection";
import { DashboardFiscal } from "./pages/dashboard/dashboardFiscal/DashboardFiscal";
import { DashboardPilot } from "./pages/dashboard/dashboardPilot";

import { Pilots } from "./pages/dashboard/pilots";
import { PilotDetail } from "./pages/dashboard/pilotDetail";
import { PilotsFinancial } from "./pages/dashboard/pilotsFinancial";
import { PilotsStatus } from "./pages/dashboard/pilotsStatus";

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
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "regiment", element: <Regiment /> },
      { path: "signup", element: <Signup /> },
      { path: "statute", element: <Statute /> },
      {
        path: '/prv',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
          { path: '', element: <Pilots /> },
          { path: "pilots", element: <Pilots /> },
          { path: "pilots/:pilotId", element: <PilotDetail /> },
          { path: "pilots-status", element: <PilotsStatus /> },
          { path: "pilots-financial", element: <PilotsFinancial /> }
        ],
      },
      {
        path: '/dashboardDirection',
        element: <DashboardDirection />,
        errorElement: <ErrorPage />,
        children: [
          { path: '', element: <DashboardDirection /> },
          { path: "dashboardDirection", element: <DashboardDirection /> },
          { path: "dashboardFiscal", element: <DashboardFiscal /> },
          { path: "dashboardPilot", element: <DashboardPilot /> },
        ],
      },
      {
        path: '/dashboardFiscal',
        element: <DashboardFiscal />,
        errorElement: <ErrorPage />,
        children: [
          { path: '', element: <DashboardFiscal /> },
          { path: "dashboardDirection", element: <DashboardDirection /> },
          { path: "dashboardFiscal", element: <DashboardFiscal /> },
          { path: "dashboardPilot", element: <DashboardPilot /> },
        ],
      },
      {
        path: '/dashboardPilot',
        element: <DashboardPilot />,
        errorElement: <ErrorPage />,
        children: [
          { path: '', element: <DashboardPilot /> },
          { path: "dashboardDirection", element: <DashboardDirection /> },
          { path: "dashboardFiscal", element: <DashboardFiscal /> },
          { path: "dashboardPilot", element: <DashboardPilot /> },
        ],
      }

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