import { CartProvider } from "@/context/cart/CartProvider";
import { UiProvider } from "@/context/ui/UiProvider";
import "@/styles/globals.css";
import { lightTheme } from "@/themes/theme";
import { Elements } from "@stripe/react-stripe-js";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";

export default function App({ Component, pageProps }) {
  const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
  );
  return (
    <>
      <Elements stripe={stripePromise}>
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </Elements>
    </>
  );
}
