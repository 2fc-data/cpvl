import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

// Extendendo a interface DefaultTheme do styled-components v6
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      spaceCadet1: string;
      spaceCadet2: string;
      oxfordBlue: string;
      delftBlue: string;
      white: string;
      black: string;
      majorelleBlue: string;
      pictonBlue: string;
      paleAzure: string;
      powderBlue: string;
      success: string;
      danger: string;
      warning: string;
      frenchGray: string;
      hover: string;
      active: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    transitions: {
      easeInOut: string;
    };
  }
}

// Tema utilizando a interface DefaultTheme
export const theme: DefaultTheme = {
  colors: {
    spaceCadet1: "#111C44",
    spaceCadet2: "#1B254B",
    oxfordBlue: "#0B1437",
    delftBlue: "#293357",
    white: "#ffffff",
    black: "#000000",
    majorelleBlue: "#7551FF",
    pictonBlue: "#39B8FF",
    paleAzure: "#6AD2FF",
    powderBlue: "#A3AED0",
    success: "#01B574",
    danger: "#EE5D50",
    warning: "#FFCE20",
    frenchGray: "#C2CBDD",
    hover: "",
    active: "",
  },
  typography: {
    fontFamily: `"DM Sans", sans-serif`,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },
  transitions: {
    easeInOut: "all 0.3s ease-in-out",
  },
};

// Media queries compatíveis com styled-components v6
export const media = {
  xxxl: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.xxxl}) {
      ${css(first, ...interpolations)}
    }
  `,
  xxl: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.xxl}) {
      ${css(first, ...interpolations)}
    }
  `,
  xl: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.xl}) {
      ${css(first, ...interpolations)}
    }
  `,
  lg: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.lg}) {
      ${css(first, ...interpolations)}
    }
  `,
  md: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      ${css(first, ...interpolations)}
    }
  `,
  sm: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.sm}) {
      ${css(first, ...interpolations)}
    }
  `,
  xs: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${theme.breakpoints.xs}) {
      ${css(first, ...interpolations)}
    }
  `,
};