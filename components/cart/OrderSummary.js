import { FC, useContext, useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { CartContext } from "@/context/cart/CartContext";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CheckoutPage } from "../UI/checkoutComponent";

export const OrderSummary = ({ orderValues }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const router = useRouter();
  const { numberOfItems, total } = useContext(CartContext);
  const summaryValues = orderValues ? orderValues : { numberOfItems, total };
  const formattwo = (value) => {
    // Crear formateador
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return formatter.format(value); //$2,500.00
  };
  const createPayment = async () => {
    try {
      axios.post("/api/intent", { price: summaryValues.total });
      // setIsPaying(true);
      // const res = await axios.post("/api/intent", {
      //   amount: total * 100,
      //   description: `pago de ${total} en royer`,
      // });
      // const data = res.data;

      // confirmPayment(data.client_secret);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmPayment = async (paymentIntentClientSecret) => {
    try {
      if (stripe) {
        // const { token } = await stripe?.createToken(
        //   elements?.getElement(CardElement)
        // );

        const result = await stripe.confirmCardPayment(
          paymentIntentClientSecret,
          {
            payment_method: {
              card: elements?.getElement(CardElement),
              billing_details: {
                name: name,
                email: email,
              },
            },
          }
        );
        console.log(result);

        result.error && alert(result.error.message);
        // result.error && router.push(`/orders/${order._id}`);
        const updateOrder_ = await axios.put("/api/orders", {
          ...order,
          isPaid: result.paymentIntent?.status == "succeeded" && true,
          transactionId:
            result.paymentIntent?.status == "succeeded" &&
            result.paymentIntent?.id,
        });

        // updateOrder_.status == 200 && router.push(`/`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Nº Products</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>
            {summaryValues.numberOfItems}{" "}
            {summaryValues.numberOfItems > 1 ? "products" : "product"}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Total:</Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
          <Typography variant="subtitle1">
            {formattwo(summaryValues.total)}
          </Typography>
        </Grid>
      </Grid>
      <Card>

      </Card>
    </>
  );
};
