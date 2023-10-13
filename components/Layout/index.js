import Head from "next/head";
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { SideMenu } from "../UI/SideMenu";
import { useMediaQuery } from "@mui/material";

export const ShopLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/royerpwa.png" sizes="any" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Royer Store" />
        <link rel="apple-touch-icon" href="/royerpwa.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-startup-image" content="/royerpwa.png" />
        <meta name="apple-touch-fullscreen" content="yes" />

        <meta
          name="og:image"
          content={
            "https://raw.githubusercontent.com/jorgeochipinti97/royernew/main/public/logoroyer.jpg"
          }
        />
      </Head>
      {/* <nav>
        <Navbar isMobile={isMobile} />
      </nav> */}
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
