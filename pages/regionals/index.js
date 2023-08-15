import React from "react";
import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { ProductCard } from "@/components/Products/ProductCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const RegionalsPage = () => {
  const [products, setProducts] = useState();
  const { regionalproducts } = useProduct();
  useEffect(() => {
    regionalproducts && setProducts(regionalproducts);
    console.log(regionalproducts.length);
  }, [regionalproducts]);

  return (
    <>
      <ShopLayout title={"Royer - Football"}>
        <Grid container sx={{ my: 10 }}>
          {products &&
            products.map((e) => (
              <Grid xs={4} md={4} lg={4} item key={e.titulo}>
                <ProductCard e={e} />
              </Grid>
            ))}
        </Grid>

        {regionalproducts.length == 0  && (
          <>
            <Box sx={{my:10,color:'black'}}>
              <Typography variant="body1" textAlign={'center'}>
                Looks like you ve seen it all! No more products to view for now.
                Feel free to check back later for new additions!
              </Typography>
            </Box>
          </>
        )}
      </ShopLayout>
    </>
  );
};

export default RegionalsPage;
