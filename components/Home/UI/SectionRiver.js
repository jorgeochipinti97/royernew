import { Box, Grid } from "@mui/material";
import React, { Suspense, useEffect, useRef } from "react";
import { VideoHome } from "./VideoHome";
import { TextReveal } from "@/components/TextReveal";
import { ProductCard } from "@/components/Products/ProductCard";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import animation from "../../../animations/riverlottie.json";

import Lottie from "lottie-react";
import Image from "next/image";

export const SectionRiver = ({ products, isMobile }) => {
  const refVideo = useRef();

  useEffect(() => {
    refVideo.current.play();
  }, [refVideo]);

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
            <Box
              display={"flex"}
              justifyContent={"center"}
              sx={{ width: "100vw" }}
            >
              <Suspense>
                <video
                  ref={refVideo}
                  src="/river.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    height: isMobile ? "100%" : "100%",
                    width: isMobile ? "100%" : "100%",
                    borderRadius: "90px 90px",
                  }}
                />
                {/* <Image
                  src={"/river.gif"}
                  height={100}
                  width={100}
                  loading="lazy"
                  style={{
                    height: isMobile ? "100%" : "100%",
                    width: isMobile ? "100%" : "100%",
                    borderRadius: "90px 90px",
                  }}
                  alt=""
                /> */}
              </Suspense>
            </Box>

            {/* <Box
              display={"flex"}
              justifyContent={"center"}
              sx={{ width: "100vw" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                sx={{ width: "90vw" }}
              >
                <Lottie animationData={animation} loop={true} style={{}} />
              </Box>
            </Box> */}
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
