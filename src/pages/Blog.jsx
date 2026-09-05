import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import featuredImg from "../assets/blog.jpeg";

import "../style/Blog.scss";
import { Helmet } from "react-helmet";


function Blog() {
    return (
        <>
        <Helmet>
             <title>        Ideas on Digital Growth | Wave Solution Journal      </title>      <meta        name="description"        content="Practical writing on performance marketing, SEO, AI search, web and e-commerce, CRO, social media and Shopify — written for modern brands, with real numbers rather than theory."      />      <meta        name="keywords"        content="Wave Solution blog, digital marketing blog India, SEO blog Pune, AI marketing blog India, performance marketing blog India, CRO blog India, Shopify blog India, social media marketing blog Pune, digital growth blog India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/blog" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta property="og:title" content="Ideas on Digital Growth | Wave Solution Journal" />      <meta        property="og:description"        content="Practical writing on digital marketing, SEO, AI search, web and e-commerce, CRO, social media and Shopify, written for modern brands."      />      <meta property="og:url" content="https://wavesolution.com/blog" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution Journal — Ideas on digital growth" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta name="twitter:title" content="Ideas on Digital Growth | Wave Solution Journal" />      <meta        name="twitter:description"        content="Practical writing on digital marketing, SEO, AI search, web, CRO, social media and Shopify — with real numbers, not theory."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">      </script>
        </Helmet>
            <section className="tell_parent parent">
                <div className="tell_cont cont">

                    <div className="tell_intro">

                        <span className="tell_badge">
                            • JOURNAL
                        </span>

                        <h1>
                            Ideas on<br /><span> Digital Growth.</span>
                        </h1>

                        <p>
                            Practical writing on performance marketing, AI search,
                            web and content — written for modern brands, with real
                            numbers rather than theory.
                        </p>

                        <div className="tell_tags">
                            <span>Digital Marketing</span>
                            <span>SEO</span>
                            <span>AI marketing</span>
                            <span>Web &amp; e-commerce</span>
                            <span>Performance marketing</span>
                            <span>CRO</span>
                            <span>Social media</span>
                            <span>Shopify</span>
                            <span>Technology</span>
                        </div>

                    </div>


                    <div className="tell_featured">

                        <div className="featured_image">
                            <img
                                src={featuredImg}
                                alt="Digital Marketing"
                            />
                            {/* <div className="fake_browser">
                                <span>AI &amp; COMMERCE</span>

                                <h3>
                                    Checkout Optimization:
                                    <br />
                                    Cut Cart Abandonment
                                </h3>
                            </div> */}
                        </div>

                        <div className="featured_content">

                            <span className="article_category">
                                DIGITAL GROWTH
                            </span>

                            <h2>
                                Why Your Digital Marketing Isn't Working And <span>What to Fix First</span>
                            </h2>

                            <p>
                                <strong>Digital Marketing</strong> A practical framework for identifying what's holding your digital growth back—from weak positioning and poor targeting to low-converting websites and disconnected campaigns.
                            </p>

                            <a href="#">
                                Read the article →
                            </a>

                        </div>

                    </div>


                    <div className="tell_grid">

                        <article className="tell_card">
                            <div className="card_image">
                                <span>SEO</span>
                                <h3>
                                    SEO in 2026: What Actually Matters for Business Growth?
                                </h3>
                            </div>

                            <span className="card_category">
                                SEO
                            </span>

                            <h3>
                                Search has changed. Learn which SEO activities still create meaningful business value and which outdated tactics businesses should stop wasting time on.
                            </h3>

                            {/* <p>
                                High-impact experiments you can test without rebuilding
                                your entire website.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>AI & MARKETING</span>
                                <h3>
                                    AI Marketing in 2026: What Businesses Should Actually Automate
                                </h3>
                            </div>

                            <span className="card_category">
                                AI & Marketing
                            </span>

                            <h3>
                                AI can do far more than generate captions. Explore practical ways businesses can use AI across research, content, creative, customer journeys and marketing operations.
                            </h3>

                            {/* <p>
                                The common mistakes that quietly reduce conversions
                                across your website.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>WEB & E-COMMERCE </span>
                                <h3>
                                    Your Website Gets Traffic. So Why Isn't It Generating Leads?
                                </h3>
                            </div>

                            <span className="card_category">
                                WEB & E-commerce
                            </span>

                            <h3>
                                Traffic doesn't automatically create business. Discover the website problems that can turn interested visitors into lost opportunities.
                            </h3>

                            {/* <p>
                                Build faster landing pages that convert more visitors
                                into customers.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>PERFORMANCE MARKETING </span>
                                <h3>
                                    Google Ads vs Meta Ads: Where Should Your Business Spend?
                                </h3>
                            </div>

                            <span className="card_category">
                                Performance Marketing
                            </span>

                            <h3>
                                Both platforms can generate results—but they work differently. Understand when Google Ads, Meta Ads or a combination of both makes more sense.
                            </h3>

                            {/* <p>
                                Improve your Shopify store performance without
                                sacrificing design.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>CRO</span>
                                <h3>
                                    10 Website Mistakes That Quietly Kill Your Conversions
                                </h3>
                            </div>

                            <span className="card_category">
                                CRO
                            </span>

                            <h3>
                                Small website issues can have a big impact on enquiries and sales. Here are the conversion problems businesses often overlook.
                            </h3>

                            {/* <p>
                                A practical comparison for businesses choosing their
                                next website platform.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>SHOPIFY</span>
                                <h3>
                                    Shopify Store Optimization: 12 Changes That Can Improve Sales
                                </h3>
                            </div>

                            <span className="card_category">
                                Shopify
                            </span>

                            <h3>
                                From product pages and navigation to speed and checkout, discover the key areas to optimise when your Shopify store isn't converting as expected.
                            </h3>

                            {/* <p>
                                Simple changes that can make a measurable difference
                                to your conversion rate.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>SOCIAL MEDIA </span>
                                <h3>
                                    Why Your Social Media Gets Views but Not Customers
                                </h3>
                            </div>

                            <span className="card_category">
                                Social Media
                            </span>

                            <h3>
                                Views, likes and followers don't always translate into business. Learn how to build a social media strategy that connects attention with actual customer journeys.
                            </h3>

                            {/* <p>
                                Understand the benchmarks and what you should actually
                                aim for.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>SEO &amp; AI</span>
                                <h3>
                                    Search Is Changing: How AI Is Reshaping SEO
                                </h3>
                            </div>

                            <span className="card_category">
                                SEO &amp; AI
                            </span>

                            <h3>
                                AI-powered search is changing how people discover information, brands and businesses. Understand what this means for your SEO strategy.
                            </h3>

                            {/* <p>
                                The essential elements every high-performing landing
                                page needs today.
                            </p> */}
                        </article>


                        <article className="tell_card">
                            <div className="card_image">
                                <span>WEB & E-COMMERCE </span>
                                <h3>
                                    Website Redesign: When Should You Rebuild Instead of Just Update?
                                </h3>
                            </div>

                            <span className="card_category">
                                WEB & E-COMMERCE
                            </span>

                            <h3>
                                Conversion Rate Optimization:
                                The 2026 Guide
                            </h3>

                            <p>
                                Not every website needs a complete redesign. Learn how to identify whether your business needs optimisation, restructuring or a completely new digital experience.
                            </p>
                        </article>

                    </div>


                    <div className="tell_pagination">
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>→</button>
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
                        We'd Rather Show
                        <br />
                        You Than <em>Tell You.</em>
                    </h2>

                    <p>
                        Thirty minutes. No sales presentation. No complicated pitch. We'll look at what you're currently doing, understand your goals and tell you honestly where we think the biggest opportunities are. If we're the right team for your business, we'll tell you how we can help. If we're not, we'll tell you that too.
                    </p>

                    <div className="work_us_buttons">
                        {/* <a href="#contact" className="work_us_btn_primary">
                            Book a free 30-min call
                            <span>→</span>
                        </a> */}

                        <a href="#" className="work_us_btn_secondary">
                            See our work
                        </a>
                    </div>

                </div>
            </section>

        </>
    );
}

export default Blog;