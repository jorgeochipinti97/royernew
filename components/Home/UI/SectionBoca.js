import { ProductCard } from "@/components/Products/ProductCard";
import { TextReveal } from "@/components/TextReveal";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { VideoHome } from "./VideoHome";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export const SectionBoca = ({ products, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    inView && gsap.to(".divboca", { yPercent:isMobile ? -2: -5, borderRadius: "90px" });
  }, [inView]);

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "30px 30px",
          backgroundColor: "#103f79",

        }}
        className="divboca"
        ref={ref}
      >
        <Grid item md={6} lg={6} xl={6} xs={12}>
          <Grid
            item
            md={6}
            lg={6}
            xl={6}
            xs={12}
            sx={{ display: isMobile ? "auto" : "none" }}
          >
            <Box
              sx={{ height: "100%", width: "100%" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <VideoHome url={"boca"} border={"90px"} />
            </Box>
          </Grid>
          <Box sx={{ mt: 10 }}>
            <TextReveal textReveal={"Boca Juniors"} color={"#f3b229"} />
          </Box>
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
                  <Box sx={{ mx: 1 }}>
                    <ProductCard e={e} index={index} club={"boca"} />
                  </Box>
                </>
              ))}
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          xl={6}
          xs={12}
          sx={{ display: isMobile ? "none" : "auto" }}
        >
          <Box
            sx={{ height: "100%", width: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VideoHome url={"boca"} border={"90px"} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
