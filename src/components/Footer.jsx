import "../style/Footer.scss";
import logo from "../assets/wave1.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
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
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#services">Services</a>
                </li>

                <li>
                  <a href="#work">Our Work</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

            </div>


            <div className="footer_column">

              <h3>Services</h3>

              <ul>
                <li>
                  <a href="#services">Web Development</a>
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