import { HeaderWrap } from './HeaderDashboard.styles';
// import { Link } from "react-router-dom";

import { NavbarDashboard } from "../../pages/dashboard/navbarDashboard";

export const HeaderDashboard = () => {
  return (
    <HeaderWrap> 
      <div className="header-container">        
        <NavbarDashboard />
      </div>
    </HeaderWrap>
  );
};
