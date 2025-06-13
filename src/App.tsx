import "normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";

import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global/globalStyles";

import { BaseLayout } from "./components/layout/";
import { About } from "./pages/about";
import { Airspace } from './pages/airSpace';
import { Direction } from "./pages/direction";
import { Home } from './pages/home/';
import { Login } from './pages/login/';
import { Regiment } from "./pages/regiment";
import { Signup } from './pages/signup';
import { Statute } from "./pages/statute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
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