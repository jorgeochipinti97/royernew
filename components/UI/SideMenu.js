import { useContext, useState } from "react";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from "next/router";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { UiContext } from "@/context/ui/UiContext";

export const SideMenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  // TODO: HACER QUE LA BUSQUEDA SEA POR LOCALSTORAGE Y NO POR QUERY
  const [searchTerm, setSearchTerm] = useState("");

  const navigateTo = (url) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem
            button
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo("/")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
          <ListItem
            button
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo("/football")}
          >
            <ListItemIcon>
              <SportsSoccerIcon />
            </ListItemIcon>
            <ListItemText primary={"Football"} />
          </ListItem>

          <ListItem
            sx={{ display: { xs: "", sm: "none" } }}
            button
            onClick={() => navigateTo("/regionals")}
          >
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={"Regionals"} />
          </ListItem>
          <ListItem
            sx={{ display: { xs: "", sm: "none" } }}
            button
            onClick={() => navigateTo("/contact")}
          >
            <ListItemIcon>
              <ConnectWithoutContactIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>
          <ListItem
            sx={{ display: { xs: "", sm: "none" } }}
            button
            onClick={() => navigateTo("/faqs")}
          >
            <ListItemIcon>
              <HelpCenterIcon />
            </ListItemIcon>
            <ListItemText primary={"FAQS"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};