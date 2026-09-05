import { Helmet } from "react-helmet";
import "../style/Book.scss";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Book = () => {
  return (
    <>
    <Helmet>
      <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">              </script>
    </Helmet>
      <section className="book_parent parent">
        <div className="book_cont cont">


          <div className="book_left">

            <div className="book_tag">
              <span></span>
              BOOK A CALL
            </div>

            <h2>
              Tell Us What
              <br />
              You Need.
              <br />
              <em>We’ll Be Straight With You.</em>
            </h2>

            <p className="book_desc">
              Tell us about your business and what you're looking to build.
              We'll understand your requirements, suggest the right solution,
              and help you take the next step.
            </p>



            <div className="book_contacts">

              <a href="https://wa.me/919096915795" className="contact_card">
                <div className="contact_icon">
                  <FaWhatsapp />
                </div>

                <div className="contact_content">
                  <strong>WhatsApp</strong>
                  <small>Fastest reply · Usually within the hour</small>
                </div>
              </a>


              <a href="tel:+919096915795" className="contact_card">
                <div className="contact_icon">
                  <FaPhoneAlt />
                </div>

                <div className="contact_content">
                  <strong>+91 90969 15795</strong>
                  <small>Mon–Sat · 10am–7pm IST</small>
                </div>
              </a>


              <a href="mailto:info@wavesolution.com" className="contact_card">
                <div className="contact_icon">
                  <FaEnvelope />
                </div>

                <div className="contact_content">
                  <strong>info@wavesolution.com</strong>
                  <small>For proposals and detailed briefs</small>
                </div>
              </a>

            </div>

          </div>


          <div className="book_right">

            <div className="book_form">

              <div className="form_heading">
                <h3>Send us a brief</h3>

                <p>
                  The more detail you give, the more useful our first reply
                  will be.
                </p>
              </div>


              <form>


                <div className="form_row">

                  <div className="form_group">
                    <label>
                      Your name <span>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                    />
                  </div>


                  <div className="form_group">
                    <label>
                      Email <span>*</span>
                    </label>

                    <input
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>

                </div>



                <div className="form_row">

                  <div className="form_group">
                    <label>
                      Phone / WhatsApp <span>*</span>
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 90000 00000"
                    />
                  </div>


                  <div className="form_group">
                    <label>Company or brand</label>

                    <input
                      type="text"
                      placeholder="Your brand"
                    />
                  </div>

                </div>



                <div className="form_group">

                  <label>What are you interested in?</label>

                  <select defaultValue="">
                    <option value="" disabled>
                      Not sure yet — help me choose
                    </option>

                    <option value="website">
                      Website Development
                    </option>

                    <option value="software">
                      Software Development
                    </option>

                    <option value="design">
                      UI/UX Design
                    </option>

                    <option value="digital">
                      Digital Solutions
                    </option>
                  </select>

                </div>



                {/* <div className="form_group">

                <label>Rough monthly budget</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select your budget
                  </option>

                  <option value="25000">
                    Under ₹25,000 / month
                  </option>

                  <option value="50000">
                    ₹25,000 – ₹50,000 / month
                  </option>

                  <option value="100000">
                    ₹50,000 – ₹1,00,000 / month
                  </option>

                  <option value="100000+">
                    ₹1,00,000+ / month
                  </option>

                </select>

              </div> */}



                <div className="form_group">

                  <label>
                    What do you need? <span>*</span>
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us where you are now, what's not working, and what a good outcome looks like."
                  ></textarea>

                </div>


                <button type="submit" className="book_submit">
                  Send enquiry
                  <span>→</span>
                </button>


                <p className="form_note">
                  Prefer to talk?{" "}
                  <a href="https://wa.me/919096915795">
                    WhatsApp us
                  </a>{" "}
                  or book a call. We never share your details.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Book;