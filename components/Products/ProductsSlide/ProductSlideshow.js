import { Box, Grid, Link } from "@mui/material";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

export const ProductSlideshow = ({ images, isMobile }) => {
  const animation = { duration: 20000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div
          ref={sliderRef}
          className="keen-slider shadow"
          style={{
            width: isMobile ? "80vw" : "30vw",
            borderRadius: "30px",
            border: "1px solid black",
marginBottom:30
          }}
        >
          {images &&
            images.map((image) => {
              return (
                <>
                  <div
                    className="keen-slider__slide "
                    style={{

                      marginLeft: 0.2,
                      marginRight: 0.2,
                      borderRadius: "30px",
                    }}
                  >
                    <img
                      src={image}
                      style={{ maxWidth: isMobile ? '100%':  "500px", borderRadius: "30px" }}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
