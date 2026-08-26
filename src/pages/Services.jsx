import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

import "../style/Services.scss";
import { FaCompass } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Services() {
    return (
        <>

            <div className="what_we_parent parent">
                <div className="what_we_cont cont">

                    <div className="what_we_tag">
                        <span></span>
                        WHAT WE RUN
                    </div>

                    <h2 className="what_we_heading">
                        Nine services.
                        <span>One accountable team.</span>
                    </h2>

                    <p className="what_we_desc">
                        Bring us one channel or all nine. Either way you get the same team,
                        the same reporting and the same deadlines — with no handoff to a
                        junior you never met.
                    </p>

                    <div className="what_we_services">

                        <div className="what_we_service">
                            <span className="service_icon">▶</span>
                            AI Reels & UGC
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">◎</span>
                            Performance Marketing
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">⌕</span>
                            SEO & AI Search (GEO)
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">♧</span>
                            Social Media Management
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">&lt;&gt;</span>
                            Web Design & Development
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">🛒</span>
                            Shopify Development
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">☆</span>
                            Influencer Marketing
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">✧</span>
                            Branding & Strategy
                        </div>

                        <div className="what_we_service">
                            <span className="service_icon">▱</span>
                            On-demand Design
                        </div>

                    </div>

                </div>
            </div>


            {/* service 01 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 01
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 02 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 02
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 03 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 03
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 04 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 04
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 05 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 05
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 06 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 06
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 07 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 07
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 08 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 08
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>

            {/* service 09 */}

            <section className="service_parent parent">
                <div className="service_cont cont">

                    <div className="service_left">

                        <span className="service_number">
                            Service 09
                        </span>

                        <h2>
                            AI Reels & UGC
                        </h2>

                        <p className="service_desc">
                            The algorithm rewards volume and consistency. Traditional
                            production gives you neither. We produce short-form video
                            and creator-style content at the pace your feed actually needs
                            — no studio, no crew, no six-week turnaround.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, lifestyle and personal brands
                            that need consistent output without a production budget.
                        </div>

                        <div className="service_buttons">
                            <Link to="/contact" className="discuss_btn">
                                Discuss this <span>→</span>
                            </Link>

                            <a href="https://wa.me/919096915795" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>


                    <div className="service_right">

                        <div className="included_card">

                            <h3>WHAT’S INCLUDED</h3>

                            <ul>
                                <li>
                                    <span>✓</span>
                                    Monthly content plan tied to campaign goals, not vibes
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-generated and creator-style video production
                                </li>

                                <li>
                                    <span>✓</span>
                                    Hooks written and tested per platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Captions, subtitles and sound design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Native cuts for Reels, Shorts and TikTok
                                </li>
                            </ul>


                        </div>

                    </div>

                </div>
            </section>



            <section className="work_parent parent">
                <div className="work_cont cont">

                    <div className="work_heading">
                        <span className="work_tag">
                            <i></i>
                            HOW WE WORK TOGETHER
                        </span>

                        <h2>
                            Three ways to
                            <em> work with us.</em>
                        </h2>

                        <p>
                            Flexible engagement models designed around your goals,
                            timeline and growth.
                        </p>
                    </div>

                    <div className="work_cards">

                        {/* Card 1 */}
                        <div className="work_card">

                            <div className="work_icon">
                                <FaCompass />
                            </div>

                            <h3>Project</h3>

                            <p className="work_desc">
                                Fixed scope, fixed price, agreed before
                                anyone starts.
                            </p>

                            <div className="work_points">
                                <p>
                                    <span>✓</span>
                                    Websites, branding and creative
                                </p>

                                <p>
                                    <span>✓</span>
                                    Written scope and timeline up front
                                </p>

                                <p>
                                    <span>✓</span>
                                    Milestone-based payments
                                </p>

                                <p>
                                    <span>✓</span>
                                    Source files handed over on completion
                                </p>
                            </div>

                        </div>

                        {/* Card 2 */}
                        <div className="work_card active">

                            <div className="popular">
                                MOST CHOSEN
                            </div>

                            <div className="work_icon">
                                <FaRocket />
                            </div>

                            <h3>Retainer</h3>

                            <p className="work_desc">
                                Monthly, multi-channel, built for
                                compounding growth.
                            </p>

                            <div className="work_points">
                                <p>
                                    <span>✓</span>
                                    Ads, content, social and search combined
                                </p>

                                <p>
                                    <span>✓</span>
                                    Monthly strategy and reporting call
                                </p>

                                <p>
                                    <span>✓</span>
                                    Priority turnaround on requests
                                </p>

                                <p>
                                    <span>✓</span>
                                    30 days notice to cancel
                                </p>
                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="work_card">

                            <div className="work_icon">
                                <FaLayerGroup />
                            </div>

                            <h3>On-demand</h3>

                            <p className="work_desc">
                                Design and content capacity, only when
                                you need it.
                            </p>

                            <div className="work_points">
                                <p>
                                    <span>✓</span>
                                    Unlimited requests, one at a time
                                </p>

                                <p>
                                    <span>✓</span>
                                    24–48 hour turnaround
                                </p>

                                <p>
                                    <span>✓</span>
                                    Pause or cancel any month
                                </p>

                                <p>
                                    <span>✓</span>
                                    No minimum commitment
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="work_us_parent parent">
                <div className="work_us_cont cont">

                    <span className="work_us_tag">
                        <span className="work_us_dot"></span>
                        WORK WITH US
                    </span>

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
                        {/* <a href="#contact" className="work_us_btn_primary">
                            Book a free 30-min call
                            <span>→</span>
                        </a> */}

                        <a href="#work" className="work_us_btn_secondary">
                            See our work
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Services;