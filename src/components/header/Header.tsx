import React from "react";
import { HeaderWrap } from './Header.styles';
import Logo from '../../assets/images/logo_cpvl.svg';
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

