import { ProductCard } from "@/components/Products/ProductCard";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SectionBoca({ products, isMobile, isTablet }) {
  const refVideo = useRef();

  useEffect(() => {
    refVideo.current.play();
  }, [refVideo]);

  return (
    <>
      <Grid
        container
        sx={{
          height: isMobile ? "fit-content" : "100vh",
          width: "100vw",
          pb: isMobile ? 4 : 0,
          scrollSnapAlign: "start",
          backgroundImage: `linear-gradient(
  to bottom,
  rgba(243, 178, 41, 0.5),
  rgba(16, 63, 121, 0.5)
), url('/boca.webp');`,

          backgroundSize: "cover",
        }}
      >
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
            <Box
              display={"flex"}
              justifyContent={"center"}
              sx={{ width: "100vw" }}
            >
              <Image
                src="https://res.cloudinary.com/djk4q3tys/image/upload/v1694010205/leccbzqjmrgppp8qu2ny.jpg"
                width={500}
                height={500}
                style={{
                  display: isMobile ? "auto" : "none",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>{" "}
          </Box>
        </Grid>
        <Grid item  xs={12}>
          <Box
            direction="left"
            style={{
              display: isMobile ? "auto" : "none",
              scrollSnapAlign: "end",
            }}
          >
            <Marquee direction="left">
              {products &&
                products.map((e) => (
                  <Box key={e.slug}>
                    <ProductCard e={e} />
                  </Box>
                ))}
            </Marquee>
          </Box>
          <Box
            sx={{
              my: 4,
              mx: 2,
              display: isMobile ? "none" : "auto",
            }}
          >
            <Grid container spacing={2}>
              {products &&
                products.slice(0, 4).map((e, index) => (
                  <Grid item key={index} md={3} lg={6} xl={6} xs={6}>
                    <Box sx={{ mx: 1 }}>
                      <ProductCard e={e} index={index} club={"boca"} />
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item md={6} lg={6} xl={6} xs={12}>
          <Box
            sx={{ height: "content-fit", width: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100vw", height: "100vh" }}
            >
              <video
                ref={refVideo}
                src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010242/pwxy621cd6xrxdu1mzfs.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: isMobile ? "100%" : "80vh",
                  width: isMobile ? "100%" : "50%",
                  borderRadius: "90px 90px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  display: isMobile ? "none" : "auto",
                }}
              />
            </Box>
          </Box>{" "}
        </Grid>
      </Grid>
    </>
  );
}
