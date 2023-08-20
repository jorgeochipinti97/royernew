import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { Suspense, useEffect, useRef } from "react";

import groovyWalkAnimation from "../../animations/spinner.json";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import { Elastic, gsap, Power4, Power1, Back } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { format } from "@/utils/currency";
import { Loading } from "../Loading";

export const ProductCard = ({ e, index, club }) => {
  const { asPath, push } = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    inView &&
      gsap.to(`.${club}${index}`, {
        transform: "scale(1)",
      });
  }, [inView]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Box
          ref={ref}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          onClick={() => push(`/products/${e.slug}`)}
        >
          <Card
            sx={{
              height: "fit-content",
              width: asPath.includes("football") ? 350 : 200,
              m: 2,
              transform: "scale(0)",
            }}
            className={`${club}${index}`}
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
            </CardActionArea>
          </Card>
          <Box
            justifyContent={"center"}
            sx={{
              my: 1,
              display:
                asPath.includes("football") || asPath.includes("regionals")
                  ? "auto"
                  : "none",
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                sx={{ width: "50%" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "15px",
                    textAlign: "center",
                    lineHeight: "16px",
                  }}
                >
                  {e.titulo}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
            <Button color={"secondary"} sx={{ fontWeight: "700" }}>
              {format(e.precio)}
            </Button>
          </Box>
        </Box>
      </Suspense>
    </>
  );
};
