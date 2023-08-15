import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { ProductCard } from "@/components/Products/ProductCard";
import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const FootballPage = () => {
  const [categorie, setCategorie] = useState();
  const [products, setProducts] = useState();
  const { products: filteredProducts1 } = useProduct("boca"); // Productos filtrados por 'filtro1'
  const { products: filteredProducts2 } = useProduct("river"); // Productos filtrados por 'filtro2'
  const { products: filteredProducts3 } = useProduct("argentina");

  useEffect(() => {
    setCategorie("argentina");
    setProducts(filteredProducts3);
    console.log(filteredProducts3)
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
        <Grid container>
          {products &&
            products.map((e) => (
              <Grid xs={4} md={4} lg={4} item key={e.titulo}>
                <ProductCard e={e} />
              </Grid>
            ))}
        </Grid>
      </ShopLayout>
    </>
  );
};

export default FootballPage;
