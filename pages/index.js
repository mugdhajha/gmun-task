import Head from "next/head";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Events from "@/components/Events";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";

export default function Home(){
  return(
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
        <Hero/>
        <Overview/>
        <Events/>
        <Testimonies/>
        <Footer/>
        </>
  )
}

