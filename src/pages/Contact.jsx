import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../style/Contact.scss";

import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { Helmet } from "react-helmet";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const getDate = new Date();

    const date = getDate.toDateString();

    formDatab.append("date", date);
    formDatab.append("type", "contact_form");

    fetch(
      "https://script.google.com/macros/s/AKfycbwrcOHLX9NYEirRvmOFbDLJASmYCvilxhbi_1wxoFiSzrwehSZgznYn3coW4gUWDfM_ZQ/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsSubmitting(false); // Reset submitting state
        toast.success("Form submitted successfully");
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false); // Reset submitting state even on error
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Helmet>
        <title>
          {" "}
          Contact Wave Solution | Digital Growth Agency in Pune, India{" "}
        </title>{" "}
        <meta
          name="description"
          content="We respond to every enquiry within one working day. Reach Wave Solution in Pune, India via WhatsApp, phone, email or by booking a free 30-minute call."
        />{" "}
        <meta
          name="keywords"
          content="Contact Wave Solution, Wave Solution phone number, Wave Solution email, Wave Solution Pune address, digital marketing agency contact Pune, book a call digital agency Pune, WhatsApp digital agency Pune"
        />{" "}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />{" "}
        <meta name="author" content="Wave Solution" />{" "}
        <meta name="language" content="English" />{" "}
        <link rel="canonical" href="https://wavesolution.com/contact" />{" "}
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
          content="Contact Wave Solution | Digital Growth Agency in Pune, India"
        />{" "}
        <meta
          property="og:description"
          content="We respond to every enquiry within one working day. Reach Wave Solution via WhatsApp, phone, email or a free 30-minute call."
        />{" "}
        <meta property="og:url" content="https://wavesolution.com/contact" />{" "}
        <meta
          property="og:image"
          content="https://wavesolution.com/og-image.jpg"
        />{" "}
        <meta
          property="og:image:alt"
          content="Contact Wave Solution — Pune, India"
        />{" "}
        <meta property="og:locale" content="en_IN" />{" "}
        {/* =========================          TWITTER / X      ========================== */}{" "}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta
          name="twitter:title"
          content="Contact Wave Solution | Digital Growth Agency in Pune, India"
        />{" "}
        <meta
          name="twitter:description"
          content="Reach Wave Solution via WhatsApp, phone, email or book a free 30-minute call. We respond within one working day."
        />{" "}
        <meta
          name="twitter:image"
          content="https://wavesolution.com/og-image.jpg"
        />{" "}
        <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />{" "}
        <meta name="twitter:site" content="@WaveSolution" />{" "}
        {/* =========================          STRUCTURED DATA      ========================== */}{" "}
        <script type="application/ld+json"> </script>
      </Helmet>
      <section className="contact_parent parent">
        <div className="contact_cont cont">
          <div className="contact_heading">
            <span className="contact_tag">
              <i></i>
              GET IN TOUCH
            </span>

            <h2>
              Let’s build something
              <br />
              that helps
              <em> your business grow.</em>
            </h2>

            <p>
              We respond to every enquiry within one working day. If we’re not
              the right team for your project, we’ll be honest about it and
              point you in the right direction.
            </p>
          </div>

          <div className="contact_grid">
            <div className="contact_left">
              <h3>
                The fastest ways
                <em> to reach us.</em>
              </h3>

              <a href="https://wa.me/919096915795" className="contact_method">
                <div className="method_icon">
                  <FaWhatsapp />
                </div>

                <div className="method_text">
                  <strong>WhatsApp</strong>

                  <span>Fastest response · Usually within the hour</span>
                </div>
              </a>

              <a href="tel:+919096915795" className="contact_method">
                <div className="method_icon">
                  <FaPhoneAlt />
                </div>

                <div className="method_text">
                  <strong>+91 90969 15795</strong>

                  <span>Mon–Sat · 10:00 AM–7:00 PM IST</span>
                </div>
              </a>

              <a
                href="mailto:contact@wavesolutions.in"
                className="contact_method"
              >
                <div className="method_icon">
                  <FaEnvelope />
                </div>

                <div className="method_text">
                  <strong>contact@wavesolutions.in</strong>

                  <span>Best for proposals & detailed project briefs</span>
                </div>
              </a>

              <a href="#" className="contact_method">
                <div className="method_icon">
                  <FaCalendarAlt />
                </div>

                <div className="method_text">
                  <strong>Book a call</strong>

                  <span>Free · No pressure · No obligation</span>
                </div>
              </a>

              <div className="location_card">
                <span className="location_title">WHERE WE ARE</span>

                <div className="location_item">
                  <FaMapMarkerAlt />

                  <p>Pune, Maharashtra, India</p>
                </div>

                <div className="location_item">
                  <FaPaperPlane />

                  <p>
                    Serving clients across India, Australia, the US and the UK
                  </p>
                </div>

                <div className="location_item">
                  <FaCheck />

                  <p>
                    Digital solutions built for businesses that want to grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact_form_card">
              <div className="form_heading">
                <h3>Send us a brief</h3>

                <p>Tell us a little about your project.</p>
              </div>

              <form onSubmit={Submit}>
                <div className="form_row">
                  <div className="form_group">
                    <label>
                      Your name <span>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                    />
                  </div>

                  <div className="form_group">
                    <label>Email</label>

                    <input
                      type="email"
                      placeholder="you@company.com"
                      name="email"
                      id="email"
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
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>

                  <div className="form_group">
                    <label>Company or brand</label>

                    <input
                      type="text"
                      placeholder="Your brand"
                      name="brand"
                      id="brand"
                    />
                  </div>
                </div>

                <div className="form_group">
                  <label>What are you interested in?</label>

                  <select defaultValue="" name="interest" id="interest">
                    <option value="" disabled>
                      Not sure yet — help me choose
                    </option>

                    <option>Website Development</option>

                    <option>Digital Marketing</option>

                    <option>SEO</option>

                    <option>Branding</option>

                    <option>Social Media</option>

                    <option>UI / UX Design</option>

                    <option>Software Development</option>

                    <option>Other</option>
                  </select>
                </div>

                <div className="form_group">
                  <label>What do you need?</label>

                  <textarea
                    rows="5"
                    placeholder="Tell us where you are now, what's not working, and what a good outcome looks like."
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit_btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <span>
                    <FaPaperPlane />
                  </span>
                </button>

                <p className="form_note">
                  Prefer to talk?{" "}
                  <a href="https://wa.me/919096915795">WhatsApp us</a> or book a
                  call. We never share your details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
