import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
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
import { format, formattwo } from "@/utils/currency";
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
          sx={{ transform: "scale(0)" }}
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
              borderRadius: asPath == '/' ? '40px 40px 60px 60px': "40px 40px 90px 90px",
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
                  variant="body2"
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: "700",
                    fontSize:asPath =='/' ? '10px': '16px',

                    color:'white',
                    my: asPath == '/' ? 0:1,
                    textAlign:'center'
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
                        px: 2,
                      }}
                    >
                      {formattwo(e.precio)}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* <Box
            justifyContent={"center"}
            sx={{
              my: 1,
              display:
                asPath.includes("football") || asPath.includes("regionals")
                  ? "auto"
                  : "none",
            }}
          >
            {asPath.includes("football") && (
                <>
                  <Card
                    sx={{
                      position: "relative",
                      bottom: 25,
                      cursor: "pointer",
                      width: 350,
                      backgroundColor: "rgba(39,40,67,255)", // Fondo borroso con color (ajusta el color y la opacidad según tus preferencias)
                      backdropFilter: "blur(0.5)", // Ajusta el valor de desenfoque según tu preferencia
                      maxWidth: 400, // Personaliza el ancho de la tarjeta según tu preferencia
                      margin: "0 auto",
                      borderRadius: "0px 0px 90px 90px", // Centra la tarjeta horizontalmente
                    }}
                  >
                    <CardActionArea>
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Lato",
                            fontWeight: "700",
                            lineHeight: "12px",
                            color: "white",
                            my: 1,
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
                                px: 2,
                              }}
                            >
                              {formattwo(e.precio)}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </>
              )}

           
</Box> */}
        </Box>
      </Suspense>
    </>
  );
};
