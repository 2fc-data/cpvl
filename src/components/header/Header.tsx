import React from "react";
import { HeaderWrap } from './Header.styles';
import Logo from '../../assets/images/cpvlLogoVet1.png';
import { Link } from "react-router-dom";

import { Navbar } from "../navbar/Navbar";

export const Header: React.FC = () => {
  return (
    <HeaderWrap> 
      <div className="header-container">        
        <div className="logo-section">
          <Link to="/" className="logo">
            <img src={Logo} alt="CPVL Logo" />
          </Link>
        </div>

        <Navbar />
      </div>
    </HeaderWrap>
  );
};

