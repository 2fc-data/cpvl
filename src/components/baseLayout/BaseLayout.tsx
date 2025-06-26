import { Outlet } from "react-router-dom";
import { BaseLayoutWrap } from "./BaseLayout.styles";
import { Header } from "../header";
import { Footer } from "../../pages/footer";
 
export const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Header />
      <div className="main-content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </BaseLayoutWrap>
  );
};
