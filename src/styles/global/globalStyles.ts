import { createGlobalStyle } from "styled-components";
import { theme } from "../theme/theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }
    html{
        scroll-behavior: smooth;
        height: 100%;
    }
    body{        
        /* display: flex;
        justify-content: center; */
        background: ${theme.colors.white};
        font-family: ${theme.typography.fontFamily};        
        font-size: ${theme.typography.fontSize};
        font-weight: ${theme.typography.fontWeight};
        line-height: ${theme.typography.lineHeight};        
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        height: 100%;
    }
    ul{
        list-style: none;
    }
    img{
        display: block;
        max-width: 100%;
        width: 100%;
    }
    a{        
        color: unset;
        text-decoration: none;
        transition: ${theme.transitions.easeInOut};
    }

    button{
        border: none;
        cursor: pointer;
        background: transparent;
        transition: ${theme.transitions.easeInOut};
        outline: 0;

        &:hover{
            opacity: 0.9;
        }
    }

    .scrollbar{
        &::-webkit-scrollbar{
            width: 6px;
            height: 6px;
        }
        &::-webkit-scrollbar-track{
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 100vh!important;
            background-color: ${theme.colors.white};
            outline: 1px solid rgba(0, 0, 0, 0.02);
            outline-offset: -1px;
        }
    }

    .recharts-default-tooltip, .custom-recharts-tooltip{
        padding: 4px 8px!important;
        box-shadow: rgba(0, 0, 0, 0.26) 0 8px 60px 4px;
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.05) !important;
        background: ${theme.colors.white}!important;
    }

    .recharts-tooltip-item-list{
        *, li{
            font-size: 13px;
            font-family: inherit !important;
            opacity: 0.9;
            color: ${theme.colors.white}!important;
            text-transform: capitalize;
        }
    }

    .recharts-tooltip-label{
        color: ${theme.colors.white}!important;
        font-size: 14px;
        font-weight: 600;
    }
`;
