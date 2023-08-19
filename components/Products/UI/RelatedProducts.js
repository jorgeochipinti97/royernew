import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const RelatedProducts = ({ products }) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        textAlign={"center"}
        fontSize={"32px"}
        sx={{ mt: 2 }}
      >
        Related products
      </Typography>
      <Box sx={{ maxWidth: "100vw" }}>
        <Marquee>
          {products.map((e) => (
            <>
              <Link href={`/products/${e.slug}`}>
                <div key={e.name}>
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
                          <Button color="primary" sx={{ fontWeight: "700" }}>
                            ${e.precio}
                          </Button>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Box>
                </div>
              </Link>
            </>
          ))}
        </Marquee>
      </Box>
    </>
  );
};
