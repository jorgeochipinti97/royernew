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
import { useRouter } from "next/router";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { Loading } from "@/components/Loading";
import animation from "../../../animations/messi1lottie.json";

import Lottie from "lottie-react";

export const SectionArgentina = ({ products, isMobile }) => {
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
      console.log(products)
  }, [inView]);

  return (
    <>
      <Box sx={{ my: isMobile ? 0 : 10 }}>
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
              src="https://res.cloudinary.com/djk4q3tys/image/upload/v1694010205/sapxq7ewzqdcgxnanrup.jpg"
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
        >
          <Slide triggerOnce={true}>
            <Typography
              sx={{
                color: "#75aadb",
                fontSize: isMobile ? "20px" : "30px",
                fontWeight: "600",
              }}
              textAlign={"center"}
            >
              The Latest World Champions Haven
            </Typography>
          </Slide>
        </Box>
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
                  <Link href={`/products/${e.slug}`} key={e.name}>
                    <div>
                      <Box>
                        <Card
                          sx={{
                            height: "fit-content",
                            m: 2,
                          }}
                        >
                          <CardActionArea>
                            <CardMedia>
                              <>
                                <Image
                                  src={e.images[0]}
                                  alt=""
                                  width={200}
                                  height={200}
                                />
                              </>
                            </CardMedia>
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              sx={{ my: 1 }}
                            >
                              <Button
                                color="primary"
                                sx={{ fontWeight: "700" }}
                              >
                                ${e.precio}
                              </Button>
                            </Box>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </div>
                  </Link>
                ))}
            </Marquee>
          }
        </Box>
      </Box>
    </>
  );
};
