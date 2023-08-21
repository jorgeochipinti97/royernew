import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export const PlayerSelect = ({ jugadores, onSelect, isMobile }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: isMobile ? "center" : "start",
        }}
      >
        <FormControl>
          <InputLabel id="player-select-label">Choose player</InputLabel>
          <Select
            variant="standard"
            labelId="player-select-label"
            id="player-select"
            sx={{ width: isMobile ? "80vw" : "30vw" }}
            onChange={onSelect}
          >
            {jugadores.map((player, index) => (
              <MenuItem key={index} value={player}>
                {player}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
