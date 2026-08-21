import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import "../style/Contact.scss";

import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";



function Contact() {
    return (
        <>
            <section className="contact_parent parent">
                <div className="contact_cont cont">


                    <div className="contact_heading">

                        <span className="contact_tag">
                            <i></i>
                            GET IN TOUCH
                        </span>

                        <h2>
                            Tell us where
                            <br />
                            you want to
                            <em> grow.</em>
                        </h2>

                        <p>
                            We reply to everything within one working day.
                            If we're not the right team for what you need,
                            we'll say so and point you somewhere better.
                        </p>

                    </div>

                    <div className="contact_grid">

                        <div className="contact_left">

                            <h3>
                                Fastest ways
                                <em> to reach us.</em>
                            </h3>

                            <a
                                href="https://wa.me/"
                                className="contact_method"
                            >

                                <div className="method_icon">
                                    <FaWhatsapp />
                                </div>

                                <div className="method_text">
                                    <strong>WhatsApp</strong>

                                    <span>
                                        Fastest reply · usually within the hour
                                    </span>
                                </div>

                            </a>


                            <a
                                href="tel:+910000000000"
                                className="contact_method"
                            >

                                <div className="method_icon">
                                    <FaPhoneAlt />
                                </div>

                                <div className="method_text">
                                    <strong>+91 00000 00000</strong>

                                    <span>
                                        Mon–Sat · 10am–7pm IST
                                    </span>
                                </div>

                            </a>

                            <a
                                href="mailto:hello@wavesolutions.com"
                                className="contact_method"
                            >

                                <div className="method_icon">
                                    <FaEnvelope />
                                </div>

                                <div className="method_text">
                                    <strong>
                                        hello@wavesolutions.com
                                    </strong>

                                    <span>
                                        For proposals and detailed briefs
                                    </span>
                                </div>

                            </a>

                            <a
                                href="#"
                                className="contact_method"
                            >

                                <div className="method_icon">
                                    <FaCalendarAlt />
                                </div>

                                <div className="method_text">
                                    <strong>
                                        Book a call
                                    </strong>

                                    <span>
                                        Free · no pressure
                                    </span>
                                </div>

                            </a>

                            <div className="location_card">

                                <span className="location_title">
                                    WHERE WE ARE
                                </span>

                                <div className="location_item">

                                    <FaMapMarkerAlt />

                                    <p>
                                        Pune, Maharashtra, India
                                    </p>

                                </div>

                                <div className="location_item">

                                    <FaPaperPlane />

                                    <p>
                                        Serving clients across India,
                                        Australia, the US and the UK
                                    </p>

                                </div>

                                <div className="location_item">

                                    <FaCheck />

                                    <p>
                                        Digital solutions built for growth
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="contact_form_card">

                            <div className="form_heading">

                                <h3>
                                    Send us a brief
                                </h3>

                                <p>
                                    The more detail you give, the more useful
                                    our first reply will be.
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

                                        <label>
                                            Company or brand
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Your brand"
                                        />

                                    </div>

                                </div>

                                <div className="form_group">

                                    <label>
                                        What are you interested in?
                                    </label>

                                    <select defaultValue="">

                                        <option value="" disabled>
                                            Not sure yet — help me choose
                                        </option>

                                        <option>
                                            Website Development
                                        </option>

                                        <option>
                                            Digital Marketing
                                        </option>

                                        <option>
                                            SEO
                                        </option>

                                        <option>
                                            Branding
                                        </option>

                                        <option>
                                            Social Media
                                        </option>

                                    </select>

                                </div>

                                {/* <div className="form_group">

                                    <label>
                                        Rough monthly budget
                                    </label>

                                    <select defaultValue="">

                                        <option value="" disabled>
                                            Select your budget
                                        </option>

                                        <option>
                                            Under ₹25,000 / month
                                        </option>

                                        <option>
                                            ₹25,000 – ₹50,000 / month
                                        </option>

                                        <option>
                                            ₹50,000 – ₹1,00,000 / month
                                        </option>

                                        <option>
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


                                <button
                                    type="submit"
                                    className="submit_btn"
                                >

                                    Send enquiry

                                    <span>
                                        <FaPaperPlane />
                                    </span>

                                </button>


                                <p className="form_note">
                                    Prefer to talk?{" "}
                                    <a href="https://wa.me/">
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
}

export default Contact;