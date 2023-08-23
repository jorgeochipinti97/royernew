import React, { useEffect } from "react";
import groovyWalkAnimation from "../../../animations/shippingtwo.json";
import Lottie from "lottie-react";
import { Box, Divider, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const SectionEbay = ({ isMobile }) => {
  gsap.registerPlugin(ScrollTrigger);
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.6,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.6,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.6,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    inView && gsap.to(".shipping", { transform: "scale(1)" });
  }, [inView]);
  useEffect(() => {
    inView2 && gsap.to(".shippping2", { transform: "scale(1)" });
  }, [inView2]);
  useEffect(() => {
    inView3 && gsap.to(".shipping3", { transform: "scale(1)" });
  }, [inView3]);
  useEffect(() => {
    inView4 && gsap.to(".shipping4", { transform: "scale(0.6)" });
  }, [inView4]);
  useEffect(() => {
    inView5 &&
      gsap.to(".divshipping", {
        yPercent: isMobile ? -4 : -5,
        borderRadius: isMobile ? "60px" : "90px",
      });
  }, [inView5]);
  return (
    <>
      <Box
        ref={ref5}
        sx={{ backgroundColor: "black", py: isMobile ? 5 : 0 }}
        className="divshipping"
      >
      
        <Divider sx={{ my: 6, backgroundColor: "white" }} />
      </Box>
    </>
  );
};
