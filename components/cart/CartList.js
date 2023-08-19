import { FC, useContext, useEffect } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
  capitalize,
} from "@mui/material";
import { CartContext } from "@/context/cart/CartContext";
import { ItemCounter } from "../UI/ItemCounter";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Elastic, gsap, Power4, Power1, Back } from "gsap";


export const CartList = ({ editable = false, products, isMobile }) => {
  gsap.registerPlugin(ScrollTrigger);


  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);

  const onNewCartQuantityValue = (product, newQuantityValue) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };

  const productsToShow = products ? products : cart;

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

  useEffect(() => {
    console.log(products, cart);
  }, []);

  return (
    <>
      {productsToShow &&
        productsToShow.map((product) => (
          <Grid
          className="checkaoutContainer"
            container
            spacing={2}
            key={product.slug + product.size}
            sx={{ mb: 1 }}
          >
            <Grid item xs={3}>
              <NextLink href={`/product/${product.slug}`} passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={product.image}
                      component="img"
                      sx={{ borderRadius: "5px" }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">
                  {capitalize(product.titulo)}
                </Typography>

                <Typography variant="body1">
                  Size: <strong>{product.size}</strong>
                </Typography>

                {editable ? (
                  <ItemCounter
                    currentValue={product.quantity}
                    maxValue={10}
                    updatedQuantity={(value) =>
                      onNewCartQuantityValue(product, value)
                    }
                  />
                ) : (
                  <Typography variant="h5">
                    {product.quantity}{" "}
                    {product.quantity > 1 ? "products" : "product"}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              display="flex"
              alignItems="center"
              flexDirection="column"
              sx={{}}
            >
              <Typography variant="subtitle1">
                {formattwo(product.precio)}
              </Typography>

              {editable && (
                <Button
                  sx={{ transform: isMobile ? "scale(0.8)" : "auto" }}
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    removeCartProduct(product);
                  }}
                >
                  Remove
                </Button>
              )}
            </Grid>
          </Grid>
        ))}
    </>
  );
};
