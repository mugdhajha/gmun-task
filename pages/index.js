import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Events from "@/components/Events";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true); // wait for client-side rendering
  }, []);

  if (!mounted) return null; // Avoid mismatched theme during SSR

  return (
    <>
      <Head>
        <title>Global Model United Nations</title>
        <meta
          name="description"
          content="Where Future Diplomats Rise to Tackle the Challenges of a Changing World"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gmun-logo.png" />
      </Head>

      <div className={theme === "dark" ? "dark" : "light"}>
        <Hero />
        <Overview />
        <Events />
        <Testimonies />
        <Footer />
      </div>
    </>
  );
}

