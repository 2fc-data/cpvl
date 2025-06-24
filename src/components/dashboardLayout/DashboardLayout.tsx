import { Outlet } from "react-router-dom";
import { HeaderDashboard } from "../../pages/dashboard/headerDashboard";
import { DashboardLayoutWrap } from "./DashboardLayout.styles";
export const DashboardLayout = () => {
  return (
    <DashboardLayoutWrap>
      <HeaderDashboard />
      <Outlet />
    </DashboardLayoutWrap>
  )
}; 
