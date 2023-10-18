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
          height: "100vh",
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
        <Grid item>
          <Box
            border={"1px solid black"}
            sx={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
mt:10,
                mx: 2,
              }}
            >
              <Grid container spacing={0}>
                {products &&
                  products.slice(0, 4).map((e, index) => (
                    <Grid
                      item
                      key={index}
                      md={6}
                      lg={6}
                      xl={6}
                      xs={6}
                      sx={{ transform: {xs:'scale(0.8)', sm:'scale(0.7)', md:'scale(0.7)',lg:'scale(1)', xl:'scale(1)'} }}
                    >
                      <Box sx={{ mx: 1 }}>
                        <ProductCard e={e} index={index} club={"boca"} />
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Box>
            <Box  sx={{ borderRadius: "90px 90px",                          display: isMobile ? "none" : "flex", justifyContent:'center',  width:'50%',marginTop:'50px',           
 }}>
              <video
                ref={refVideo}
                src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010242/pwxy621cd6xrxdu1mzfs.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: "90%",
                  width: "90%",
                  borderRadius: "90px 90px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              />
            </Box>
          </Box>
        </Grid>
        {/* <Grid
          item
          md={6}
          lg={6}
          xl={6}
          xs={12}
          sx={{ display: isMobile ? "auto" : "none" }}
        >

        </Grid> */}
        {/* <Grid item xs={12}>
            <Box
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
          <Box  sx={{            display: isMobile ? "none" : "flex",
}}>
            <Box
              sx={{
                my: 4,
                mx: 2,
                width: '100%',
              }}
            >
              <Grid container spacing={0}>
                {products &&
                  products.slice(0, 4).map((e, index) => (
                    <Grid item key={index} md={6} lg={6} xl={6} xs={6}>
                      <Box sx={{ mx: 1 }}>
                        <ProductCard e={e} index={index} club={"boca"} />
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Box>
            <Box
              width={"50%"}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  xl: "50%",
                  lg: "50%",
                },
              }}
            >
              <Box
                sx={{
                  height: "content-fit",
                  width: { md: "100%" },
                  display: { xs: "none" },
                }}
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
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
}
