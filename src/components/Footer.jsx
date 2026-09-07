import "../style/Footer.scss";
import logo from "../assets/wave1.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
    <Helmet>
      <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">           </script>
    </Helmet>
      <footer className="footer_parent parent">
        <div className="footer_cont cont">

          <div className="footer_top">

            <div className="footer_brand">

              <a href="/" className="footer_logo">
                <img src={logo} alt="Wave Solution" />
              </a>

              <p>
                We build modern digital solutions, websites and software
                that help businesses grow, perform and stand out.
              </p>

              <div className="footer_socials">
                <a href="https://www.instagram.com/wavesolutionsofficial/" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="https://www.linkedin.com/posts/wavesolutionscompany_digitalmarketing-digitalmarketingagency-socialmediamarketing-activity-7495822159852924928-Faoo?utm_source=share&utm_medium=member_android&rcm=ACoAADNToaQBMu5Zu4TCSqBD4ghpxVRr-Y5sM3Q" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>

                <a href="https://www.facebook.com/WaveSolutionsOfficial/" aria-label="Facebook">
                  <FaFacebookF />
                </a>
              </div>

            </div>


            <div className="footer_column">

              <h3>Company</h3>

              <ul>
                <li>
                  <a href="home">Home</a>
                </li>

                <li>
                  <a href="about">About</a>
                </li>

                <li>
                  <a href="services">Services</a>
                </li>

                <li>
                  <a href="work">Our Work</a>
                </li>

                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>

            </div>


            <div className="footer_column">

              <h3>Services</h3>

              <ul>
                <li>
                  <a href="services">Web Development</a>
                </li>

                <li>
                  <a href="#services">UI / UX Design</a>
                </li>

                <li>
                  <a href="#services">Software Development</a>
                </li>

                <li>
                  <a href="#services">Digital Solutions</a>
                </li>

                <li>
                  <a href="#services">Technology Consulting</a>
                </li>
              </ul>

            </div>


            <div className="footer_column footer_contact">

              <h3>Get in touch</h3>

              <a href="tel:+91 9096915795">
                +91 90969 15795
              </a>

              <a href="mailto: contact@wavesolutions.in">
                contact@wavesolutions.in
              </a>

              <p>
                India
              </p>

            </div>

          </div>

          <div className="footer_line"></div>


          <div className="footer_bottom">

            <p>
              © {new Date().getFullYear()} Wave Solution. All rights reserved.
            </p>

            <div className="footer_social">

              {/* <a href="https://www.instagram.com/wavesolutionsofficial/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/posts/wavesolutionscompany_digitalmarketing-digitalmarketingagency-socialmediamarketing-activity-7495822159852924928-Faoo?utm_source=share&utm_medium=member_android&rcm=ACoAADNToaQBMu5Zu4TCSqBD4ghpxVRr-Y5sM3Q" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="https://www.facebook.com/WaveSolutionsOfficial/" aria-label="Facebook">
              <FaFacebookF />
            </a> */}

              <Link to="/privacy" className="footer_privacy">
                Privacy Policy
              </Link>

              <Link to="/privacy" className="footer_privacy">
                Terms & Condition
              </Link>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;