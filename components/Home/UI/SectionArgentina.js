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
    refVideo.current.play();
  }, [refVideo]);
  useEffect(() => {
    inView &&
      gsap.to(".divmerque", { opacity: 1, ease: Power1.easeIn, duration: 1.8 });
  }, [inView]);

  return (
    <>
      <Box sx={{ my: isMobile ? 0 : 10 }}>
        <Grid container justifyContent={'center'}>
          <Grid item md={3}  sx={{display:isMobile? 'none':'auto'}}>
            <Suspense>
              <Box display={'flex'} justifyContent={'center'}>

              <video
                ref={refVideo}
                src="/argentina.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: isMobile ? "100%" : "80%",
                  width: isMobile ? "100%" : "80%",
                  borderRadius: "90px 90px",
                  filter: "grayscale(100%)",
                }}
                />
                </Box>
            </Suspense>
          </Grid>
          <Grid item md={3}  >
            <Suspense>
              <video
                ref={refVideo}
                src="/argentina.webm"
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
            </Suspense>
          </Grid>
          <Grid item md={3} sx={{display:isMobile? 'none':'auto'}}>
            <Suspense>
            <Box display={'flex'} justifyContent={'center'}>

<video
  ref={refVideo}
  src="/argentina.webm"
  autoPlay
  muted
  loop
  playsInline
  style={{
    height: isMobile ? "100%" : "80%",
    width: isMobile ? "100%" : "80%",
    borderRadius: "90px 90px",
    filter: "grayscale(100%)",
  }}
  />
  </Box>
            </Suspense>
          </Grid>
        </Grid>
        {/* <Box
          display={"flex"}

          sx={{ width: "100vw" }}
        >
          <Box sx={{ display: isMobile ? "none" : "auto" }}>
        
          </Box>
          <Suspense>
            <video
              ref={refVideo}
              src="/argentina.webm"
              autoPlay
              muted
              loop
              playsInline
              style={{
                height: isMobile ? "100%" : "auto",
                width: isMobile ? "100%" : "auto",
                borderRadius: "90px 90px",
              }}
            />
          </Suspense>
          <Box sx={{ display: isMobile ? "none" : "auto" }}>
            <Suspense>
              <video
                ref={refVideo}
                src="/argentina.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  height: isMobile ? "100%" : "auto",
                  width: isMobile ? "100%" : "auto",
                  borderRadius: "90px 90px",
                  filter: "grayscale(100%)",
                }}
              />
            </Suspense>
          </Box>

        </Box> */}
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
