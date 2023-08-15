import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { ProductSlideshow } from "@/components/Products/ProductsSlide/ProductSlideshow";
import { dbProducts } from "@/database";
import PaymentIcon from '@mui/icons-material/Payment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { ItemCounter } from "@/components/UI/ItemCounter";
import { format } from "@/utils/currency";

const ProductFootballPage = ({ product }) => {
  const [size, setSize] = useState("");
  const [maxValueSize, setMaxValueSize] = useState();
  const [tempCartProduct, setTempCartProduct] = useState({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    personalization: "",
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  useEffect(() => {
    size &&
      product.talles.map(
        (e) =>
          e.nombre.toLowerCase() == size.toLowerCase() &&
          setMaxValueSize(e.stock)
      );
  }, [size]);

  const onUpdateQuantity = (quantity) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  return (
    <>
      <ShopLayout>
        <Box sx={{ my: 10 }}>
          <Grid container>
            <Grid item md={7} lg={7} xl={7}>
              <Box sx={{ width: 750 }}>
                <ProductSlideshow
                  images={product.images}
                  height={750}
                  width={750}
                  seconds={1200}
                />
              </Box>
            </Grid>
            <Grid item md={5} lg={5} xl={5}>
              <Box display={"flex"} justifyContent={"center"}>
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
                  sx={{ px: 2, mt: 2 }}
                >
                  <Typography
                    variant="body1"
                    fontWeight={800}
                    fontSize={"20px"}
                  >
                    {format(product.precio)}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 4 }} />
              <Box sx={{ display: "flex", mt: 5 }} justifyContent={"start"}>
                {product.talles.map(
                  (e) =>
                    e.stock > 0 && (
                      <>
                        <Button
                          color={"primary"}
                          variant={size == e.nombre ? "contained" : "outlined"}
                          sx={{ mx: 1 }}
                          onClick={() => setSize(e.nombre)}
                        >
                          {e.nombre.toUpperCase()}
                        </Button>
                      </>
                    )
                )}
              </Box>
              <Box sx={{ display: "flex", my: 2 }} justifyContent={"start"}>
                {size && (
                  <ItemCounter
                    currentValue={tempCartProduct.quantity}
                    updatedQuantity={onUpdateQuantity}
                    maxValue={maxValueSize}
                  />
                )}
              </Box>

              <Box display={"flex"} justifyContent={"center"}>
                <Box display={"flex"} justifyContent={"center"} sx={{ mx: 4 }}>
                  <Typography variant="body1" textAlign={"justify"}>
                    {product.descripcion}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ my: 5 }}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontWeight: "800", fontSize: "20px", px: 2 }}
                  startIcon={<PaymentIcon/>}
                  >
                  Buy now
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AddShoppingCartIcon/>}
                  sx={{ fontWeight: "800", fontSize: "20px", px: 2 }}
                >
                  Add to cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ShopLayout>
    </>
  );
};

export const getStaticPaths = async (ctx) => {
  const productSlugs = await dbProducts.getAllProductSlugs();

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug = "" } = params;
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 600,
  };
};

export default ProductFootballPage;
