import { Outlet } from "react-router-dom";
import { BaseLayoutWrap } from "./BaseLayout.styles";
import { Header } from "../header";
import { Section } from "../section";
import { Footer } from "../../pages/footer";
 
export const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Header />
      <div className="main-content-wrapper">
        <Outlet />
        <Section />
      </div>
      <Footer />
    </BaseLayoutWrap>
  );
};
