import NextLink from "next/link";

import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import { ShopLayout } from "@/components/Layout";

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Cart empty"
      pageDescription="No hay artículos en el carrito de compras"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
      </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <NextLink href="/" passHref>
            <Button color="secondary">Back</Button>
          </NextLink>
        </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
