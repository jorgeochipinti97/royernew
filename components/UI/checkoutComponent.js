import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { formattwo } from "@/utils/currency";

export const CheckoutPage = ({ price, orderid }) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    setStripePromise(
      loadStripe(
        "pk_test_51MZbufFUPmM9VmmihJQydK2H2w25gsYZxEaZzFipAtF2bMvLguzrmSWUekCtRUd49WaiFPNpXk50HsGrqGVhvZ0I00sqwp5z9c" ||
          ""
      )
    );
  }, []);
  
  useEffect(() => {
    console.log(orderid);
  }, [orderid]);

  const getClient = async () => {
    try {
      const response = await axios.post("/api/intent", {
        price: price ? price * 100 : 1990,
      });

      const { clientSecret } = response.data;
      setClientSecret(clientSecret);
    } catch (error) {
      // Manejar el error aquí si es necesario
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getClient();
  }, []);
  return (
    <>


      {clientSecret && stripePromise && (
        <Box>
          <Typography variant='body1' textAlign={'center'} sx={{my:5,fontSize:'20px'}}>Total: {formattwo(price)}</Typography>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm orderid={orderid} />
          </Elements>
        </Box>
      )}

    </>
  );
};
