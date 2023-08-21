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
  useEffect(() => {
    const productBoca1 = filteredProducts1.filter(
      (e) =>
        e.slug == "boca_juniors_home_jersey_23_24_adidas_official_-_aero.rdy"
    );
    const productBoca2 = filteredProducts1.filter(
      (e) => e.slug == "boca_juniors_training_shirt_23_24_-_adidas_official"
    );
    const productBoca3 = filteredProducts1.filter(
      (e) =>
        e.slug ==
        "boca_juniors_home_jersey_23_24_adidas_official_-_aero.rdy_woman"
    );
    const productBoca4 = filteredProducts1.filter(
      (e) => e.slug == "boca_juniors_home_shorts_23-24_adidas_official"
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
    console.log(productsBoca);
  }, [productsBoca]);

  return (
    <>
      {productsBoca && productsBoca.length > 1 ? (
        <>
          <ShopLayout title={"Royer Store"}>
            <Box sx={{ my: 0 }}>
              <SectionArgentina
                products={filteredProducts3}
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
              <SectionRiver products={filteredProducts2} isMobile={isMobile} />
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
