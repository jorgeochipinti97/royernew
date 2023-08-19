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
  ListSubheader,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

import { useRouter } from "next/router";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import QuizIcon from "@mui/icons-material/Quiz";
import ManIcon from "@mui/icons-material/Man";
import HomeIcon from "@mui/icons-material/Home";

import WomanIcon from "@mui/icons-material/Woman";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
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
              <ManIcon />
            </ListItemIcon>
            <ListItemText primary={"Football"} />
          </ListItem>

          <ListItem
            sx={{ display: { xs: "", sm: "none" } }}
            button
            onClick={() => navigateTo("/regionals")}
          >
            <ListItemIcon>
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary={"Regionals"} />
          </ListItem>
          <ListItem
            sx={{ display: { xs: "", sm: "none" } }}
            button
            onClick={() => navigateTo("/contact")}
          >
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>
          <ListItem
            sx={{ display: { xs: "", sm: "none" } }}
            button
            onClick={() => navigateTo("/faqs")}
          >
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary={"FAQS"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};