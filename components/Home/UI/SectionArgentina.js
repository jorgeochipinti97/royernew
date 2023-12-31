import React, { Suspense, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { VideoHome } from "./VideoHome";
import { TextReveal } from "@/components/TextReveal";

import { ProductCard } from "@/components/Products/ProductCard";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Power1, gsap } from "gsap";


export default function SectionArgentina({ products, isMobile }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const refVideo = useRef();

  useEffect(() => {
    !isMobile && refVideo && refVideo.current.play();
  }, [refVideo]);
  useEffect(() => {
    inView &&
      gsap.to(".divmerque", { opacity: 1, ease: Power1.easeIn, duration: 1.8 });
    console.log(products);
  }, [inView]);

  return (
    <>
      <Box
        sx={{
          py: isMobile ? 0 : 10,
          // backgroundImage: `url('/argentina.jpg')`,
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(117, 170, 219, 0.5),
            rgba(255, 255, 255, 0.5)
          ), url('/argentina.jpg');`,

          backgroundSize: "cover",
          scrollSnapAlign: "start",
        }}
      >
        <Grid container justifyContent={"center"} sx={{scrollSnapAlign:'start'}}>
          <Grid item md={3} sx={{ display: isMobile ? "none" : "auto" }}>
            <Box display={"flex"} justifyContent={"center"}>
              <video
                ref={refVideo}
                src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010225/upfejeayumrfn6omerom.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: "80%",
                  width: "80%",
                  borderRadius: "90px 90px",
                  filter: "grayscale(100%)",
                }}
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={12} sm={12}>
            <Box sx={{display:'flex', justifyContent:'center'}}>

            <video
              ref={refVideo}
              src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010225/upfejeayumrfn6omerom.webm"
              autoPlay
              muted
              loop
              playsInline
              style={{
                height: isMobile ? '90%':"100%",
                width: isMobile ? '90%':"100%",
                borderRadius: "90px 90px",
              }}
              />
              </Box>
          </Grid>
          <Grid item md={3} sx={{ display: isMobile ? "none" : "auto" }}>
            <Box display={"flex"} justifyContent={"center"}>
              <video
                ref={refVideo}
                src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010225/upfejeayumrfn6omerom.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: "80%",
                  width: "80%",
                  borderRadius: "90px 90px",
                  filter: "grayscale(100%)",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        ></Box>
        <Box
          sx={{ minHeight: "300px", opacity: 0,mt: isMobile ? 4:0,scrollSnapAlign:'end' }}
          ref={ref}
          className="divmerque"
        >
          {" "}
          {
            <Marquee>
       {products &&
                products.map((e) => (
                  <Box key={e.slug}>
                    <ProductCard e={e} />
                  </Box>
                ))}
            </Marquee>
          }
        </Box>
      </Box>
    </>
  );
}
