import { Helmet } from "react-helmet";
import "../style/Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <Helmet>
       <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">           </script>
    </Helmet>
      <section className="hero_parent parent">
        <div className="hero_cont cont">

          <div className="hero_left">

            <div className="hero_tag">
              <span></span>
              DIGITAL SOLUTIONS • INDIA
            </div>

            <h1>
              Build Your
              <br />
              <span>Digital</span>
              <br />
              Growth Engine.
            </h1>

            <p className="hero_desc">
              We run performance marketing, SEO, web design, and content for Indian brands going global —
              one team, one system, measurable growth every month.
            </p>

            <div className="hero_btns">
              <Link to="/contact" className="hero_btn">
                Contact
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/919096915795"
                target="_blank"
                rel="noopener noreferrer"
                className="hero_btn_outline"
              >
                Message us
                <span>↗</span>
              </a>
            </div>

          </div>


          <div className="hero_right">

            <div className="hero_glow"></div>

            <div className="hero_circle hero_circle_1"></div>
            <div className="hero_circle hero_circle_2"></div>

            <div className="hero_visual">

              <div className="hero_card">
                <div className="card_top">
                  <span className="card_dot"></span>
                  Wave Solution
                </div>

                <div className="card_main">
                  <small>Digital Growth</small>
                  <strong>+87%</strong>
                </div>

                <div className="card_lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="floating_box box_1">
                <span></span>
                Web Development
              </div>

              <div className="floating_box box_2">
                <span></span>
                Digital Solutions
              </div>

              <div className="floating_box box_3">
                <span></span>
                Growth +72%
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;