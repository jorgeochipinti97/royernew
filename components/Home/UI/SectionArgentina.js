import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
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

export const SectionArgentina = ({ products, isLoading }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const router = useRouter();

  useEffect(() => {
    inView &&
      gsap.to(".divmerque", { opacity: 1, ease: Power1.easeIn, duration: 1.5 });
  }, [inView]);

  return (
    <>
      <Box sx={{ my: 5 }}>
        <VideoHome url="messi" border={"auto"} />
        <Box
          sx={{
            my: 5,
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <TextReveal
            textReveal={"        The Latest World Champions Haven"}
            color={"#75aadb"}
          />
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
                  <Link href={`/products/${e.slug}`}  key={e.name}>
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
