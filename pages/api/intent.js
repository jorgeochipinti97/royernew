import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "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" ||
    "",
  {
    apiVersion: "2022-11-15",
  }
);

export default async function handler(req, res) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: req.body.price,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
}
