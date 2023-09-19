import { useProduct } from "@/Hooks/UseProducts";
import { ShopLayout } from "@/components/Layout";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/Products/ProductCard";
import { sortProductsByTerm } from "@/utils/sort";
import { Box, Button, Divider, Grid } from "@mui/material";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";

const FootballPage = () => {
  const [categorie, setCategorie] = useState("argentina");
  const [products, setProducts] = useState();
  const [backgroundcolorClub, setBackgroundcolorClub] = useState();
  const [counter, setCounter] = useState(0);

  const { argentinaProducts, bocaProducts, riverProducts } = useProduct();
  gsap.registerPlugin(ScrollTrigger);

  const changeBackground = (background) => {
    try {
      gsap.to(
        ".degrade",
        {
          background: "white",
          duration:.1
        })
      gsap.to(".degrade", {
        background: background,
        ease: Power4.easeIn,
        duration: 0.5,delay:.2
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const one =
      argentinaProducts &&
      sortProductsByTerm(
        argentinaProducts,
        "coverall_adidas_official_tiro_23_pro"
      );
    const two =
      one &&
      sortProductsByTerm(
        argentinaProducts,
        "condivo_22_parka_jacket_adidas_official"
      );
    const three =
      one &&
      sortProductsByTerm(
        argentinaProducts,
        "argentina_authentic_home_shirt_22_3-star_adidas_official-heat.rdy_(gc4397)"
      );

    three && setProducts(three);
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
    const short =
      bocaProducts &&
      sortProductsByTerm(
        four,
       "boca_juniors_adidas_official_alternative_short_23_24"
      )
    const five =
      bocaProducts &&
      sortProductsByTerm(
        short,
       "boca_juniors_adidas_official_alternative_shirt_23-24_-_aero.rdy"
      )
    const six =
      bocaProducts &&
      sortProductsByTerm(
        five,
        "boca_juniors_adidas_official_alternative_shirt_23-24_-_aero.rdy_-_woman"
      );

    categorie == "boca" && setProducts(six);
    categorie == "boca" && changeBackground(estiloBoca);
    categorie == "river" && setProducts(twoRiver);
    categorie == "river" && changeBackground(estiloRiver);
    categorie == "argentina" && setProducts(argentinaProducts);
    categorie == "argentina" && changeBackground(estiloArgentina);
  }, [categorie]);

  const white = `linear-gradient(90deg,  #ffffff,  #ffffff  )`;
  const estiloBoca = `linear-gradient(  #ffffff,#f3b229,#f3b229,#f3b229  )`;
  const estiloRiver = `linear-gradient(  #ffffff, #eb192e,#eb192e,#eb192e )`;
  const estiloArgentina = `linear-gradient(    #ffffff , #75aadb ,#75aadb,#75aadb  )`;

  return (
    <>
      <ShopLayout title={"Royer - Football"}>
        <Box display={"flex"} justifyContent={"center"} sx={{ mt: 10 }}>
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
        <Divider sx={{ mt: 2 }} />
        <Grid container sx={{ py: 5 }} className="degrade">
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
