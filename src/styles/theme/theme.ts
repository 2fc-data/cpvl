import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      danger: string;
      info: string;
      primary: string;
      secondary: string;
      success: string;
      warning: string;

      blue: string;
      blueDark: string;
      blueLight: string;
      
      earth: string;
      earthDark: string;
      earthLight: string;

      green: string;
      greenDark: string;
      greenLight: string;
      
      oliva: string;
      olivaDark: string;
      olivaLight: string;

      white: string;
      whiteLight: string;
      black: string;
      text: string;
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

export const theme: DefaultTheme = {
  colors: {
    danger: "rgba(220, 53, 69, 1)",
    info: "rgba(3, 60, 154, 1)",    
    primary: "rgba(89, 66, 46, 1)", //buttons, headings, and links.     
    secondary: "rgba(166, 124, 73, 1)",
    success: "rgba(0, 92, 83, 1)",
    warning: "rgba(255, 193, 7, 1)",

    blue: "rgba(0, 90, 169, 0.66)",
    blueDark: "rgba(0, 71, 133, 0.52)",
    blueLight: "rgba(0, 133, 228, 0.89)",
    
    earth: "rgba(140, 97, 59, 0.6)",
    earthDark: "rgba(89, 66, 46, 0.3)",
    earthLight: "rgba(166, 124, 73, 0.3)",

    green: "rgba(0, 166, 80, 0.65)",
    greenDark: "rgba(0, 130, 63, 0.51)",
    greenLight: "rgba(72, 217, 134, 0.85)",

    oliva: "rgba(111, 117, 30, 1)",
    olivaDark: "rgba(84, 92, 20, 1)",
    olivaLight: "rgba(203, 214, 135, 0.6)",
    
    white: "rgba(255, 255, 255, 1)",
    whiteLight: "rgba(255, 255, 255, 0.6)",

    black: "rgb(18, 18, 18)",
    text: "rgb(78, 78, 78)",
  },

  typography: {
    // "Atlas Typewriter", "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;
    fontFamily: `"Atlas Typewriter", "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace, "DM Sans", sans-serif`,
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