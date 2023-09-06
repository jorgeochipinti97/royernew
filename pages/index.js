import { useProduct } from "@/Hooks/UseProducts";
import { SectionShipping } from "@/components/Home/UI/SectionShipping";
import { SectionArgentina } from "@/components/Home/UI/SectionArgentina";
import { ShopLayout } from "@/components/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SectionBoca } from "@/components/Home/UI/SectionBoca";
import { SectionRiver } from "@/components/Home/UI/SectionRiver";
import { Box, useMediaQuery } from "@mui/material";
import { Loading } from "@/components/Loading";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  gsap.registerPlugin(ScrollTrigger);
  const { products: filteredProducts1 } = useProduct("boca");
  const { products: filteredProducts2 } = useProduct("river");
  const { products: filteredProducts3 } = useProduct("argentina");
  const [productsBoca, setProductsBoca] = useState([]);
  const [productsRiver, setProductsRiver] = useState([]);
  useEffect(() => {
    const productBoca1 = filteredProducts1.filter(
      (e) =>
        e.slug == "boca_juniors_adidas_official_home_shirt_22-23_-_heat.rdy"
    );
    const productBoca2 = filteredProducts1.filter(
      (e) =>
        e.slug == "boca_juniors_home_jersey_23_24_adidas_official_-_aero.rdy"
    );
    const productBoca3 = filteredProducts1.filter(
      (e) => e.slug == "boca_juniors_home_shorts_23-24_adidas_official"
    );
    const productBoca4 = filteredProducts1.filter(
      (e) => e.slug == "boca_juniors_third_shirt_23_24_adidas_official"
    );

    console.log(
      productBoca1[0],
      productBoca2[0],
      productBoca3[0],
      productBoca4[0]
    );
    setProductsBoca([
      productBoca1[0],
      productBoca2[0],
      productBoca3[0],
      productBoca4[0],
    ]);
  }, [filteredProducts1]);

  useEffect(() => {
    const productRiver1 = filteredProducts2.filter(
      (e) => e.slug == "river_plate_adidas_oficial_home_shirt_23-24_-_aero.rdy"
    );
    const productRiver2 = filteredProducts2.filter(
      (e) => e.slug == "river_plate_adidas_official_home_short_23_24"
    );
    const productRiver3 = filteredProducts2.filter(
      (e) => e.slug == "river_plate_training_shirt_23_24_-_adidas_official"
    );
    const productRiver4 = filteredProducts2.filter(
      (e) => e.slug == "river_plate_adidas_official_alternative_short_23_24"
    );

    console.log(
      productRiver1[0],
      productRiver2[0],
      productRiver3[0],
      productRiver4[0]
    );
    setProductsRiver([
      productRiver1[0],
      productRiver2[0],
      productRiver3[0],
      productRiver4[0],
    ]);
  }, [filteredProducts2]);

  return (
    <>
      {productsBoca && productsBoca.length > 1 ? (
        <>
          <ShopLayout imageFullUrl={'/logoroyer.jpg"'} title={"Royer Store"}>
            <Box sx={{ my: 0 }}>
              <SectionArgentina
                products={filteredProducts3.slice(0,7)}
                isMobile={isMobile}
              />
              <SectionBoca
                products={
                  productsBoca[0] != undefined && productsBoca.length > 0
                    ? productsBoca
                    : filteredProducts1
                }
                isMobile={isMobile}
              />
              <SectionRiver
                products={
                  productsRiver[0] != undefined && productsRiver.length > 0
                    ? productsRiver
                    : filteredProducts1
                }
                isMobile={isMobile}
              />

              <SectionShipping isMobile={isMobile} />
            </Box>
          </ShopLayout>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
