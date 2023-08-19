import { ShopLayout } from "@/components/Layout";
import { SocialComponent } from "@/components/UI/SocialComponent";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";


const ContactPage = () => {
  const [email_, setEmail_] = useState("")
  const [name_, setName_] = useState("")
  const [query_, setQuery_] = useState("")

  const handleClickQuery = async (name, email, query, product, e) => {
    try {
      e.preventDefault();
      const emailQuerys = {
        name,
        email,
        consulta: query,
        product,
      };
      let response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(emailQuerys),
      });

      alert("Message sent");
    } catch (err) {
      alert("please write a correct email please");
      console.log(err);
    }
  };

  return (
    <>
      <ShopLayout title="contact">
        <Box sx={{my:15}}>
          <div data-aos="zoom-in-down">
            <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
              <Typography variant="h6">Any questions ? Contact us!</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box
                display="flex"
                justifyContent="space-around"
                flexDirection="column"
              >
                <TextField
                  label="name"
                  variant="filled"
                  sx={{ m: 1, width: 250 }}
                  onChange={(e) => setName_(e.target.value)}
                />
                <TextField
                  label="email"
                  variant="filled"
                  sx={{ m: 1, width: 250 }}
                  onChange={(e) => setEmail_(e.target.value)}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
              <TextField
                label="question"
                variant="filled"
                multiline
                rows={4}
                sx={{ width: 300 }}
                onChange={(e) => setQuery_(e.target.value)}
              />
            </Box>
            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <Button
                color="secondary"
                size="large"
                onClick={(e) =>
                  handleClickQuery(name_, email_, query_, product_, e)
                }
              >
                Send
              </Button>
            </Box>
          </div>
<Box sx={{mt:5}}>
          <SocialComponent sizeFont={"32px"} />
</Box>
        </Box>
      </ShopLayout>
    </>
  );
};

export default ContactPage;
