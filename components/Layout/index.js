import Head from "next/head";
import Navbar from "../Navbar";
import { Footer } from "../Footer";

export const ShopLayout = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        {/* {imageFullUrl && <meta name="og:image" content={imageFullUrl} />} */}
      </Head>
      <nav>
        <Navbar />
      </nav>
      {/* <SideMenu /> */}
      <main
        style={{
          minHeight: "60vh",
          maxWidth: "100vw",
          padding: "0px 0px",
        }}
      >
        {children}
      </main>

      <Footer />
      {/* <Footer /> */}
    </>
  );
};
