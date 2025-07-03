import { Outlet } from "react-router-dom";
import { DashboardDirectionWrap } from "./DashboardDirection.styles";


export const DashboardDirection = () => {
  return (
    <DashboardDirectionWrap>
      <h1>Dashboard da Diretoria</h1>
      <Outlet />
    </DashboardDirectionWrap>
  );
};