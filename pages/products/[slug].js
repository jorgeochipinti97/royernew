import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { ProductSlideshow } from "@/components/Products/ProductsSlide/ProductSlideshow";
import { dbProducts } from "@/database";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const ProductFootballPage = ({ product }) => {
  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <>
      <ShopLayout>
        <Box sx={{ my: 10 }}>
          <Grid container>
            <Grid item md={6} lg={6} xl={6}>
              <Box sx={{ width: 500 }}>
                <ProductSlideshow
                  images={product.images}
                  height={500}
                  width={500}
                  seconds={1200}
                />
              </Box>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Box display={"flex"} justifyContent={"center"}>
                <Box sx={{ width: 500 }}>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    {product.titulo}
                  </Typography>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}

              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  border={"1px solid black"}
                  width={'content-fit'}
                  sx={{px:2,mt:2}}

                >
                  <Typography
                    variant="body1"
                    fontWeight={800}
                    fontSize={"24px"}
                  >
                    ${product.precio}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ my: 4 }}>
                <Fade cascade damping={0.1}>
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: 300,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Worldwide free shipping
                  </Typography>
                </Fade>
              </Box>
              <Divider sx={{ my: 4 }} />
              <Box display={"flex"} justifyContent={"center"}>
                <Box display={"flex"} justifyContent={"center"} sx={{ mx: 4 }}>
                  <Typography variant="body1" textAlign={"justify"}>
                    {product.descripcion}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", my: 5 }} justifyContent={"center"}>
                {product.talles.map(
                  (e) =>
                    e.stock > 0 && (
                      <>
                        <Button
                          color="primary"
                          variant="outlined"
                          sx={{ mx: 1 }}
                        >
                          {e.nombre.toUpperCase()}
                        </Button>
                      </>
                    )
                )}
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
