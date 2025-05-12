import { Outlet } from "react-router-dom";
import { BaseLayoutWrap } from "./BaseLayout.styles";

import { Sidebar } from "../sideBar";
import { Header } from "../header";
import { Section } from "../section";
import { Footer } from "../../pages/footer";
 
export const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Sidebar />
      <div className="main-content-wrapper">
        <Header />
        <Outlet />
        <Section />
        <Footer />
      </div>
    </BaseLayoutWrap>
  );
};
 