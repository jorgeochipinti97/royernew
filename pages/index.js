import { useProduct } from "@/Hooks/UseProducts";
// import { SectionArgentina } from "@/components/Home/UI/SectionArgentina";
import { ShopLayout } from "@/components/Layout";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SectionBoca = lazy(
  async () => await import("../components/Home/UI/SectionBoca")
);
const SectionRiver = lazy(
  async () => await import("../components/Home/UI/SectionRiver")
);
const SectionArgentina = lazy(
  async () => await import("../components/Home/UI/SectionArgentina")
);
const SectionShipping = lazy(
  async () => await import("../components/Home/UI/SectionShipping")
);

import { Box, LinearProgress, useMediaQuery } from "@mui/material";
import { Loading } from "@/components/Loading";
import { Suspense, lazy, useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  gsap.registerPlugin(ScrollTrigger);
  const { argentinaProducts, bocaProducts, riverProducts } = useProduct();

  const [productsBoca, setProductsBoca] = useState([]);
  const [productsRiver, setProductsRiver] = useState([]);

  useEffect(() => {
    const productBoca1 = bocaProducts.filter(
      (e) =>
        e.slug == "boca_juniors_adidas_official_home_shirt_22-23_-_heat.rdy"
    );
    const productBoca2 = bocaProducts.filter(
      (e) =>
        e.slug == "boca_juniors_home_jersey_23_24_adidas_official_-_aero.rdy"
    );
    const productBoca3 = bocaProducts.filter(
      (e) => e.slug == "boca_juniors_home_shorts_23-24_adidas_official"
    );
    const productBoca4 = bocaProducts.filter(
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
  }, [bocaProducts]);

  useEffect(() => {
    const productRiver1 = riverProducts.filter(
      (e) => e.slug == "river_plate_adidas_oficial_home_shirt_23-24_-_aero.rdy"
    );
    const productRiver2 = riverProducts.filter(
      (e) => e.slug == "river_plate_adidas_official_home_short_23_24"
    );
    const productRiver3 = riverProducts.filter(
      (e) => e.slug == "river_plate_training_shirt_23_24_-_adidas_official"
    );
    const productRiver4 = riverProducts.filter(
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
  }, [riverProducts]);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".intro", {
        yPercent: -1000,
        ease: Power1.easeIn,
        duration: 1,
      });
    }, 1000);
  }, []);

  return (
    <>
      <ShopLayout imageFullUrl={'/logoroyer.jpg"'} title={"Royer Store"}>
        <Box
          className="intro"
          sx={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            backgroundColor: "#272843",
            display: "flex",
            zIndex: 100,
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Image
            src="/royerpwa.png"
            width={200}
            height={200}
            style={{ marginTop: 100 }}
          />
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "50vw" }}>
              <LinearProgress value={50} color="secondary" />
            </div>
          </div>
        </Box>
        <Box sx={{ my: 0 }}>
          <Suspense>
            <SectionArgentina
              products={argentinaProducts.slice(0, 7)}
              isMobile={isMobile}
            />
          </Suspense>

          <Suspense>
            <SectionBoca
              products={
                productsBoca[0] != undefined && productsBoca.length > 0
                  ? productsBoca
                  : bocaProducts
              }
              isMobile={isMobile}
            />
          </Suspense>

          <Suspense>
            <SectionRiver
              products={
                productsRiver[0] != undefined && productsRiver.length > 0
                  ? productsRiver
                  : bocaProducts
              }
              isMobile={isMobile}
            />
          </Suspense>

          <Suspense>
            <SectionShipping isMobile={isMobile} />
          </Suspense>
        </Box>
      </ShopLayout>
    </>
  );
}
