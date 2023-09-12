import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";

import { ProductCard } from "@/components/Products/ProductCard";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SectionRiver({ products, isMobile }) {
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
          width: "100%",
          scrollSnapAlign: "start",
          // backgroundColor: "#f0ecec",
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(233, 22, 43, 0.5),
            rgba(255, 255, 255, 0.5)
          ), url('/river.avif');`,
        }}

        // className="divriver"
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
              alignItems={"center"}
              sx={{
                width: "100vw",
                height: isMobile ? "fit-content" : "100vh",
              }}
            >
              <video
                ref={refVideo}
                src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010230/lqer9bgw76llmk5a4ujl.webm"
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
              <img
                src={"/river.jpeg"}
                loading="lazy"
                style={{
                  height: "auto",
                  width: "100%",

                  display: isMobile ? "auto" : "none",
                }}
                alt=""
              />
            </Box>
          </Box>{" "}
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <Box
            direction="left"
            style={{ display: isMobile ? "auto" : "none", maxWidth: "100vw" }}
          >
            <Marquee direction="right">
              {products &&
                products.map((e) => (
                  <Box key={index}>
                    <ProductCard e={e} />
                  </Box>
                ))}
            </Marquee>
          </Box>
          <Box sx={{ my: 4, mx: 2, display: isMobile ? "none" : "auto" }}>
            {
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                width={"100%"}
                sx={{ height: "100vh" }}
              >
                {products &&
                  products.slice(0, 4).map((e, index) => (
                    <Box key={index}>
                      <ProductCard e={e} index={index} club="river" />
                    </Box>
                  ))}
              </Box>
            }
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
