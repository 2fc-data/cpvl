import { useDispatch } from "react-redux";
import { HeaderWrap } from './Header.styles';
import { setSidebarOpen } from "../../redux/slices/sidebarSlice";
import { MdMenu } from "react-icons/md";
import Logo from '../../assets/images/logo_cpvl.svg';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderWrap>
      <div className="head-top">
        <button
          type="button"
          className="sidebar-open-btn"
          onClick={() => dispatch(setSidebarOpen())}
        >
          <MdMenu size={24} />
        </button>        
      </div>
      <div className="head-main">        
        <h3 className="head-ttl">Clube Poços-caldense de Vôo Livre</h3>
        <div className="head-ttl">
          <div className="head-logo">
            <img src={Logo} alt="Clube Poços-caldense de Vôo Livre" />
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};
