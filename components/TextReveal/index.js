import { Box, Typography } from "@mui/material";


export const TextReveal = ({ textReveal, color }) => {
  return (
    <>
      <Box>

          <Typography
            variant="body1"
            id="my-text"
            sx={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              textShadow: "2px 2px 4px #0000",
              color: color,
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "700",
              lineHeight: "40px",
            }}
          >
            {textReveal}
          </Typography>

      </Box>
    </>
  );
};
