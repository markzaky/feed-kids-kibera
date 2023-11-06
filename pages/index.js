import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Home = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <>
      <Head>
        <title>Feed Kids Kibera</title>
        <meta
          name="description"
          content="Feed Kids Kibera The initiative in Kibera aims to provide nutritious lunches and refreshments to children following their practice football matches."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id="Projects"
        pretitle="Our Projects"
        title="We Help Around the local community "
      >
        The initiative in Kibera aims to provide nutritious lunches and
        refreshments to children following their practice football matches.
      </SectionTitle>
      <Benefits data={benefitTwo} />
      <Benefits imgPos="right" data={benefitOne} />
      {/* <SectionTitle
        id="About Us"
        pretitle="About Us"
        title="Who are we and what do we do?"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      {/* <SectionTitle
        id="Testimonials"
        pretitle="Testimonials"
        title="Here's what our people say"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle
        id="FAQ"
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
