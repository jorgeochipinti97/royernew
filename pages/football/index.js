import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/Products/ProductCard";
import { Box, Button, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense, useEffect, useState } from "react";

const FootballPage = () => {
  const [categorie, setCategorie] = useState("argentina");
  const [products, setProducts] = useState();
  const { products: filteredProducts1 } = useProduct("boca");
  const { products: filteredProducts2 } = useProduct("river");
  const { products: filteredProducts3 } = useProduct("argentina");

  useEffect(() => {
    setProducts(filteredProducts3);

  }, [filteredProducts3]);

  useEffect(() => {
    categorie == "boca" && setProducts(filteredProducts1);
    categorie == "river" && setProducts(filteredProducts2);
    categorie == "argentina" && setProducts(filteredProducts3);
  }, [categorie]);

  return (
    <>
      <ShopLayout title={"Royer - Football"}>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 10 }}>
          <Button
            color={categorie == "argentina" ? "primary" : "info"}
            onClick={() => setCategorie("argentina")}
          >
            Argentina
          </Button>
          <Button
            color={categorie == "boca" ? "primary" : "info"}
            onClick={() => setCategorie("boca")}
          >
            Boca
          </Button>
          <Button
            color={categorie == "river" ? "primary" : "info"}
            onClick={() => setCategorie("river")}
          >
            River
          </Button>
        </Box>
        <Grid container >
          {!products ? (
            <>
              <Loading />
            </>
          ) : (
            products.map((e) => (
              <Grid xs={12} md={4} lg={4} xl={4} item key={e.titulo}>
                <ProductCard e={e} />
              </Grid>
            ))
          )}
        </Grid>
      </ShopLayout>
    </>
  );
};

export default FootballPage;
