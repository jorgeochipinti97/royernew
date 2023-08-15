import { CartProvider } from "@/context/cart/CartProvider";
import "@/styles/globals.css";
import { lightTheme } from "@/themes/theme";

import { CssBaseline, ThemeProvider } from "@mui/material";
export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </>
  );
}
