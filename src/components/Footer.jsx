import "../style/Footer.scss";
import logo from "../assets/wave1.png";

const Footer = () => {
  return (
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

            <a href="#contact" className="footer_cta">
              Let's work together
              <span>→</span>
            </a>

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

            <a href="tel:+918459188254">
              +91 84591 88254
            </a>

            <a href="mailto:info@wavesolution.com">
              info@wavesolution.com
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

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;