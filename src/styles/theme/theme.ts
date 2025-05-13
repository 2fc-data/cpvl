import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      skyBlue: string;
      forestGreen: string;
      lightGreen: string;
      darkGray: string;
      white: string;
      black: string;
      background: string;
      text: string;
      border: string;
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
    primary: "#2B7A78", // Teal green
    secondary: "#3AAFA9", // Light teal
    skyBlue: "#17A2B8", // Sky blue
    forestGreen: "#1B4332", // Deep forest green
    lightGreen: "#40916C", // Light forest green
    darkGray: "#2F3640", // Dark gray for text
    white: "#FFFFFF",
    black: "#000000",
    background: "#F5F5F5",
    text: "#2F3640",
    border: "#DEF2F1"
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