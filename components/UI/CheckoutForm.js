import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Box, Button } from "@mui/material";

export default function CheckoutForm({orderid}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const data = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `https://royernew.vercel.app//order?id=${orderid}`,
      },
    });
    console.log(data);
    if (
      data.error.type === "card_error" ||
      data.error.type === "validation_error"
    ) {
      setMessage(data.error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Box display='flex' justifyContent={'center'} sx={{my:2}}>
        <Button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          type="submit"
          color="secondary"
        >
          {isProcessing ? "Processing ... " : "Pay now"}
        </Button>
      </Box>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
