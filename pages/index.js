import { useProduct } from "@/Hooks/UseProducts";
import { SectionShipping } from "@/components/Home/UI/SectionShipping";
import { SectionArgentina } from "@/components/Home/UI/SectionArgentina";
import { VideoHome } from "@/components/Home/UI/VideoHome";
import { ShopLayout } from "@/components/Layout";
import Marquee from "react-fast-marquee";

import { TextReveal } from "@/components/TextReveal";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animations/spinner.json";
import { ProductCard } from "@/components/Products/ProductCard";
import { SectionBoca } from "@/components/Home/UI/SectionBoca";
import { SectionRiver } from "@/components/Home/UI/SectionRiver";

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.7,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.7,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.7,
  });

  gsap.registerPlugin(ScrollTrigger);


  const { products: filteredProducts1 } = useProduct("boca"); // Productos filtrados por 'filtro1'
  const { products: filteredProducts2 } = useProduct("river"); // Productos filtrados por 'filtro2'
  const { products: filteredProducts3 } = useProduct("argentina");

  return (
    <>
      <ShopLayout title={"Royer Store"}>
        <SectionArgentina products={filteredProducts3} />
        <SectionBoca products={filteredProducts1}  />
        <SectionRiver products={filteredProducts2}  />
        <SectionShipping />
      </ShopLayout>
    </>
  );
}
