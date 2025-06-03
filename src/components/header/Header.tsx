import React from "react"; // Não precisa mais de useState/useEffect aqui
import { HeaderWrap } from './Header.styles'; // Importa os estilos simplificados do Header
import Logo from '../../assets/images/logo_cpvl.svg'; // Verifique se este caminho está correto
import { Link } from "react-router-dom";
// Importa o novo componente Navbar
import { Navbar } from "../navbar/Navbar"; // Ajuste o caminho conforme sua estrutura

// Componente Header simplificado
export const Header: React.FC = () => {
  // Toda a lógica de estado (Redux, local), efeitos e handlers de menu
  // foi movida para o componente Navbar.

  // A função handleCloseMenubar agora é gerenciada internamente pelo Navbar,
  // mas se o logo precisar fechar o menu, o Navbar precisa expor essa função
  // ou o clique no logo precisa ser tratado de outra forma (ex: via Redux globalmente)
  // Por simplicidade, vamos assumir que o clique no logo não precisa mais fechar o menu,
  // ou que essa lógica será adicionada ao Navbar se necessário.

  return (
    <HeaderWrap> 
      <div className="header-container">
        {/* Seção do Logo permanece no Header */}
        <div className="logo-section">
          {/* O onClick que fechava o menu foi removido daqui, pois a lógica está no Navbar */}
          <Link to="/" className="logo">
            <img src={Logo} alt="CPVL Logo" />
          </Link>
        </div>

        {/* Renderiza o componente Navbar, que agora contém toda a navegação */}
        <Navbar />

      </div>
    </HeaderWrap>
  );
};

