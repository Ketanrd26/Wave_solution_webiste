import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../style/About.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import aboutimg from "../assets/why-exist.png";

function About() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://wavesolutions.in/about#aboutpage",
        url: "https://wavesolutions.in/about",
        name: "About Wave Solution | Digital Growth Agency Founded in Pune, 2025",
        description:
          "Learn about Wave Solution, a Pune-based digital growth agency founded in 2025 by Ketan Dudka and Rishabh Khade, serving 30+ brands across India and worldwide.",
        isPartOf: {
          "@id": "https://wavesolutions.in/#website",
        },
        about: {
          "@id": "https://wavesolutions.in/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://wavesolutions.in/#organization",
        name: "Wave Solution",
        alternateName: "Wave Solutions",
        url: "https://wavesolutions.in/",
        telephone: "+91-90969-15795",
        email: "contact@wavesolutions.in",
        image: "https://wavesolutions.in/og-image.jpg",
        description:
          "Wave Solution is a digital growth agency in Pune, India offering performance marketing, SEO and AI search, web design and development, Shopify development, social media management, branding, brand strategy, AI reels, UGC and creative solutions.",
        foundingDate: "2025",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5204,
          longitude: 73.8567,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Country",
            name: "United Kingdom",
          },
        ],
        knowsAbout: [
          "Performance Marketing",
          "SEO and AI Search",
          "Web Design and Development",
          "Shopify Development",
          "Social Media Management",
          "Branding",
          "Brand Strategy",
          "AI Reels and UGC",
          "Creative Solutions",
        ],
        founder: [
          {
            "@id": "https://wavesolutions.in/#ketan-dudka",
          },
          {
            "@id": "https://wavesolutions.in/#rishabh-khade",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": "https://wavesolutions.in/#ketan-dudka",
        name: "Ketan Dudka",
        jobTitle: "Founder",
        worksFor: {
          "@id": "https://wavesolutions.in/#organization",
        },
        description:
          "Ketan Dudka is the founder of Wave Solution, a digital growth agency based in Pune, India.",
      },
      {
        "@type": "Person",
        "@id": "https://wavesolutions.in/#rishabh-khade",
        name: "Rishabh Khade",
        jobTitle: "Co-Founder",
        worksFor: {
          "@id": "https://wavesolutions.in/#organization",
        },
        description:
          "Rishabh Khade is the co-founder of Wave Solution, a digital growth agency based in Pune, India.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          {" "}
          About Wave Solution | Digital Growth Agency Founded in Pune, 2025{" "}
        </title>{" "}
        <meta
          name="description"
          content="Wave Solution was founded in Pune in 2025 on the belief that businesses deserve real strategy, real execution and real growth — not templates or guesswork. Meet the founders."
        />{" "}
        <meta
          name="keywords"
          content="About Wave Solution, Wave Solution founders, Wave Solution Pune, Wave Solution digital agency, Ketan Dudka Wave Solution, Rishabh Khade Wave Solution, digital growth agency Pune, performance marketing agency Pune founders, digital agency founded 2025 Pune, digital marketing agency India about us"
        />{" "}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />{" "}
        <meta name="author" content="Wave Solution" />{" "}
        <meta name="language" content="English" />{" "}
        <link rel="canonical" href="https://wavesolutions.in/about" />{" "}
        {/* =========================          LOCAL / GEO SEO      ========================== */}{" "}
        <meta name="geo.region" content="IN-MH" />{" "}
        <meta name="geo.placename" content="Pune, Maharashtra, India" />{" "}
        <meta name="geo.position" content="18.5204;73.8567" />{" "}
        <meta name="ICBM" content="18.5204, 73.8567" />{" "}
        {/* =========================          OPEN GRAPH      ========================== */}{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:site_name" content="Wave Solution" />{" "}
        <meta
          property="og:title"
          content="About Wave Solution | Digital Growth Agency Founded in Pune, 2025"
        />{" "}
        <meta
          property="og:description"
          content="Founded in Pune in 2025 by Ketan Dudka and Rishabh Khade, Wave Solution has grown 30+ brands across India and worldwide through real strategy and execution."
        />{" "}
        <meta property="og:url" content="https://wavesolutions.in/about" />{" "}
        <meta
          property="og:image"
          content="https://wavesolutions.in/og-image.jpg"
        />{" "}
        <meta
          property="og:image:alt"
          content="Wave Solution — About the Pune-based digital growth agency"
        />{" "}
        <meta property="og:locale" content="en_IN" />{" "}
        {/* =========================          TWITTER / X      ========================== */}{" "}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta
          name="twitter:title"
          content="About Wave Solution | Digital Growth Agency Founded in Pune, 2025"
        />{" "}
        <meta
          name="twitter:description"
          content="Meet Ketan Dudka and Rishabh Khade, the founders of Wave Solution, a Pune-based digital growth agency serving 30+ brands across India and worldwide."
        />{" "}
        <meta
          name="twitter:image"
          content="https://wavesolutions.in/og-image.jpg"
        />{" "}
        <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />{" "}
        <meta name="twitter:site" content="@WaveSolution" />{" "}
        {/* =========================          STRUCTURED DATA      ========================== */}{" "}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        
         </script>
      </Helmet>

      <section className="story_parent parent">
        <div className="story_cont cont">
          <div className="story_heading">
            <div className="story_tag">
              <span></span>
              OUR STORY
            </div>

            <h2>
              Built on results.
              <br />
              Driven by <em>creativity.</em>
              <br />
              Rooted in Pune.
            </h2>

            <p>
              Wave Solution was founded on one belief — that businesses deserve
              world-class digital solutions. Not templates. Not guesswork. Real
              strategy, real execution, real growth.
            </p>
          </div>

          <div className="story_details">
            <div className="story_item">
              <span>FOUNDED</span>
              <strong>2025</strong>
            </div>

            <div className="story_item">
              <span>HEADQUARTERS</span>
              <strong>Pune, India</strong>
            </div>

            <div className="story_item">
              <span>MARKETS</span>
              <strong>
                India &amp;
                <br />
                Worldwide
              </strong>
            </div>

            <div className="story_item">
              <span>CLIENTS SERVED</span>
              <strong>30+ Brands</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="why_exist_parent parent">
        <div className="why_exist_cont cont">
          {/* CHANGE: Left image column */}
          <div className="why_exist_image">
            <img src={aboutimg} alt="Why Wave Solution exists" />
          </div>

          <div className="why_exist_content">
            <div className="why_exist_tag">
              <span></span>
              WHY WE EXIST
            </div>

            <h2>
              We Build Digital Solutions
              <br />
              That Help Businesses <em>Grow.</em>
            </h2>

            <p>
              We started Wave Solution because too many businesses were paying
              for websites and campaigns that looked good but didn't move the
              needle. Every project we take on is judged by one thing: whether
              it actually grows the business behind it.
            </p>

            <p>
              We work with businesses across India and internationally, creating
              digital experiences that are built around their goals, customers
              and long-term growth.
            </p>

            <p>
              Technology should not just look good. It should move your business
              forward.
            </p>
          </div>
        </div>
      </section>

      <section className="founders_parent parent">
        <div className="founders_cont cont">
          <div className="founders_glow founders_glow_one"></div>
          <div className="founders_glow founders_glow_two"></div>

          <div className="founders_heading">
            <div className="founders_tag">
              <span></span>
              THE FOUNDERS
            </div>

            <h2>
              The people behind
              <span> every campaign.</span>
            </h2>

            <p>
              Two founders. One shared obsession with building brands that
              actually work.
            </p>
          </div>

          <div className="founders_cards">
            <div className="founder_card">
              <div className="founder_top">
                <div className="founder_avatar founder_avatar_orange">K</div>

                <div className="founder_name">
                  <h3>Ketan Dudka</h3>

                  <p>Founder · Vision & Strategy</p>
                </div>
              </div>

              <div className="founder_body">
                <p>
                  The visionary behind Wave Solutions, Ketan leads the company’s
                  overall direction,
                  <strong> business strategy and long-term growth </strong>—
                  building strong foundations and turning ambitious ideas into
                  scalable opportunities.
                </p>

                <div className="founder_tags">
                  <span>Brand Strategy</span>
                  <span>Leadership</span>
                  <span>Brand Vision</span>
                  <span>Growth</span>
                </div>

                <div className="founder_social">
                  <a href="#" aria-label="LinkedIn">
                    in
                  </a>

                  {/* <a href="#" aria-label="WhatsApp">
                                        WA
                                    </a> */}
                </div>
              </div>
            </div>

            <div className="founder_card">
              <div className="founder_top">
                <div className="founder_avatar founder_avatar_gold">R</div>

                <div className="founder_name">
                  <h3>Rishabh Khade</h3>

                  <p>Co-Founder · Technology & Digital Growth</p>
                </div>
              </div>

              <div className="founder_body">
                <p>
                  The digital and technology-driven force behind Wave Solutions,
                  Rishabh leads
                  <strong>
                    {" "}
                    web development, digital marketing, brand growth and digital
                    strategy{" "}
                  </strong>
                  — connecting creativity with technology to build impactful
                  digital experiences.
                </p>

                <div className="founder_tags">
                  <span>Web Development</span>
                  <span>Digital Marketing</span>
                  <span>SEO</span>
                  <span>Digital Strategy</span>
                </div>

                <div className="founder_social">
                  <a
                    href="https://www.linkedin.com/in/rishabh-khade-8a71a632a/"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>

                  {/* <a href="#" aria-label="WhatsApp">
                                        WA
                                    </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work_parent parent">
        <div className="work_cont cont">
          <div className="work_heading">
            <span className="work_tag">
              <span></span>
              WHO WE WORK WITH
            </span>

            <h2>
              Built For Every Industry That
              <em>Wants To Grow.</em>
            </h2>

            <p className="work-description">
              Eight-plus industries, same rigour in every one. The tactics
              change; the standard doesn't
            </p>
          </div>

          <div className="work_industries">
            <div className="work_card">
              <div className="work_icon">🛒</div>
              <h3>FMCG & D2C</h3>
              <p>Consumer goods, food, personal care</p>
            </div>

            <div className="work_card">
              <div className="work_icon">✦</div>
              <h3>Healthcare</h3>
              <p>Clinics, doctors, wellness brands</p>
            </div>

            <div className="work_card ">
              <div className="work_icon">◎</div>
              <h3>Real Estate</h3>
              <p>Residential, commercial, luxury</p>
            </div>

            <div className="work_card">
              <div className="work_icon">&lt;&gt;</div>
              <h3>EdTech & Education</h3>
              <p>Institutes, online courses, coaching</p>
            </div>

            <div className="work_card">
              <div className="work_icon">✧</div>
              <h3>Lifestyle & Fashion</h3>
              <p>Apparel, beauty, home décor</p>
            </div>

            <div className="work_card">
              <div className="work_icon">♧</div>
              <h3>Hospitality</h3>
              <p>Hotels, restaurants, events</p>
            </div>

            <div className="work_card">
              <div className="work_icon">▥</div>
              <h3>Finance & Fintech</h3>
              <p>Investment, insurance, payments</p>
            </div>

            <div className="work_card">
              <div className="work_icon">⌁</div>
              <h3>International Brands</h3>
              <p>Global brands entering India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work_us_parent parent">
        <div className="work_us_cont cont">
          {/* <span className="work_us_tag">
                        <span className="work_us_dot"></span>
                        WORK WITH US
                    </span> */}

          <h2>
            We’d rather show
            <br />
            you than <em>tell you.</em>
          </h2>

          <p>
            Thirty minutes, no deck. We'll look at what you're running and tell
            you honestly whether we're the right team for it.
          </p>

          <div className="work_us_buttons">
            <Link to="/casestudy" className="work_us_btn_secondary">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
