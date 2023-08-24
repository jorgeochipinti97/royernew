import React, { Suspense, useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    inView &&
      gsap.to(".divmerque", { opacity: 1, ease: Power1.easeIn, duration: 1.8 });
  }, [inView]);

  return (
    <>
      <Box sx={{ my: isMobile ? 0 : 10 }}>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          sx={{ width: "100vw" }}
        >
          <Box sx={{ display: isMobile ? "none" : "auto" }}>
            <Suspense>
              <Image
                src={"/argentina.gif"}
                height={1000}
                width={100}
                loading = 'lazy'
                style={{
                  height: isMobile ? "100%" : "auto",
                  width: isMobile ? "100%" : "auto",
                  filter: "grayscale(100%)",
                }}
                alt=""
              />
            </Suspense>
          </Box>
          <Suspense>
            <Image
              src={"/argentina.gif"}
              height={1000}
              width={100}
              style={{
                height: isMobile ? "100%" : "auto",
                width: isMobile ? "100%" : "auto",
              }}
              alt=""
            />
          </Suspense>
          <Box sx={{ display: isMobile ? "none" : "auto" }}>
            <Suspense>
              <Image
                src={"/argentina.gif"}
                height={1000}
                width={100}
                style={{
                  height: isMobile ? "100%" : "auto",
                  width: isMobile ? "100%" : "auto",
                  filter: "grayscale(100%)",
                }}
                alt=""
              />
            </Suspense>
          </Box>
          {/*
            display={"flex"}
            justifyContent={"center"}
            sx={{ width: "90vw" }}
          >
            <Lottie
              animationData={animation}
              loop={true}
              style={{

              }}
            />
          </Box> */}
        </Box>
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
