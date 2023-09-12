import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { CartContext } from "@/context/cart/CartContext";
import { useContext } from "react";
import { UiContext } from "@/context/ui/UiContext";

const Navbar = ({ isMobile }) => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push("/search");
  };
  return (
    <AppBar sx={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <Box sx={{ borderRadius: "9px", backgroundColor: "white",p:1 }}>
          <NextLink href="/" passHref style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Royer <span style={{ fontWeight: "200" }}>|</span>{" "}
              <span style={{ fontWeight: "200" }}>Store</span>
            </Typography>
          </NextLink>
        </Box>

        <Box flex={1} />

        <Box sx={{ display: isMobile ? "none" : "auto" }}>
          <NextLink href="/" passHref>
            <Button
              sx={{ fontWeight: "800", mx: 1 }}
              color={asPath == "/" ? "primary" : "info"}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/football" passHref>
            <Button
              sx={{ fontWeight: "800", mx: 1 }}
              color={asPath.includes("football") ? "primary" : "info"}
            >
              Football
            </Button>
          </NextLink>
          <NextLink href="/regionals" passHref>
            <Button
              sx={{ fontWeight: "800", mx: 1 }}
              color={asPath.includes("regionals") ? "primary" : "info"}
            >
              Regionals
            </Button>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button
              sx={{ fontWeight: "800", mx: 1 }}
              color={asPath.includes("contact") ? "primary" : "info"}
            >
              Contact
            </Button>
          </NextLink>
          <NextLink href="/faqs" passHref>
            <Button
              sx={{ fontWeight: "800", mx: 1 }}
              color={asPath.includes("faqs") ? "primary" : "info"}
            >
              FAQS{" "}
            </Button>
          </NextLink>
        </Box>
        <Box flex={1} sx={{ display: isMobile ? "none" : "auto" }} />

        <IconButton
          onClick={() => push("/cart")}
          sx={{ backgroundColor: "white", display: isMobile ? "none" : "auto" }}
        >
          <Badge
            badgeContent={numberOfItems > 9 ? "+9" : numberOfItems}
            color="secondary"
          >
            <ShoppingCartOutlined sx={{ color: "#09446a" }} />
          </Badge>
        </IconButton>
        <Button
          sx={{ display: isMobile ? "auto" : "none" }}
          onClick={toggleSideMenu}
        >
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
