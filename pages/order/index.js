import { ShopLayout } from "@/components/Layout";
import { CartList, OrderSummary } from "@/components/cart";
import { dbOrders } from "@/database";
import { Box, Chip, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const OrdersPage = ({ orders }) => {
  const router = useRouter();
  const [order, setOrder] = useState();
  const [shipping, setShipping] = useState();

  const { payment_intent, redirect_status } = router.query;

  useEffect(() => {
    const order_ = orders.filter((e) => e._id == router.query.id);
    setShipping(order_[0].shippingAddress);

    setOrder(order_[0]);
  }, []);

  const updateOrder = async () => {
    try {
      const data = await axios({
        method: "put",
        url: "/api/orders",
        data: {
          ...order,
          isPaid: true,
          transactionId: payment_intent,
        },
      });
      setOrder(data);
      data && router.reload()
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !order.isPaid && redirect_status == "succeeded" && updateOrder();
    console.log(order)
  }, [order]);
  return (
    <ShopLayout title="order">
      <Box sx={{ mx: 2, my: 10 }}>
        {order && order.isPaid && (
          <>
            <Box display={"flex"} justifyContent={"center"} sx={{ mt: 4 }}>
              <Chip
                label="Your order is paid"
                color="success"
                variant="outlined"
              />
            </Box>
            <Typography sx={{ fontFamily: "Lato", fontWeight: 300, mb: 4 }}>
              Dear Valued Customer,
              <br />
              Thank you for your recent purchase on RoyerStore website! Weare
              excited to have you as a customer and are grateful for your
              support.
              <br /> Within the next 48 hours, you can expect to receive an
              email from us containing important information about your order,
              including shipping and tracking details.
              <br /> If you have any questions or need assistance, feel free to
              contact our dedicated customer support team. We are here to ensure
              your shopping experience is as smooth as possible.
              <br /> Once again, thank you for choosing RoyerStore. We look
              forward to serving you again in the future! Best regards, <br />
              The RoyerStore Team
            </Typography>
            <Box
              sx={{ my: 4 }}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Divider sx={{ my: 2 }} />
              <Box display={"flex"} flexDirection={"column"}>
                <OrderSummary
                  orderValues={{
                    numberOfItems: order.numberOfItems,
                    total: order.total,
                    codigoDeDescuento: order.discountCode,
                    precioFinal: order.discountPrice,
                  }}
                />
                <Divider sx={{ my: 2 }} />
                <CartList products={order.orderItems} />
              </Box>
            </Box>
          </>
        )}
        <Box>
          {" "}
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Shipping details:</Typography>
          </Box>
          <Typography>
            {shipping && shipping.name} {shipping && shipping.lastName}
          </Typography>
          <Typography>{shipping && shipping.address} </Typography>
          <Typography>
            {shipping && shipping.city}, {shipping && shipping.zip}
          </Typography>
          <Typography>{shipping && shipping.country}</Typography>
          <Typography>{shipping && shipping.phone}</Typography>
          <Typography>{shipping && shipping.taxId}</Typography>
          <Divider sx={{ my: 1 }} />
          <OrderSummary
            orderValues={{
              numberOfItems: order && order.numberOfItems,
              total: order && order.total,
              codigoDeDescuento: order && order.discountCode,
              precioFinal: order && order.discountPrice,
            }}
          />
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default OrdersPage;

export const getServerSideProps = async ({ req, query }) => {
  const orders = await dbOrders.getAllOrders();

  if (!orders) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      orders,
    },
  };
};
