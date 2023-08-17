import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { VideoHome } from "./VideoHome";
import { TextReveal } from "@/components/TextReveal";
import { ProductCard } from "@/components/Products/ProductCard";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export const SectionRiver = ({ products, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    inView &&
      gsap.to(".divriver", {
        yPercent: isMobile ? -2 : -5,
        borderRadius: "90px",
      });
  }, [inView]);

  return (
    <>
      <Grid
        container
        sx={{
          height: "content-fit",
          width: "100%",
          borderRadius: "30px",
          backgroundColor: "#f0ecec",
        }}
        ref={ref}
        className="divriver"
      >
        <Grid item md={6} lg={6} xl={6}>
          <Box
            sx={{ height: "content-fit", width: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VideoHome url={"river"} border="90px" />
          </Box>{" "}
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <Box sx={{ my: 4, mx: 2 }}>
            <Box sx={{ mt: 0 }}>
              <TextReveal textReveal={"River Plate"} color={"#eb192e"} />
            </Box>
            {
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                width={"100%"}
                marginTop={10}
              >
                {products &&
                  products.slice(0, 4).map((e, index) => (
                    <>
                      <ProductCard e={e} index={index} club="river" />
                    </>
                  ))}
              </Box>
            }
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
