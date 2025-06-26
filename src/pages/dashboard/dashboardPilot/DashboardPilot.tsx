import { Outlet } from "react-router-dom";
import { DashboardPilotWrap } from "./DashboardPilot.styles";

export const DashboardPilot = () => {
  return (
    <DashboardPilotWrap>
      <h1>Dashboard Pilotos</h1>
      <Outlet />
    </DashboardPilotWrap>
  );
};  