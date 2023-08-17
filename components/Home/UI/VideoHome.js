import React, { useEffect, useRef } from "react";

export const VideoHome = ({ url, border }) => {
  const ref = useRef();

  useEffect(() => {
    ref && ref.current.play();
  }, [ref]);
  return (
    <>
      <video
        autoplay
        muted

        loop
        style={{
          height: "content-fit",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: border,
        }}
        ref={ref}
      >
        <source src={`./${url}.mp4`} type="video/mp4" />
      </video>
    </>
  );
};
