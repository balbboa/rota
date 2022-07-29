import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Routes from "../components/Routes";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider >
      <ThemeProvider theme={theme}>
        <Routes Component={Component} {...pageProps}></Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}
export default MyApp;
