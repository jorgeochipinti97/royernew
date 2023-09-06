import { ProductCard } from "@/components/Products/ProductCard";
import { TextReveal } from "@/components/TextReveal";
import { Box, Grid } from "@mui/material";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { VideoHome } from "./VideoHome";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { Loading } from "@/components/Loading";
import animation from "../../../animations/bocalottie.json";

import Lottie from "lottie-react";
import Image from "next/image";

export const SectionBoca = ({ products, isMobile }) => {
  const refVideo = useRef();

  useEffect(() => {
refVideo.current.play()
  }, [refVideo]);


  const [isImageReady, setIsImageReady] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    inView &&
      gsap.to(".divboca", {
        yPercent: isMobile ? -2 : -5,
        borderRadius: "90px",
      });
  }, [inView]);

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "30px 30px",
          backgroundColor: "#103f79",
        }}
        className="divboca"
        ref={ref}
      >
        <Grid item md={6} lg={6} xl={6} xs={12}>
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
                <Suspense>
                  <Image
                    src={"/boca.gif"}
                    height={100}
                    width={100}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "90px 90px",
                    }}
                    alt=""
                  />
                </Suspense>
              </Box>{" "}
            </Box>
          </Grid>
          <Box sx={{ mt: 10 }}>
            <TextReveal textReveal={"Boca Juniors"} color={"#f3b229"} />
          </Box>
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
                  <Box sx={{ mx: 1 }}>
                    <ProductCard e={e} index={index} club={"boca"} />
                  </Box>
                </>
              ))}
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          xl={6}
          xs={12}
          sx={{ display: isMobile ? "none" : "auto" }}
        >
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
              <video
              ref={refVideo}
                src="/boca.webm"
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
      </Grid>
    </>
  );
};
