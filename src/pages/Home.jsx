import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Solutions from "../components/Solutions.jsx";
import HowItFits from "../components/HowItFits.jsx";
import WhyBrands from "../components/WhyBrands.jsx";
import Process from "../components/Process.jsx";
import Clients from "../components/Clients.jsx";
import Faq from "../components/Faq.jsx";
import Book from "../components/Book.jsx";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";

function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wave Solution",
    url: "https://wavesolutions.in/",
    description:
      "Wave Solution provides performance marketing, SEO, web design, web development and digital growth solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <Helmet>
        {/* =========================
          PRIMARY SEO
      ========================== */}
        <title>
          India Wave Solution | Digital Growth Engine — Performance Marketing,
          SEO & Web Design in Pune,
        </title>
        <meta
          name="description"
          content="Wave Solution runs performance marketing, SEO, web design and content for Indian 
brands going global — one team, one system, measurable growth every month."
        />
        <meta
          name="keywords"
          content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital 
marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web 
design agency Pune, web development company Pune, Shopify development agency India, branding 
agency Pune, brand strategy agency India, social media management agency India, digital growth 
agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian 
brands going global, D2C marketing agency India, performance marketing agency Pune, content 
marketing agency Pune, growth marketing agency India"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content="Wave Solution" />
        <link rel="canonical" href="https://wavesolutions.in/" />
        {/* =========================
          LOCAL SEO
      ========================== */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />
        {/* =========================
          OPEN GRAPH
      ========================== */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wave Solution" />
        <meta
          property="og:title"
          content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design 
in Pune, India"
        />
        <meta
          property="og:description"
          content="Performance marketing, SEO, web design and content for Indian brands going 
global. One team, one system, measurable growth every month."
        />
        <meta property="og:url" content="https://wavesolutions.in/" />
        <meta
          property="og:image"
          content="https://wavesolutions.in/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Wave Solution — Digital Growth Engine, Pune, 
India"
        />
        <meta property="og:locale" content="en_IN" />
        {/* =========================
          TWITTER / X
      ========================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"
        />
        <meta
          name="twitter:description"
          content="Performance marketing, SEO, web design and content for Indian brands going 
global. One team, one system, measurable growth every month."
        />
        <meta
          name="twitter:image"
          content="https://wavesolutions.in/og-image.jpg"
        />
        <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />
        <meta name="twitter:site" content="@WaveSolution" />
        {/* =========================
          STRUCTURED DATA
      ========================== */}
        <script type="application/ld+json">
          {JSON.stringify(homePageSchema)}
        </script>
      </Helmet>

      <Hero />
      <Solutions />
      <HowItFits />
      <WhyBrands />
      <Process />
      <Faq />
      <Book />
      <Clients />
    </>
  );
}

export default Home;
