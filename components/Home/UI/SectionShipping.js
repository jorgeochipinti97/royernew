import React, { useEffect } from "react";
import groovyWalkAnimation from "../../../animations/shippingtwo.json";
import Lottie from "lottie-react";
import { Box, Divider, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const SectionShipping = () => {
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
    inView5 && gsap.to(".divshipping", { yPercent: -5, borderRadius: "90px" });
  }, [inView5]);
  return (
    <>
      <Box ref={ref5} sx={{ backgroundColor: "black" }} className="divshipping">
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Slide triggerOnce>
            <Typography
              variant="body1"
              sx={{
                fontSize: "80px",
                textAlign: "center",
                mt: 5,
                fontWeight: "700",
                color: "white",
              }}
            >
              Worldwide Free Shipping
            </Typography>
          </Slide>
          <Typography
            variant="subtitle1"
            fontSize={28}
            marginTop={3}
            color={"white"}
            textAlign={"center"}
            sx={{ transform: "scale(0)" }}
            className="shipping"
          >
            How it works?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              fontSize={20}
              color={"white"}
              textAlign={"justify"}
              width={"80%"}
              sx={{ transform: "scale(0)" }}
              className="shipping"
            >
              The listed price covers standard delivery to your provided
              address, ensuring a seamless experience. Accurate details are
              essential. Once confirmed, your package swiftly departs from our
              warehouse with tracking provided. Expedited options available.
              Your satisfaction, our priority.
            </Typography>
          </Box>
          <Box
            sx={{ width: "50%", transform: "scale(0)" }}
            className="shipping"
            ref={ref}
          >
            <Lottie animationData={groovyWalkAnimation} loop={true} />;
          </Box>

          <Typography
            variant="body1"
            fontSize={28}
            sx={{ fontWeight: "700", transform: "scale(0)" }}
            color={"white"}
            ref={ref2}
            className="shippping2"
            textAlign={"center"}
          >
            <span style={{ fontSize: "30px" }}> 69</span> Countries and Beyond:
            Our Ongoing Expansion in Shipping Reach
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              fontSize={20}
              marginTop={3}
              color={"white"}
              textAlign={"justify"}
              width={"80%"}
              sx={{ fontWeight: "300", transform: "scale(0)" }}
              className="shippping2"
            >
              Explore our extensive global shipping network. From the Argentina
              to USA, Spain, China, and beyond, we deliver to numerous
              countries. Whether it s South Korea, New Zealand, or anywhere
              else, we offer standard and express shipping options to ensure
              your satisfaction. Discover how we bring your products to your
              doorstep worldwide!
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 6, backgroundColor: "white" }} />
        <Slide triggerOnce direction="right">
          <Typography
            variant="body1"
            sx={{
              fontSize: "80px",
              textAlign: "center",
              mt: 10,
              fontWeight: "700",
              lineHeight: "78px",
              color: "white",
            }}
          >
            Shop with Confidence: <br />
            Our Secure Payment Partner
          </Typography>
        </Slide>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            ref={ref3}
            sx={{ transform: "scale(0)" }}
            variant="body1"
            fontSize={20}
            marginTop={3}
            color={"white"}
            textAlign={"justify"}
            width={"80%"}
            className="shipping3"
          >
            Your security is paramount to us, which is why we ve chosen Stripe
            as our payment gateway. With its robust encryption and
            industry-leading security measures, Stripe ensures that your
            financial information is handled with the utmost care. As a trusted
            name in online payments, Stripe is utilized by major companies
            worldwide, attesting to its reliability. Rest assured, when you make
            a purchase on our website, you are benefiting from a payment
            solution that prioritizes your safety. Your transactions are
            encrypted, your data is safeguarded, and your peace of mind is
            guaranteed. Shop confidently with us, knowing that Stripe makes your
            online purchases as secure as they can be
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} ref={ref4}>
          <Image
            src="/stripewhite.png"
            alt=""
            width={808}
            height={264}
            className="shipping4"
            style={{ transform: "scale(0)" }}
          />
        </Box>
      </Box>
    </>
  );
};
