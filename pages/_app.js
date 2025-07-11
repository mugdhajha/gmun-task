import "../styles/globals.css";
import {ThemeProvider} from "next-themes";
import Head from "next/head";
import Header from "@/components/Header";
import Background from "@/components/Background";

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Global Model United Nations</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Background/>
        <Header />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
