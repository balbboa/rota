import "../styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AuthProvider } from "../contexts/AuthContexet"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider >
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ThemeProvider>
    </AuthProvider>
  );
}
export default MyApp;
