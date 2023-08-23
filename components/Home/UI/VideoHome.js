import { Box } from "@mui/material";
import React, { Suspense, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export const VideoHome = ({ url, border, height }) => {
  const ref = useRef();

  return (
    <>

        <ReactPlayer
          muted
          playing
          url="https://res.cloudinary.com/djk4q3tys/video/upload/v1692791510/vch6ccsutudz29giyeel.webm"

        />
  

      {/* <video
          muted
          loop
          autoPlay
          type="video/webm"
          style={{
            height: height ? height : "content-fit",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: border,
          }}
          ref={ref}
        >
          <source src={`./${url}.mp4`} type="video/mp4" />
        </video> */}
    </>
  );
};
