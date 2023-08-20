import React from "react";
import Lottie from "lottie-react";
import loading from "../../animations/loading.json";
import { Box } from "@mui/material";

export const Loading = () => {
  return (
    <>
      <Box sx={{ width: "100%" }} display={'flex'} justifyContent={'center'}>
        <Box sx={{ width: "30%" }}>
          <Lottie animationData={loading} loop={true} />
        </Box>
      </Box>
    </>
  );
};
