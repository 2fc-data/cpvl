import { SidebarWrap } from "./Sidebar.styles";
import { FaBuilding } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";

import {
  MdBarChart,
  MdClose,
  MdAirplanemodeActive,
  MdHome,
  MdLock,
  MdMenuBook,
  MdParagliding
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../redux/slices/menubarSlice";
import type { AppDispatch, RootState } from "../../redux/store";

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isSidebarOpen = useSelector((state: RootState) => state.rootReducer.sidebar.isSidebarOpen);

  return (
    <SidebarWrap
      className={`${isSidebarOpen ? "sidebar-active" : ""}`}
    >
      <div className="sidebar-content">
        <div className="sidebar-head">
          <span className="site-icon">
            <MdParagliding />
          </span>
          <h3 className="site-name">CPVL</h3>
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => dispatch(setSidebarClose())}
          >
            <MdClose size={20} />
          </button>
        </div>
        <nav className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            <li className="sidenav-item">
              <Link to="/login" className="sidenav-link">
                <span className="link-icon">
                  <MdLock size={20} />
                </span>
                <span className="link-text">Área Associados</span>
              </Link>
            </li>

            <li className="sidenav-item">
              <Link to="/home" className="sidenav-link">
                <span className="link-icon">
                  <MdHome size={24} />
                </span>
                <span className="link-text">Base</span>
              </Link>
            </li>

            <li className="sidenav-item">
              <Link to="/direction" className="sidenav-link">
                <span className="link-icon">
                  <FaBuilding size={24} />
                </span>
                <span className="link-text">Diretoria</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link to="/airspace" className="sidenav-link">
                <span className="link-icon">
                  <MdAirplanemodeActive size={20} />
                </span>
                <span className="link-text">Espaço Aéreo</span>
              </Link>
            </li>

            <li className="sidenav-item">
              <Link to="/statute" className="sidenav-link">
                <span className="link-icon">
                  <MdBarChart size={20} />
                </span>
                <span className="link-text">Estatuto</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link to="/regiment" className="sidenav-link">
                <span className="link-icon">
                  <FaFilePen size={20} />
                </span>
                <span className="link-text">Regimento</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link to="/about" className="sidenav-link">
                <span className="link-icon">
                  <MdMenuBook size={20} />
                </span>
                <span className="link-text">Sobre</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarWrap>
  );
};

// export const Sidebar: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const isSidebarOpen = useSelector((state: RootState) => state.rootReducer.sidebar.isSidebarOpen);

//   return (
//     <SidebarWrap
//       className={`${isSidebarOpen ? "sidebar-active" : ""}`}
//     >
//       <div className="sidebar-content">
//         <div className="sidebar-head">
//           <span className="site-icon">
//             <MdParagliding />
//           </span>
//           <h3 className="site-name">CPVL</h3>
//           <button
//             type="button"
//             className="sidebar-close-btn"
//             onClick={() => dispatch(setSidebarClose())}
//           >
//             <MdClose size={20} />
//           </button>
//         </div>
//         <nav className="sidebar-nav scrollbar">
//           <ul className="sidenav-list">
//             <li className="sidenav-item">
//               <Link to="/login" className="sidenav-link">
//                 <span className="link-icon">
//                   <MdLock size={20} />
//                 </span>
//                 <span className="link-text">Área Associados</span>
//               </Link>
//             </li>
//             <li className="sidenav-item">
//               <Link to="/home" className="sidenav-link">
//                 <span className="link-icon">
//                   <MdHome size={24} />
//                 </span>
//                 <span className="link-text">Base</span>
//               </Link>
//             </li>

//             <li className="sidenav-item">
//               <Link to="/direction" className="sidenav-link">
//                 <span className="link-icon">
//                   <FaBuilding size={24} />
//                 </span>
//                 <span className="link-text">Diretoria</span>
//               </Link>
//             </li>
//             <li className="sidenav-item">
//               <Link to="/airspace" className="sidenav-link">
//                 <span className="link-icon">
//                   <MdAirplanemodeActive size={20} />
//                 </span>
//                 <span className="link-text">Espaço Aéreo</span>
//               </Link>
//             </li>

//             <li className="sidenav-item">
//               <Link to="/statute" className="sidenav-link">
//                 <span className="link-icon">
//                   <MdBarChart size={20} />
//                 </span>
//                 <span className="link-text">Estatuto</span>
//               </Link>
//             </li>
//             <li className="sidenav-item">
//               <Link to="/regiment" className="sidenav-link">
//                 <span className="link-icon">
//                   <FaFilePen size={20} />
//                 </span>
//                 <span className="link-text">Regimento</span>
//               </Link>
//             </li>
//             <li className="sidenav-item">
//               <Link to="/about" className="sidenav-link">
//                 <span className="link-icon">
//                   <MdMenuBook size={20} />
//                 </span>
//                 <span className="link-text">Sobre</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </SidebarWrap>
//   );
// };
