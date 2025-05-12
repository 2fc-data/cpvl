import "normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/global/globalStyles";

import { BaseLayout } from "./components/layout/";
import { About } from "./pages/about";
import { Airspace } from './pages/airSpace';
import { Direction } from "./pages/direction";
import { Home } from './pages/home/';
import { Login } from './pages/login/';
import { Regiment } from "./pages/regiment";
import { Register } from './pages/register';
import { Statute } from "./pages/statute";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="airspace" element={<Airspace />} />
            <Route path="direction" element={<Direction />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />            
            <Route path="regiment" element={<Regiment />} />
            <Route path="register" element={<Register />} />
            <Route path="statute" element={<Statute />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
