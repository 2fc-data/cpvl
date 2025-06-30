import { Outlet, useNavigation } from "react-router-dom";
import { BaseLayoutWrap } from "./BaseLayout.styles";
import { Header } from "../header";
import { Footer } from "../../pages/footer";
 
export const BaseLayout = () => {
  const navigation = useNavigation();

  return (
    <BaseLayoutWrap>
      <Header />
      <div className="main-content-wrapper">
        {navigation.state === "loading" && <p>Carregando...</p>}
        <Outlet />
      </div>
      <Footer />
    </BaseLayoutWrap>
  );
};
