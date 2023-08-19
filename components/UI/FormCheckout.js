import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CartContext } from "@/context/cart/CartContext";
import { countries } from "@/utils/countries";
import { CheckoutPage } from "./checkoutComponent";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Elastic, gsap, Power4, Power1, Back } from "gsap";

export const FormCheckout = ({ total }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [isSend, setIsSend] = useState(false);
  const [orderid_, setOrderId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [total_, setTotal_] = useState();
  const { createOrder, updateAddress } = useContext(CartContext);

  const onCreateOrder = async () => {
    try {
      const data = await createOrder();
      setOrderId(data.data.data._id);
      setTotal_(data.data.data.total);
      setIsSend(true);
    } catch (er) {
      console.log(er);
    }
  };

  const onSubmitAddress = async () => {
    try {
      updateAddress({
        name,
        lastName,
        taxId,
        address,
        zipCode,
        phone,
        country,
        city,
        email,
      });

      await onCreateOrder();
    } catch (er) {
      console.log(er);
    }
  };
  useEffect(() => {
    isSend &&
      gsap.to(".formContainerr", {
        opacity: 0,
        duration: 1,
      });
    isSend &&
      gsap.to(".formContainerr", {
        display: "none",
        delay: 1,
      });
    isSend &&
      gsap.to(".checkoutcontainer", {
        display: "flex",
      });
    isSend &&
      gsap.to(".checkoutcontainer", {
        opacity: 1,
        delay: 1,
      });
  }, [isSend]);
  return (
    <>
      <form className="formContainerr">
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="filled"
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              variant="filled"
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="demo-simple-select-standard-label">
              Select a country
            </InputLabel>

            <Select
              variant="filled"
              onChange={(e) => setCountry(e.target.value)}
              sx={{ width: "100%" }}
            >
              {countries.map((e) => (
                <MenuItem key={e.name} value={e.name}>
                  {e.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Zip code"
              variant="filled"
              fullWidth
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              variant="filled"
              fullWidth
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Tax ID"
              variant="filled"
              fullWidth
              onChange={(e) => setTaxId(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              variant="filled"
              fullWidth
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            onClick={onSubmitAddress}
          >
            Send
          </Button>
        </Box>
      </form>

      <Box
        display="flex"
        justifyContent="center"
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          className="checkoutcontainer"
          sx={{
            display: "none",
            opacity: 0,

            justifyContent: "center",
          }}
        >
          <CheckoutPage price={total_} orderid={orderid_} />
        </Box>
      </Box>
    </>
  );
};
