import { useProduct } from "@/Hooks/UseProducts";
import { SectionShipping } from "@/components/Home/UI/SectionShipping";
import { SectionArgentina } from "@/components/Home/UI/SectionArgentina";
import { ShopLayout } from "@/components/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SectionBoca } from "@/components/Home/UI/SectionBoca";
import { SectionRiver } from "@/components/Home/UI/SectionRiver";
import { Box, useMediaQuery } from "@mui/material";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  gsap.registerPlugin(ScrollTrigger);
  const { products: filteredProducts1 } = useProduct("boca");
  const { products: filteredProducts2 } = useProduct("river");
  const { products: filteredProducts3 } = useProduct("argentina");
  return (
    <>
      <ShopLayout title={"Royer Store"}>
        <Box sx={{ my: 0 }}>
          <SectionArgentina products={filteredProducts3} />
          <SectionBoca products={filteredProducts1} isMobile={isMobile}/>
          <SectionRiver products={filteredProducts2}  isMobile={isMobile} />
          <SectionShipping isMobile={isMobile} />
        </Box>
      </ShopLayout>
    </>
  );
}
