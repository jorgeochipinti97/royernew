import { ProductSlideshow } from "@/components/Products/ProductsSlide/ProductSlideshow";
import PaymentIcon from "@mui/icons-material/Payment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ItemCounter } from "@/components/UI/ItemCounter";
import { format, formattwo } from "@/utils/currency";
import Image from "next/image";
import { RelatedProducts } from "../UI/RelatedProducts";
import { PlayerSelect } from "../UI/PlayerSelect";
import {
  jugadoresArgentina,
  jugadoresBoca,
  jugadoresRiver,
} from "@/utils/players";
import { FormCheckout } from "@/components/UI/FormCheckout";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CartList, OrderSummary } from "@/components/cart";
import { CartContext } from "@/context/cart/CartContext";
import { useRouter } from "next/router";

export const ProductDashboard = ({
  product,
  productsSubcategoria,
  isMobile,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const [isBuyNow, setIsBuyNow] = useState(false);
  const [size, setSize] = useState("");
  const [isInStock, setIsInStock] = useState();
  const [maxValueSize, setMaxValueSize] = useState();
  const [quantity_, setQuantity_] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [jugadores, setJugadores] = useState([]);
  const { addProductToCart } = useContext(CartContext);
  const { push } = useRouter();
  const isVisibleSelectPlayers =
    isInStock &&
    (product.slug.toLowerCase().includes("rdy") ||
      product.slug
        .toLowerCase()
        .includes("boca_juniors_third_shirt_23_24_adidas_official"))
      ? "flex"
      : "none";

  const [tempCartProduct, setTempCartProduct] = useState({
    _id: product._id,
    image: product.images[0],
    precio: product.precio,
    size: size,
    personalization: selectedPlayer,
    slug: product.slug,
    titulo: product.titulo,
    quantity: 1,
  });

  useEffect(() => {
    size &&
      product.talles.map(
        (e) =>
          e.nombre.toLowerCase() == size.toLowerCase() &&
          setMaxValueSize(e.stock)
      );

    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  }, [size]);

  useEffect(() => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      personalization: selectedPlayer,
    }));
  }, [selectedPlayer]);

  useEffect(() => {
    isBuyNow &&
      gsap.to(".productdash", {
        opacity: 0,
        duration: 0.4,
      });
    isBuyNow &&
      gsap.to(".productdash", {
        display: "none",
      });
    isBuyNow &&
      gsap.to(".formcheckoutslug", {
        display: "block",
        delay: 1,
      });
    isBuyNow &&
      gsap.to(".formcheckoutslug", {
        transform: "scale(1)",
        delay: 2,
      });
  }, [isBuyNow]);

  useEffect(() => {
    setIsInStock(product.talles.some((talle) => talle.stock > 0));
  }, []);
  useEffect(() => {
    product.slug.toLowerCase().includes("boca") && setJugadores(jugadoresBoca);
    product.slug.toLowerCase().includes("argentina") &&
      setJugadores(jugadoresArgentina);
    product.slug.toLowerCase().includes("river") &&
      setJugadores(jugadoresRiver);
  }, []);

  const onUpdateQuantity = (quantity) => {
    setQuantity_(quantity);
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value);
  };
  const onAddProduct = () => {
    addProductToCart(tempCartProduct);
    push("/cart");
  };
  return (
    <>
      <Box sx={{ my: 10 }} className="productdash">
        <Grid container>
          <Grid item md={7} lg={7} xl={7} xs={12}>
            <ProductSlideshow images={product.images} isMobile={isMobile} />
          </Grid>
          <Grid item md={5} lg={5} xl={5} xs={12}>
            <Box display={"flex"} justifyContent={"center"} sx={{zIndex:1000}}>
              <Box sx={{ width: 500 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "center",
                    fontSize: "30px",
                    lineHeight: "30px",
                  }}
                >
                  {product.titulo}
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Divider sx={{ my: 1, width: "50%" }} />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"content-fit"}
                sx={{ px: 2 }}
                // backgroundColor={"#009ee3"}
                // borderRadius={'9px'}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  fontSize={"20px"}
                  sx={{ fontWeight: "500" }}
                >
                  {selectedPlayer.length < 3
                    ? formattwo(product.precio)
                    : formattwo(product.precio + 20)}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 1 }} />
            {!isInStock && (
              <>
                <Box display="flex" justifyContent={"center"}>
                  <Typography
                    sx={{
                      color: "red",
                      my: 5,
                      textAlign: "center",
                      border: "1px solid red",
                      width: "content-fit",
                      px: 2,
                      borderRadius: "9px",
                    }}
                  >
                    Currently, there is no stock available.
                  </Typography>
                </Box>
              </>
            )}

            <Box
              sx={{
                mt: isVisibleSelectPlayers ? 0 : 0,
                display: isInStock ? "flex" : "none",
              }}
              justifyContent={isMobile ? "center" : "start"}
              flexWrap={"wrap"}
            >
              <Box
                display={"flex"}
                sx={{ my: isMobile ? 2 : 0 }}
                justifyContent={isMobile ? "center" : "start"}
                width={"100vw"}
              >
                <Chip
                  label="Select a size to proceed"
                  sx={{
                    display: isInStock && size ? "none" : "auto",
                  }}
                />
              </Box>

              {product.talles.map(
                (e) =>
                  e.stock > 0 && (
                    <div key={e.nombre}>
                      <Button
                        color={"primary"}
                        variant={size == e.nombre ? "contained" : "outlined"}
                        sx={{ mx: 1, fontWeight: 300, my: 1 }}
                        onClick={() => setSize(e.nombre)}
                      >
                        {e.nombre.toUpperCase()}
                      </Button>
                    </div>
                  )
              )}
            </Box>

            <Box
              sx={{
                my: 3,
                display: isVisibleSelectPlayers,
              }}
              justifyContent={"start"}
            >
              <PlayerSelect
                onSelect={handlePlayerChange}
                jugadores={jugadores}
                isMobile={isMobile}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                my: 2,
                display: isInStock ? "auto" : "none",
              }}
              justifyContent={"start"}
            >
              {size && (
                <ItemCounter
                  currentValue={tempCartProduct.quantity}
                  updatedQuantity={onUpdateQuantity}
                  maxValue={maxValueSize}
                />
              )}
            </Box>

            <Box
              display={"flex"}
              justifyContent={"center"}
              sx={{ my: isVisibleSelectPlayers ? 4 : 0 }}
            >
              <Box
                sx={{ width: "100%" }}
                display={"flex"}
                justifyContent={isMobile ? "center" : "start"}
              >
                <Box sx={{ width: isMobile ? "80%" : "95%" }}>
                  <Typography
                    variant="body1"
                    textAlign={"justify"}
                    sx={{ fontSize: "14px", fontWeight: "300" }}
                  >
                    {product.descripcion}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display:
                  isInStock && size && product.categoria != "regionals"
                    ? "auto"
                    : "none",
              }}
            >
              <Box
                sx={{ my: 3, display: "flex" }}
                display={"flex"}
                flexDirection={isMobile ? "column" : "row"}
                justifyContent={"space-around"}
                alignItems={isMobile ? "center" : "none"}
              >
                {/* <Box sx={{ my: 1 }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      fontWeight: "800",
                      fontSize: "20px",
                      px: 2,
                      mx: 2,
                      color: "white",
                    }}
                    onClick={() => setIsBuyNow(true)}
                    startIcon={<PaymentIcon />}
                  >
                    Buy now
                  </Button>
                </Box> */}
                <Box sx={{ my: 1 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ fontWeight: "800", fontSize: "20px", px: 2, mx: 2 }}
                    onClick={onAddProduct}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              justifyContent={"center"}
              sx={{
                display:
                  isInStock && size && product.categoria != "regionals"
                    ? "flex"
                    : "none",
              }}
            >
              <Image
                src="/stripe.png"
                alt=""
                style={{ width: isMobile ? "100%" : "auto" }}
                width={404}
                height={132}
              />
            </Box>
          </Grid>
          <Grid item md={12}>
            <RelatedProducts products={productsSubcategoria} />
          </Grid>
        </Grid>
      </Box>
      <Box
        className="formcheckoutslug"
        sx={{ mt: 10, transform: "scale(0)", display: "none" }}
      >
        <CartList
          products={[
            {
              _id: product._id,
              image: product.images[0],
              precio:
                selectedPlayer.length > 3
                  ? product.precio + 20
                  : product.precio,
              size: size,
              personalization: selectedPlayer,
              slug: product.slug,
              titulo: product.titulo,
              gender: product.gender,
              quantity: quantity_,
            },
          ]}
        />
        <FormCheckout />
      </Box>
      <Box
        className="sluglis"
        // sx={{ my: 6, transform: "scale(0)", display: "none" }}
      ></Box>
    </>
  );
};
