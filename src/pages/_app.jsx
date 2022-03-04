import P from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};

export default MyApp;
