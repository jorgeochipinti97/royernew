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
import { ProductCard } from "../ProductCard";

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
            <Box key={e.slug}>
             <ProductCard e={e}/>
            </Box>
          ))}
        </Marquee>
      </Box>
    </>
  );
};
