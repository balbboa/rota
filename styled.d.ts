import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      primary: string;
      secondary: string;
      success: string;
      error: string;
      textDark: string;
      textLight: string;
      greyBg: string;
      customBg: any;
    };
  }
}
