import { Outlet } from "react-router-dom";
import { DashboardFiscalWrap } from "./DashboardFiscal.styles";


export const DashboardFiscal = () => {
  return (
    <DashboardFiscalWrap>
      <h1>Área do Fiscal</h1>
      <Outlet />
    </DashboardFiscalWrap>
  );
};