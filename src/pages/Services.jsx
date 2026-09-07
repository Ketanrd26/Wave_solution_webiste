import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

import "../style/Services.scss";
import { FaCompass } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

function Services() {
    return (
        <>
            <Helmet>
                <title>
                    Digital Marketing Services | Wave Solution, Pune
                </title>

                <meta
                    name="description"
                    content="Explore Wave Solution's digital growth services including performance marketing, SEO, AI search, social media, web development, Shopify, branding, AI content and creative solutions."
                />

                <meta
                    name="keywords"
                    content="digital marketing services Pune, digital marketing agency India, digital growth services Pune, performance marketing services Pune, SEO services India, AI search optimization India, social media management Pune, web design and development India, Shopify development Pune, branding agency Pune, brand strategy India, AI reels and UGC services, creative solutions India"
                />

                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                <meta name="author" content="Wave Solution" />

                <link
                    rel="canonical"
                    href="https://wavesolution.com/services"
                />

                {/* LOCAL SEO */}
                <meta name="geo.region" content="IN-MH" />
                <meta
                    name="geo.placename"
                    content="Pune, Maharashtra, India"
                />

                {/* OPEN GRAPH */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Wave Solution" />

                <meta
                    property="og:title"
                    content="Digital Marketing Services | Wave Solution, Pune"
                />

                <meta
                    property="og:description"
                    content="Performance marketing, SEO, AI search, social media, web development, Shopify, branding and creative services built for measurable digital growth."
                />

                <meta
                    property="og:url"
                    content="https://wavesolution.com/services"
                />

                <meta
                    property="og:image"
                    content="https://wavesolution.com/og-image.jpg"
                />

                <meta
                    property="og:image:alt"
                    content="Wave Solution Digital Marketing Services"
                />

                <meta property="og:locale" content="en_IN" />

                {/* TWITTER / X */}
                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Digital Marketing Services | Wave Solution, Pune"
                />

                <meta
                    name="twitter:description"
                    content="Explore Wave Solution's integrated digital growth services for performance marketing, SEO, AI search, social media, web, Shopify, branding and creative."
                />

                <meta
                    name="twitter:image"
                    content="https://wavesolution.com/og-image.jpg"
                />

                <meta
                    name="twitter:image:alt"
                    content="Wave Solution — Digital Growth Services"
                />

                <meta
                    name="twitter:site"
                    content="@WaveSolution"
                />

                {/* STRUCTURED DATA */}
                <script type="application/ld+json">
                    
                </script>
            </Helmet>

            <div className="what_we_parent parent">
                <div className="what_we_cont cont">

                    <div className="what_we_tag">
                        <span></span>
                        OUR SERVICES
                    </div>

                    <h2 className="what_we_heading">
                        Nine services.
                        <span>One Growth Engine,</span>Built Around You.
                    </h2>

                    <p className="what_we_desc">
                        Bring us one channel or all nine — content, ads, SEO, web, and brand, run by the same team, on the same reporting, against
                        the same deadlines. Explore what's actually included in each.
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
                            We plan, script, and produce short-form video at a pace most in-house teams can't match — a mix of AI-assisted production
                            and creator-style UGC designed for Instagram Reels, YouTube Shorts, and TikTok. Every piece is built around a hook, not
                            just a pretty shot, because the first two seconds decide whether the rest gets watched.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C, FMCG, and lifestyle brands that need a steady volume of scroll-stopping video without building an in-house content
                            team.
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
                                    Script writing and hook development for every video
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI-assisted video production, including voiceovers and avatars where useful
                                </li>

                                <li>
                                    <span>✓</span>
                                    UGC-style creator content sourced and directed for authenticity
                                </li>

                                <li>
                                    <span>✓</span>
                                    Platform-specific edits and formatting for Reels, Shorts, and TikTok
                                </li>

                                <li>
                                    <span>✓</span>
                                    Monthly content batching and shoot calendars
                                </li>

                                <li>
                                    <span>✓</span>
                                    Performance tracking on views, watch time, saves, and shares
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
                            Performance Marketing
                        </h2>

                        <p className="service_desc">
                            We run paid media the way it should be run — as a system tied to customer acquisition cost, not a vanity-metrics dashboard.
                            Every campaign starts with your actual unit economics, then works backward into creative, targeting, and budget so the
                            spend is justified by the return, not the other way around.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> Businesses ready to spend on paid ads and want every rupee tied to a measurable return, not just impressions.
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
                                    Meta Ads strategy and management across Facebook and Instagram
                                </li>

                                <li>
                                    <span>✓</span>
                                    Google Ads across Search, Shopping, and Performance Max
                                </li>

                                <li>
                                    <span>✓</span>
                                    Ad creative testing and iterative optimization
                                </li>

                                <li>
                                    <span>✓</span>
                                    Landing page and funnel review to fix leaks before scaling spend
                                </li>

                                <li>
                                    <span>✓</span>
                                    CAC and ROAS tracking tied to your real revenue numbers
                                </li>

                                <li>
                                    <span>✓</span>
                                    Budget scaling decisions based on data, reviewed monthly
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
                            SEO & AI Search
                        </h2>

                        <p className="service_desc">
                            Search has split in two: the classic Google results page, and the new layer of AI answer engines that summarize the web
                            instead of just linking to it. We build for both — technical SEO and content that ranks classically, plus the structured data
                            and clear, quotable answers that get a brand mentioned inside an AI-generated response.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> Businesses that want compounding organic visibility instead of paying for every single visitor through ads.
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
                                    Technical SEO audit covering speed, indexing, and site structure
                                </li>

                                <li>
                                    <span>✓</span>
                                    On-page SEO — content, headings, internal linking, schema markup
                                </li>

                                <li>
                                    <span>✓</span>
                                    Keyword research and content strategy tied to real buyer intent
                                </li>

                                <li>
                                    <span>✓</span>
                                    Authority and backlink building
                                </li>

                                <li>
                                    <span>✓</span>
                                    AI search optimization — structured data and FAQ content written to be quoted by AI engines
                                </li>

                                <li>
                                    <span>✓</span>
                                    Monthly ranking, traffic, and visibility reporting
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
                            Social Media Management
                        </h2>

                        <p className="service_desc">
                            Consistent social media takes more than posting on schedule — it takes a content plan tied to actual goals, someone
                            answering comments and DMs like a human, and reporting that tells you what's working. We run all three, so your channels
                            stay active without eating your week.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> Brands that need a consistent, professional social presence without hiring and managing an in-house social team.
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
                                    Monthly content calendar planned across every active platform
                                </li>

                                <li>
                                    <span>✓</span>
                                    Post design, copywriting, and scheduling
                                </li>

                                <li>
                                    <span>✓</span>
                                    Community management — comments, DMs, and engagement handled daily
                                </li>

                                <li>
                                    <span>✓</span>
                                    Platform-specific growth strategy
                                </li>

                                <li>
                                    <span>✓</span>
                                    Monthly performance reporting in plain language
                                </li>

                                <li>
                                    <span>✓</span>
                                    Ongoing trend and format monitoring so content doesn't go stale
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
                            Web Design & Development
                        </h2>

                        <p className="service_desc">
                            A website is only as good as what it gets someone to do next. We design and build custom, responsive sites — no drag-and
                            drop templates — engineered around speed, clarity, and conversion from the first wireframe, with an SEO-ready structure
                            built in rather than bolted on afterward.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> Businesses that need a site that actually converts visitors into leads or customers — not just one that looks good in a
                            portfolio.
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
                                    Custom UI/UX design, built around your brand and your users
                                </li>

                                <li>
                                    <span>✓</span>
                                    Fully responsive development across mobile, tablet, and desktop
                                </li>

                                <li>
                                    <span>✓</span>
                                    Speed and Core Web Vitals optimization
                                </li>

                                <li>
                                    <span>✓</span>
                                    SEO-ready structure, semantic HTML, and schema markup
                                </li>

                                <li>
                                    <span>✓</span>
                                    CMS setup (WordPress or custom) so your team can update content easily
                                </li>

                                <li>
                                    <span>✓</span>
                                    Post-launch support and maintenance plans
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
                            Shopify Development
                        </h2>

                        <p className="service_desc">
                            eCommerce lives or dies at the product page and the checkout. We build and customize Shopify stores around both — clean,
                            fast themes, product pages that actually sell, and a checkout flow with as little friction as possible between "add to cart" and
                            "order confirmed."
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> D2C and eCommerce brands selling directly to customers online, from first launch to established stores ready to scale.
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
                                    Custom Shopify theme design and development
                                </li>

                                <li>
                                    <span>✓</span>
                                    Product and collection page design optimized for conversion
                                </li>

                                <li>
                                    <span>✓</span>
                                    App integration — reviews, upsells, subscriptions, and more
                                </li>

                                <li>
                                    <span>✓</span>
                                    Checkout flow and cart optimization to reduce drop-off
                                </li>

                                <li>
                                    <span>✓</span>
                                    Store speed optimization
                                </li>

                                <li>
                                    <span>✓</span>
                                    Ongoing store support, updates, and troubleshooting
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
                            Branding
                        </h2>

                        <p className="service_desc">
                            Your brand identity is the first impression, every time — on a product shelf, an Instagram grid, or a pitch deck. We build
                            complete visual identity systems designed to be instantly recognizable and consistent everywhere your brand shows up.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> New brands launching for the first time, and existing brands whose current identity no longer matches where the business is
                            headed.
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
                                    Logo design and full visual identity system
                                </li>

                                <li>
                                    <span>✓</span>
                                    Brand color palette and typography selection
                                </li>

                                <li>
                                    <span>✓</span>
                                    Documented brand guidelines for consistent use across teams
                                </li>

                                <li>
                                    <span>✓</span>
                                    Packaging and merchandise design where relevant
                                </li>

                                <li>
                                    <span>✓</span>
                                    Social media and marketing templates built on the new identity
                                </li>

                                <li>
                                    <span>✓</span>
                                    Brand voice and tone guide
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
                            Brand Strategy
                        </h2>

                        <p className="service_desc">
                            Before design, before ads, before a single reel gets shot — there has to be a clear answer to "why you, and not the ten other
                            options." We build that answer: researched, specific, and written down, so every future campaign has something real to say.
                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> Businesses entering a new market, launching a new product, or repositioning against competitors who've started to look
                            identical.
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
                                    Market and competitor research
                                </li>

                                <li>
                                    <span>✓</span>
                                    Brand positioning and differentiation strategy
                                </li>

                                <li>
                                    <span>✓</span>
                                    Messaging framework, taglines, and core brand story
                                </li>

                                <li>
                                    <span>✓</span>
                                    Target audience and buyer persona development
                                </li>

                                <li>
                                    <span>✓</span>
                                    Go-to-market strategy for launches or repositioning
                                </li>

                                <li>
                                    <span>✓</span>
                                    Full strategy documentation your whole team can work from
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
                            Creative Solutions
                        </h2>

                        <p className="service_desc">
                            Not every creative need fits neatly into a single service — a pitch deck due Friday, a packaging refresh, a one-off campaign
                            concept. This is flexible, on-demand creative support for exactly that: fast turnarounds without a full new project scope every
                            time.

                        </p>

                        <div className="service_best">
                            <strong>Best for:</strong> Brands that need flexible, dependable creative support outside a fixed project scope — not a full retainer, just real help when
                            it's needed.
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
                                    Ad creative and campaign concept design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Presentation and pitch deck design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Packaging and print design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Email and marketing collateral design
                                </li>

                                <li>
                                    <span>✓</span>
                                    Custom, one-off creative projects
                                </li>

                                <li>
                                    <span>✓</span>
                                    Fast-turnaround design support for time-sensitive requests
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
                            HOW WE WORK
                        </span>

                        <h2>
                            Whichever Service You Start With,
                            <em>The Process Is The Same</em>
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
                        Not Sure Where To Start?
                        <br />
                        We'll Tell <em>You Honestly.</em>
                    </h2>

                    <p>
                        Book a free 30-minute call. We'll look at what you're running today and tell you plainly whether we're the right team for it —
                        no deck, no pressure.
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