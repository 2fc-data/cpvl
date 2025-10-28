import { Route, Routes, useLocation } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoute';
import Dashboard from './containers/Dashboard';
import { Login } from './components/Login';
import { DashboardHome } from './containers/Dashboard/Dashboard.component';
import { Pilots } from './pages/Pilots';
import { PilotDetails } from './pages/PilotDetails';
import { StatusList } from './pages/StatusList';
import { PaymentMonthly } from './components/PaymentMonthly';
import { Direction } from './components/Direction';
import { Home } from './pages/Home';
import { About } from './components/About';
import { Airspace } from './components/Airspace/Airspace.component';
import { Regiment } from './components/Regiment';
import { Statute } from './components/Statute';
import { Signup } from './pages/signup';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const PRIVATE_PREFIXES = [
  '/', // index privado
  '/pilots',
  '/payment-monthly'
];

function isPrivatePath(pathname: string) {
  // Evita que '/about' seja confundido com '/' — tratamos '/' como index privado apenas
  if (pathname === '/') return true;
  return PRIVATE_PREFIXES.filter((p) => p !== '/').some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const privateRoute = isPrivatePath(pathname);

  return (
    <>
      {!privateRoute && <Header />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="airspace" element={<Airspace />} />
        <Route path="direction" element={<Direction />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="regiment" element={<Regiment />} />
        <Route path="signup" element={<Signup />} />
        <Route path="statute" element={<Statute />} />
        <Route path="*" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="pilots" element={<Pilots />} />
            <Route path="pilots/:userId" element={<PilotDetails />} />
            <Route path="pilots/status-list" element={<StatusList />} />
            <Route path="payment-monthly" element={<PaymentMonthly />} />
            <Route
              path="payment-monthly/:userId"
              element={<PaymentMonthly />}
            />
            <Route
              path="payment-monthly/confirmPayment/:userId"
              element={<PaymentMonthly />}
            />
            <Route path="*" element={<DashboardHome />} />
          </Route>
        </Route>
      </Routes>
      {!privateRoute && <Footer />}
    </>
  );
}

export default App;
