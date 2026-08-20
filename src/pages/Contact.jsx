import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import "../style/Contact.scss";

import { FiMessageCircle } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";


function Contact() {
    return (
        <>
            <section className="tell_parent parent">
                <div className="tell_cont cont">

                    <div className="tell_glow tell_glow_one"></div>
                    <div className="tell_glow tell_glow_two"></div>

                    <div className="tell_heading">

                        <span className="tell_badge">
                            <span></span>
                            GET IN TOUCH
                        </span>

                        <h2>
                            Tell us where
                            <br />
                            you want to <em>grow.</em>
                        </h2>

                        <p>
                            We reply to everything within one working day. If we're
                            not the right team for what you need, we'll say so and
                            point you somewhere better.
                        </p>

                    </div>

                    <div className="tell_content">

                        <div className="tell_left">

                            <h3>
                                Fastest ways <em>to reach us.</em>
                            </h3>

                            <div className="tell_contact_cards">

                                <a href="https://wa.me/919000000000" className="tell_contact_card">
                                    <div className="tell_icon">
                                        <FiMessageCircle />
                                    </div>

                                    <div>
                                        <strong>WhatsApp</strong>
                                        <span>Fastest reply - usually within the hour</span>
                                    </div>
                                </a>

                                <a href="tel:+919000000000" className="tell_contact_card">
                                    <div className="tell_icon">
                                        <FiPhone />
                                    </div>

                                    <div>
                                        <strong>+91 90000 00000</strong>
                                        <span>Mon-Sat · 10am-7pm IST</span>
                                    </div>
                                </a>

                                <a href="mailto:care@example.com" className="tell_contact_card">
                                    <div className="tell_icon">
                                        <FiMail />
                                    </div>

                                    <div>
                                        <strong>care@example.com</strong>
                                        <span>For proposals and detailed briefs</span>
                                    </div>
                                </a>

                                <a href="#book-call" className="tell_contact_card">
                                    <div className="tell_icon">
                                        <FiVideo />
                                    </div>

                                    <div>
                                        <strong>Book a 30-min call</strong>
                                        <span>Free · no deck, no pressure</span>
                                    </div>
                                </a>

                            </div>

                            <div className="tell_location">

                                <h4>WHERE WE ARE</h4>

                                <div className="tell_location_item">
                                    <FiMapPin />
                                    <span>Pune, Maharashtra, India</span>
                                </div>

                                <div className="tell_location_item">
                                    <FiCheck />
                                    <span>
                                        Serving clients across India, Australia,
                                        the US and the UK
                                    </span>
                                </div>

                                <div className="tell_location_item">
                                    <FiCheck />
                                    <span>Founded 2022 · nine services in-house</span>
                                </div>

                            </div>

                        </div>

                        <div className="tell_form_box">

                            <div className="tell_form_heading">
                                <h3>Send us a brief</h3>

                                <p>
                                    The more detail you give, the more useful our
                                    first reply will be.
                                </p>
                            </div>

                            <form>

                                <div className="tell_form_row">

                                    <div className="tell_field">
                                        <label>
                                            Your name <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="tell_field">
                                        <label>
                                            Email <span>*</span>
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                        />
                                    </div>

                                </div>

                                <div className="tell_form_row">

                                    <div className="tell_field">
                                        <label>
                                            Phone / WhatsApp <span>*</span>
                                        </label>

                                        <input
                                            type="tel"
                                            placeholder="+91 90000 00000"
                                        />
                                    </div>

                                    <div className="tell_field">
                                        <label>Company or brand</label>

                                        <input
                                            type="text"
                                            placeholder="Your brand"
                                        />
                                    </div>

                                </div>

                                <div className="tell_field">
                                    <label>What are you interested in?</label>

                                    <select defaultValue="">
                                        <option value="" disabled>
                                            Not sure yet — help me choose
                                        </option>
                                        <option>AI Reels & UGC</option>
                                        <option>Performance Marketing</option>
                                        <option>SEO & AI Search</option>
                                        <option>Social Media Management</option>
                                        <option>Web Design & Development</option>
                                        <option>Shopify Development</option>
                                        <option>Branding & Strategy</option>
                                    </select>
                                </div>

                                <div className="tell_field">
                                    <label>Rough monthly budget</label>

                                    <select defaultValue="">
                                        <option value="" disabled>
                                            Select your budget
                                        </option>
                                        <option>Under ₹25,000 / month</option>
                                        <option>₹25,000 - ₹50,000 / month</option>
                                        <option>₹50,000 - ₹1,00,000 / month</option>
                                        <option>₹1,00,000+ / month</option>
                                    </select>
                                </div>

                                <div className="tell_field">
                                    <label>
                                        What do you need? <span>*</span>
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Where you are now, what's not working, and what a good outcome looks like."
                                    ></textarea>
                                </div>

                                <button type="submit" className="tell_submit">
                                    <FiSend />
                                    Send enquiry
                                    <FiArrowRight />
                                </button>

                            </form>

                            <p className="tell_form_note">
                                Prefer to talk?{" "}
                                <a href="https://wa.me/919000000000">
                                    WhatsApp us
                                </a>{" "}
                                or{" "}
                                <a href="tel:+919000000000">
                                    book a call
                                </a>
                                . We never share your details.
                            </p>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;