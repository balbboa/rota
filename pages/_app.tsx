import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AuthContext, AuthProvider } from "../contexts/AuthContext"
import React from "react";
import Routes from "../components/Routes";
import { useRouter } from "next/router";

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
