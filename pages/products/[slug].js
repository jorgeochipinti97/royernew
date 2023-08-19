import { ShopLayout } from "@/components/Layout";

import { dbProducts } from "@/database";
import { ProductDashboard } from "@/components/Products/ProductDashboard";

import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { FormCheckout } from "@/components/UI/FormCheckout";

const ProductPage = ({ product, products }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [productsSubcategoria, setProductsSubcategoria] = useState([]);
  useEffect(() => {
    product.subcategoria == "boca" &&
      setProductsSubcategoria(products.filter((e) => e.subcategoria == "boca"));
    product.subcategoria == "river" &&
      setProductsSubcategoria(
        products.filter((e) => e.subcategoria == "river")
      );
    product.subcategoria == "argentina" &&
      setProductsSubcategoria(
        products.filter((e) => e.subcategoria == "argentina")
      );
  }, []);

  

  return (
    <>
      <ShopLayout>
        <ProductDashboard
          product={product}
          productsSubcategoria={productsSubcategoria}
          isMobile={isMobile}
        />
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
  const products = await dbProducts.getAllProducts();

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
      products,
    },
    revalidate: 600,
  };
};

export default ProductPage;
