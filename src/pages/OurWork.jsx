import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


import "../style/OurWork.scss";

import { FiArrowRight } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

function OurWork() {
    return (
        <>
            <section className="studies_parent parent">
                <div className="studies_cont cont">

                    <span className="studies_tag">
                        <span className="studies_dot"></span>
                        CASE STUDIES
                    </span>

                    <h2 className="studies_title">
                        The work, and
                        <br />
                        the <span>numbers behind it.</span>
                    </h2>

                    <p className="studies_desc">
                        Eight engagements across FMCG, real estate, education, B2B,
                        fitness and D2C. Real campaigns, real deliverables, real results.
                    </p>

                </div>
            </section>


            <section className="across_parent parent">
                <div className="across_cont cont">

                    <div className="across_heading">
                        <span className="across_tag">
                            <span className="across_dot"></span>
                            ACROSS ALL CAMPAIGNS
                        </span>

                        <h2>
                            Numbers that matter,
                            <br />
                            <span>aggregated.</span>
                        </h2>
                    </div>

                    <div className="across_stats">

                        <div className="across_stat">
                            <h3>
                                3.2<sup>×</sup>
                            </h3>
                            <p>Avg. traffic increase</p>
                        </div>

                        <div className="across_stat">
                            <h3>
                                5.8<sup>×</sup>
                            </h3>
                            <p>Avg. ROAS on paid</p>
                        </div>

                        <div className="across_stat">
                            <h3>₹85</h3>
                            <p>Lowest CPL achieved</p>
                        </div>

                        <div className="across_stat">
                            <h3>
                                214<sup>%</sup>
                            </h3>
                            <p>Avg. organic growth</p>
                        </div>

                        <div className="across_stat">
                            <h3>
                                30<sup>+</sup>
                            </h3>
                            <p>Brands grown since 2022</p>
                        </div>

                    </div>

                </div>
            </section>


            {/* CASE STUDY 01 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 01</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 02 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 02</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 03 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 03</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 04 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 04</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 05 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 05</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 06 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 06</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 07 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 07</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>

            {/* CASE STUDY 08 */}

            <section className="case_parent parent">
                <div className="case_cont cont">

                    <div className="case_header">

                        <div className="case_header_left">
                            <span className="case_label">CASE STUDY 08</span>

                            <h2>
                                D2C Food Brand — Full Digital Stack
                            </h2>

                            <div className="case_tags">
                                <span>Google Ads</span>
                                <span>SEO</span>
                                <span>Social Media</span>
                                <span>AI Reels</span>
                                <span>Shopify</span>
                            </div>
                        </div>

                        <div className="case_category">
                            FMCG · D2C
                        </div>

                    </div>

                    <div className="case_stats">

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>3.2×</strong>
                            <p>Website traffic in 90 days</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↓</span>
                            <strong>₹9</strong>
                            <p>Avg. CPC on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>5.8×</strong>
                            <p>ROAS on Shopping</p>
                        </div>

                        <div className="case_stat">
                            <span className="stat_arrow">↑</span>
                            <strong>214%</strong>
                            <p>Organic impressions</p>
                        </div>

                    </div>

                    <div className="case_content">

                        <div className="case_challenge">

                            <span className="content_label">
                                THE CHALLENGE
                            </span>

                            <p>
                                A brand with a real product differentiator —
                                <b> premium ingredients </b> — but almost no digital
                                presence. Competing against commodity brands with
                                far bigger budgets and near-zero organic visibility.
                                They needed immediate sales and long-term
                                discoverability at the same time.
                            </p>

                            <div className="case_budget">
                                <strong>₹500<span>/day</span></strong>

                                <p>
                                    Starting ad budget — scaled profitably
                                </p>
                            </div>

                        </div>


                        <div className="case_delivered">

                            <span className="content_label">
                                WHAT WE DELIVERED
                            </span>

                            <ul>
                                <li>
                                    Two Google Search campaigns — city and
                                    hyperlocal, five ad groups each
                                </li>

                                <li>
                                    Standard Shopping campaign with optimised
                                    titles, categories and custom labels
                                </li>

                                <li>
                                    Full SEO audit plus three Shopify-ready
                                    blog posts on high-intent keywords
                                </li>

                                <li>
                                    Landing page built around local search intent
                                </li>

                                <li>
                                    AI reel produced with Google Veo,
                                    compositing real product footage
                                </li>

                                <li>
                                    Comedy concept and Hinglish voiceover
                                    scripts for the gifting campaign
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>


            <section className="clients_parent parent">
                <div className="clients_cont cont">

                    <div className="clients_heading">

                        <span className="clients_tag">
                            <span></span>
                            IN THEIR WORDS
                        </span>

                        <h2>
                            What clients <em>actually say.</em>
                        </h2>

                    </div>

                    <div className="clients_grid">

                        <div className="client_card">

                            <p className="client_quote">
                                “AdiAnsh didn’t just run our ads — they understood
                                our product better than agencies twice their size.
                                The campaign was built around our customer, not just clicks.”
                            </p>

                            <div className="client_bottom">

                                <div className="client_info">

                                    <div className="client_avatar">
                                        K
                                    </div>

                                    <div>
                                        <h3>Kunal C.</h3>
                                        <span>D2C Food Brand</span>
                                    </div>

                                </div>

                                <div className="client_rating">
                                    ★★★★★
                                </div>

                            </div>

                        </div>


                        <div className="client_card">

                            <p className="client_quote">
                                “The website they built blew our client away.
                                It looked like something a top-tier international
                                agency would produce, and the turnaround was genuinely fast.”
                            </p>

                            <div className="client_bottom">

                                <div className="client_info">

                                    <div className="client_avatar">
                                        A
                                    </div>

                                    <div>
                                        <h3>Aniket K.</h3>
                                        <span>B2B Company, Pune</span>
                                    </div>

                                </div>

                                <div className="client_rating">
                                    ★★★★★
                                </div>

                            </div>

                        </div>


                        <div className="client_card">

                            <p className="client_quote">
                                “Six times our usual enquiry volume in the first month.
                                The form qualified leads properly, and the Marathi copy
                                actually converted better than the English.”
                            </p>

                            <div className="client_bottom">

                                <div className="client_info">

                                    <div className="client_avatar">
                                        A
                                    </div>

                                    <div>
                                        <h3>Ajit T.</h3>
                                        <span>Luxury Real Estate, Pune</span>
                                    </div>

                                </div>

                                <div className="client_rating">
                                    ★★★★★
                                </div>

                            </div>

                        </div>


                        <div className="client_card">

                            <p className="client_quote">
                                “From the SEO posts to the ad campaigns, everything
                                tied together. We could see organic growth happening
                                alongside paid — a real system, not scattered activity.”
                            </p>

                            <div className="client_bottom">

                                <div className="client_info">

                                    <div className="client_avatar">
                                        A
                                    </div>

                                    <div>
                                        <h3>Avanti D.</h3>
                                        <span>D2C eCommerce Brand</span>
                                    </div>

                                </div>

                                <div className="client_rating">
                                    ★★★★★
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <section className="study_parent parent">
                <div className="study_cont cont">

                    <div className="study_glow study_glow_one"></div>
                    <div className="study_glow study_glow_two"></div>

                    <div className="study_badge">
                        <span></span>
                        START YOUR CASE STUDY
                    </div>

                    <h2>
                        Your brand could
                        <br />
                        be the <em>next result.</em>
                    </h2>

                    <p className="study_desc">
                        Book a free 30-minute call and we'll show you exactly
                        what we'd do for your brand — with real numbers, not promises.
                    </p>

                    <div className="study_buttons">

                        <button className="study_primary_btn">
                            Book a free 30-min call
                            <FiArrowRight />
                        </button>

                        <button className="study_whatsapp_btn">
                            <FiMessageCircle />
                            WhatsApp us instead
                        </button>

                    </div>

                    <div className="study_line"></div>

                    <div className="study_points">

                        <div className="study_point">
                            <FiCheck />
                            <span>Free strategy call, no pitch</span>
                        </div>

                        <div className="study_point">
                            <FiCheck />
                            <span>Results-first, not deliverable-first</span>
                        </div>

                        <div className="study_point">
                            <FiCheck />
                            <span>India & international clients</span>
                        </div>

                        <div className="study_point">
                            <FiCheck />
                            <span>Secure payment via Razorpay</span>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}

export default OurWork;