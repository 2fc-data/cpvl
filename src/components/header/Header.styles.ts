import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme"; // Verifique se este caminho está correto

export const HeaderWrap = styled.header`
  background-color: transparent; // Mantido como transparente, ajuste se necessário
  padding: 1rem 0rem;
  position: relative; // Adicionado para contexto de posicionamento do menu mobile
  z-index: 1000;

  ${media.xl`
    padding: 1rem 0rem;
  `}

  .header-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 35px; // Considere usar variáveis de tema ou espaçamento relativo
  }

  .logo-section {
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    .logo {
      width: 120px;
      height: 54px;
      display: block; // Garante que o link não tenha altura zero

      img {
        border: none;
        border-radius: 3px;
        width: 100%; // Alterado para 100% para preencher o container
        height: 100%; // Alterado para 100%
        object-fit: contain;
        display: block; // Remove espaço extra abaixo da imagem
      }
    }

    // .brand-name foi removido no código original, mantido comentado
    /* .brand-name {
      font-size: 1.5rem;
      font-weight: 700;

      ${media.md`
        display: none;
      `}
    } */
  }

  // Menu de Navegação Desktop
  .nav-menu {
    align-items: center;
    display: flex;
    gap: 1.5rem;

    ${media.lg`
      display: none; // Esconde no breakpoint lg e menores
    `}
  }

  .nav-item {
    align-items: center;
    border-radius: 3px;
    border-top: 3px solid transparent; // Efeito hover pode causar layout shift
    color: ${theme.colors.lightBlack};
    display: flex;
    font-weight: 600;
    gap: 0.5rem;
    justify-content: center;
    min-width: 120px;
    padding: 0.3rem;
    position: relative; // Necessário para o posicionamento absoluto do submenu
    text-decoration: none; // Garante que Links não tenham sublinhado padrão
    cursor: pointer; // Indica que é clicável (especialmente para itens com submenu)

    .arrowDown-icon-details {
      transition: ${theme.transitions.easeInOut};
    }

    // Estilos específicos para mobile foram removidos daqui, pois o .mobile-menu tem seus próprios estilos

    &:hover,
    &:focus-within { // Adicionado :focus-within para acessibilidade e consistência
      border-top: 3px solid ${theme.colors.black};
      color: ${theme.colors.black};

      .submenu {
        display: block; // Mostra submenu no hover/focus
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .arrowUp-icon-details { // Renomeado para clareza, a classe original tinha dois nomes
        transform: rotate(-180deg);
        transition: transform 0.3s ease-out;
      }
    }

    &:active {
      border-top: 3px solid ${theme.colors.black};
    }
  }

  .submenu {
    display: none; // Escondido por padrão
    opacity: 0; // Para transição suave
    visibility: hidden; // Para acessibilidade
    position: absolute;
    top: 100%; // Posiciona abaixo do .nav-item
    left: 0;
    background-color: ${theme.colors.lightWhite};
    border-radius: 6px;
    box-shadow: 0 2px 3px ${theme.colors.lightBlack};
    min-width: 200px;
    padding: 0.5rem 0;
    z-index: 1010; // Garante que fique sobre outros elementos
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, transform 0.2s ease-in-out;
    transform: translateY(-10px); // Posição inicial para transição

    .submenu-item {
      align-items: center;
      // border-bottom: 1px solid ${theme.colors.lightBlack}; // Removido border, pode ser adicionado se necessário
      color: ${theme.colors.lightBlack};
      display: flex; // Alterado para flex para alinhar ícone e texto
      gap: 0.5rem; // Espaço entre ícone e texto
      padding: 0.75rem 1rem; // Ajustado padding
      text-decoration: none; // Garante que Links não tenham sublinhado
      white-space: nowrap; // Evita quebra de linha

      &:last-child {
        border-bottom: none;
      }

      &:hover,
      &:focus {
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
      }

      // Estilos do ícone dentro do submenu (ajuste conforme necessário)
      .submenu-icon {
        // width: 28px; // Removido width fixo
        // height: 28px; // Removido height fixo
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  // Botão do Menu Mobile (Hamburguer)
  .mobile-menu-btn {
    background: none;
    border: none;
    color: ${theme.colors.skyBlueDark}; // Ajuste a cor conforme o design
    cursor: pointer;
    display: none; // Escondido por padrão
    font-size: 1.5rem; // Tamanho do ícone
    padding: 0.5rem; // Área de clique
    z-index: 1051; // Acima do overlay e menu

    ${media.lg`
      display: block; // Mostra no breakpoint lg e menores
    `}
  }

  // Container do Menu Mobile
  .mobile-menu {
    // display: none; // Controle será feito via transform/opacity para animação
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white}; // Fundo do menu
    padding: 6rem 1rem 1rem 1rem; // Padding (topo maior para não sobrepor header fixo, se houver)
    transform: translateX(-100%); // Começa fora da tela à esquerda
    transition: transform 0.3s ease-in-out;
    overflow-y: auto; // Permite scroll se o conteúdo for maior que a tela
    z-index: 1050; // Abaixo do botão de fechar, mas acima do conteúdo da página

    &.active {
      // display: block; // Não necessário com transform
      transform: translateX(0); // Move para dentro da tela
    }

    // Adaptação do .nav-item para o contexto mobile
    // Usaremos as mesmas classes base, mas com estilos específicos aqui se necessário
    .nav-item {
      display: block; // Itens empilhados verticalmente
      width: 100%;
      text-align: left;
      padding: 1rem 1.5rem;
      border-top: none; // Remove borda superior do desktop
      border-bottom: 1px solid ${theme.colors.skyBlue}; // Adiciona separador
      color: ${theme.colors.lightBlack}; // Cor padrão no mobile
      font-weight: 500;

      &:hover,
      &:focus {
        background-color: ${theme.colors.lightGreen}; // Efeito hover mobile
        color: ${theme.colors.white};
        border-top: none; // Garante que a borda do desktop não apareça

        .submenu {
          // Lógica de submenu mobile precisa ser diferente (ex: acordeão)
          // Por ora, o submenu desktop (hover) não funcionará bem aqui.
          // Requer implementação adicional para abrir/fechar com clique.
          display: none; // Esconde submenu desktop no mobile por padrão
        }
      }

      &:last-child {
        border-bottom: none;
      }

      // Esconde a seta de dropdown desktop no mobile
      .arrowDown-icon-details {
        display: none;
      }
    }

    // Estilos específicos para o submenu dentro do mobile-menu (se implementar clique)
    .submenu {
      position: static; // Submenu não será absoluto no mobile
      display: block; // Ou controlado por estado de clique
      opacity: 1;
      visibility: visible;
      transform: none;
      box-shadow: none;
      padding: 0.5rem 0 0.5rem 1.5rem; // Indentação
      background-color: transparent;

      .submenu-item {
        padding: 0.75rem 0;
        border: none;
        color: ${theme.colors.lightBlack}; // Ajuste cor

        &:hover,
        &:focus {
          background-color: transparent;
          color: ${theme.colors.black}; // Ajuste cor hover
        }
      }
    }
  }

  // Overlay (opcional, para escurecer o fundo quando o menu mobile está aberto)
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040; // Abaixo do menu mobile
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

