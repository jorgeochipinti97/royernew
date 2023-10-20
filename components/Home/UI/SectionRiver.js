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

<Grid item sx={{       }}>
          <Box
            border={"1px solid black"}
            sx={{ height: "100vh", width: "100vw", display: "flex",justifyContent:'center' }}
          >
              <Box  sx={{ borderRadius: "90px 90px",                          display: isMobile ? "none" : "flex", justifyContent:'center',  width:'50%',marginTop:'50px',           
 }}>
              <video
                ref={refVideo}
                src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010230/lqer9bgw76llmk5a4ujl.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: "90%" ,
                  width: '90%',
                  borderRadius: "90px 90px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              />
            </Box>
              <Box
              sx={{
                mt:5,
                mx: 2,

              }}
            >
              <Grid container spacing={0} height={'10vh'}>
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
          
          </Box>
        </Grid>


        {/* <Grid item md={6} lg={6} xl={6}>
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
            style={{
              display: isMobile ? "auto" : "none",
              maxWidth: "100vw",
              scrollSnapAlign: "end",
            }}
          >
            <Marquee direction="right">
              {products &&
                products.map((e) => (
                  <Box key={e.slug}>
                    <ProductCard e={e} />
                  </Box>
                ))}
            </Marquee>
          </Box>
          <Grid
            container
            display={isMobile ? "none" : "flex"}
            spacing={6}
            justifyContent={"center"}

          >
            {products &&
              products.slice(0, 4).map((e, index) => (
                <Grid item key={index}>
                  <Box sx={{ mx: 1,transform:'scale(0.8)' }}>
                    <ProductCard e={e} index={index} club={"river"} />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
}
