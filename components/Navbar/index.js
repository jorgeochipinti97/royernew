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

import NextLink from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const { asPath, push } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push("/search");
  };
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref style={{ textDecoration: "none" }}>
          <Typography
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Royer <span style={{ fontWeight: "200" }}>|</span>{" "}
            <span style={{ fontWeight: "200" }}>Store</span>
          </Typography>
        </NextLink>

        <Box flex={1} />

        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
          className="fadeIn"
        >
          <NextLink href="/football" passHref>
            <Button color={asPath.includes("football") ? "primary" : "info"}>
              Football
            </Button>
          </NextLink>
          <NextLink href="/regionals" passHref>
            <Button color={asPath.includes("regionals") ? "primary" : "info"}>
              Regionals
            </Button>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button color={asPath.includes("contact") ? "primary" : "info"}>
              Contact
            </Button>
          </NextLink>
          <NextLink href="/faqs" passHref>
            <Button color={asPath.includes("faqs") ? "primary" : "info"}>
              FAQS{" "}
            </Button>
          </NextLink>
        </Box>
        <Box flex={1} />
        <Button>
          cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
