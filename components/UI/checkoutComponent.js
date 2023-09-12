import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { Box, Card, Typography } from "@mui/material";
import { formattwo } from "@/utils/currency";

export const CheckoutPage = ({ price, orderid,isMobile }) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    setStripePromise(
      loadStripe(
        "pk_live_51MZbufFUPmM9VmmimREk7sWuZ9DPvwhabDTHyAtRhNmLlST2Z57uaVSmYoFwGfrHPmaXC01BolPJDj6ZcAM1K0Bf00UANPinJT" ||
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
          <Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              textAlign={"center"}
              sx={{

                fontSize: "20px",
                fontFamily: "Lato",
                fontWeight: "700",
              }}
            >
              TOTAL
            </Typography>

            <Typography
              variant="body1"
              textAlign={"center"}
              sx={{

                backgroundColor: "green",
                p: 1,
                borderRadius: "9px",
                fontSize: "20px",
                fontFamily: "Lato",
                fontWeight: "700",
                color: "white",
              }}
            >
              {formattwo(price)}
            </Typography>
          </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <img src="/stripe.png" alt="" style={{ width:isMobile ? '100%': "65%" }} />
            </Box>
            </Card>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm orderid={orderid} />
          </Elements>
        </Box>
      )}
    </>
  );
};
