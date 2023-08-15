import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { ProductSlideshow } from "@/components/Products/ProductsSlide/ProductSlideshow";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductFootballPage = () => {
  const { asPath } = useRouter();
  const { products } = useProduct();
  const [product, setProduct] = useState();

  const getProduct = (products) => {
    const a = products.filter((e) => asPath.includes(e.slug));
    setProduct(a[0]);
  }; 

  useEffect(() => {
    getProduct(products) 
  }, []);
  useEffect(() => {
    product&& console.log(product.images)
  }, [product]);



  return (
    <>
    <ShopLayout>

      {product && (
          <Box sx={{my:10}}>
          <ProductSlideshow
            images={product.images}
            seconds={1200}
            height={500}
            width={500}
        />
        </Box>
      )}
      </ShopLayout>
    </>
  );
};

export default ProductFootballPage;
