import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/Products/ProductCard";
import { sortProductsByTerm } from "@/utils/sort";
import { Box, Button, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense, useEffect, useState } from "react";

const FootballPage = () => {
  const [categorie, setCategorie] = useState("argentina");
  const [products, setProducts] = useState();
  const { argentinaProducts, bocaProducts, riverProducts } = useProduct();

  useEffect(() => {
    argentinaProducts && setProducts(argentinaProducts);
  }, [argentinaProducts]);
  useEffect(() => {
    const menosUno =
      riverProducts &&
      sortProductsByTerm(
        riverProducts,
        "river_plate_adidas_official_home_short_23_24"
      );
    const ceroRiver =
      riverProducts &&
      sortProductsByTerm(
        menosUno,
        "river_plate_adidas_oficial_home_shirt_23-24_woman_-_aero.rdy"
      );
    const oneRiver =
      riverProducts &&
      sortProductsByTerm(
        ceroRiver,
        "river_plate_training_shirt_23_24_-_adidas_official"
      );
    const twoRiver =
      riverProducts &&
      sortProductsByTerm(
        oneRiver,
        "river_plate_adidas_oficial_home_shirt_23-24_-_aero.rdy"
      );
    const cero =
      bocaProducts &&
      sortProductsByTerm(
        bocaProducts,
        "boca_juniors_home_shorts_23-24_adidas_official"
      );
    const one =
      bocaProducts &&
      sortProductsByTerm(
        cero,
        "boca_juniors_training_shirt_23_24_-_adidas_official"
      );
    const two =
      bocaProducts &&
      sortProductsByTerm(
        one,
        "boca_juniors_home_jersey_23_24_adidas_official_-_aero.rdy_woman"
      );
    const three =
      bocaProducts &&
      sortProductsByTerm(
        two,
        "boca_junior_downtime_short_23_24_adidas_official"
      );
    const four =
      bocaProducts &&
      sortProductsByTerm(
        three,
        "boca_juniors_home_jersey_23_24_adidas_official_-_aero.rdy"
      );

    categorie == "boca" && setProducts(four);
    categorie == "river" && setProducts(twoRiver);
    categorie == "argentina" && setProducts(argentinaProducts);
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
