import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { Suspense, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { formattwo } from "@/utils/currency";
import { Loading } from "../Loading";
import styled from "@emotion/styled";

export const ProductCard = ({ e, index, club }) => {
  const { asPath, push } = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const BlurredBackground = styled(Box)(({ theme }) => ({
    filter: "blur(10px)", // Ajusta el valor de desenfoque según tu preferencia
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
  }));

  useEffect(() => {
    inView &&
      gsap.to(`.${club}${index}`, {
        // transform: "scale(1)",
        opacity:'1', ease: Power4.easeIn, duration:0.3
      });
  }, [inView]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Box
          ref={ref}
          display={"flex"}
          flexDirection={"column"}
          sx={{
            opacity:0
            //  transform: "scale(0)"
             }}
          alignItems={"center"}
          onClick={() => push(`/products/${e.slug}`)}
          className={`${club}${index}`}
        >
          <Card
            sx={{
              height: "fit-content",
              width: asPath.includes("football") ? 350 : 200,
              m: 2,
              backgroundColor: "rgba(39,40,67,255)",
              borderRadius:
                asPath == "/" ? "40px 40px 60px 60px" : "40px 40px 90px 90px",
            }}
          >
            <CardActionArea>
              <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={e.images[0]}
                  alt=""
                  width={asPath.includes("football") ? 350 : 200}
                  height={asPath.includes("football") ? 350 : 200}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Lato",
                    fontSize: asPath != '/football' ? '12px': "16px",
fontWeight:'600',
                    color: "white",
                    // display: asPath == "/" ? "none" : "auto",
                    textAlign: "center",
                  }}
                >
                  {e.titulo}
                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{
                      backgroundColor: "#008020",
                      borderRadius: "9px",
                      mt: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontSize: asPath == "/" ? "17px" : "16px",
                        px: 2,
                        fontWeight: "700",
                      }}
                    >
                      {formattwo(e.precio)}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Suspense>
    </>
  );
};
