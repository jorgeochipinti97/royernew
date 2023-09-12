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
          backgroundImage: `url('/argentina.jpg')`,
          backgroundSize: "cover",
          scrollSnapAlign: "start",
        }}
      >
        <Grid container justifyContent={"center"}>
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
            <Image
              src="/argentina.jpeg"
              width={500}
              height={8000}
              style={{
                display: isMobile ? "auto" : "none",
                width: "100%",
                height: "100%",
              }}
            />
            <video
              ref={refVideo}
              src="https://res.cloudinary.com/djk4q3tys/video/upload/v1694010225/upfejeayumrfn6omerom.webm"
              autoPlay
              muted
              loop
              playsInline
              style={{
                display: isMobile ? "none" : "auto",
                height: "100%",
                width: "100%",
                borderRadius: "90px 90px",
              }}
            />
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
            my: 2,
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        ></Box>
        <Box
          sx={{ minHeight: "300px", opacity: 0 }}
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
