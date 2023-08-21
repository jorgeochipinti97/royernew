import Head from "next/head";
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { SideMenu } from "../UI/SideMenu";
import { useMediaQuery } from "@mui/material";

export const ShopLayout = ({ children, title, pageDescription }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <link rel="icon" href="/logoroyer.jpg" sizes="any" />

        {/* {imageFullUrl && <meta name="og:image" content={imageFullUrl} />} */}
      </Head>
      <nav>
        <Navbar isMobile={isMobile} />
      </nav>
      <SideMenu />
      <main
        style={{
          minHeight: "60vh",
          maxWidth: "100vw",
          padding: "0px 0px",
        }}
      >
        {children}
      </main>

      {/* <Footer /> */}
      {/* <Footer /> */}
    </>
  );
};
