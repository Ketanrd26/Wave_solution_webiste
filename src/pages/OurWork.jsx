import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import "../style/OurWork.scss";

import { FiArrowRight } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { Helmet } from "react-helmet";

function OurWork() {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Case Studies | The Work, and the Numbers Behind It — Wave
          Solution{" "}
        </title>{" "}
        <meta
          name="description"
          content="Eight-plus engagements across FMCG, real estate, education, B2B, fitness and D2C. Real campaigns, real deliverables, real results from Wave Solution."
        />{" "}
        <meta
          name="keywords"
          content="Wave Solution case studies, Wave Solution results, digital marketing case studies India, performance marketing results Pune, SEO case study India, D2C marketing case study India, real estate lead generation case study Pune, Wave Solution client work"
        />{" "}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />{" "}
        <meta name="author" content="Wave Solution" />{" "}
        <link rel="canonical" href="https://wavesolution.com/ourwork" />{" "}
        {/* =========================          LOCAL SEO      ========================== */}{" "}
        <meta name="geo.region" content="IN-MH" />{" "}
        <meta name="geo.placename" content="Pune, Maharashtra, India" />{" "}
        {/* =========================          OPEN GRAPH      ========================== */}{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:site_name" content="Wave Solution" />{" "}
        <meta
          property="og:title"
          content="Case Studies | The Work, and the Numbers Behind It — Wave Solution"
        />{" "}
        <meta
          property="og:description"
          content="3.2x average traffic increase, 5.8x average ROAS, 214% average organic growth — 30+ brands grown since 2025."
        />{" "}
        <meta property="og:url" content="https://wavesolution.com/ourwork" />{" "}
        <meta
          property="og:image"
          content="https://wavesolution.com/og-image.jpg"
        />{" "}
        <meta
          property="og:image:alt"
          content="Wave Solution — Case studies and results"
        />{" "}
        <meta property="og:locale" content="en_IN" />{" "}
        {/* =========================          TWITTER / X      ========================== */}{" "}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta
          name="twitter:title"
          content="Case Studies | The Work, and the Numbers Behind It — Wave Solution"
        />{" "}
        <meta
          name="twitter:description"
          content="Real campaigns, real deliverables, real results across FMCG, real estate, education, B2B, fitness and D2C."
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
            Eight engagements across FMCG, real estate, education, B2B, fitness
            and D2C. Real campaigns, real deliverables, real results.
          </p>
        </div>
      </section>

      {/* <section className="across_parent parent">
                <div className="across_cont cont">

                    <div className="across_heading">
                        <span className="across_tag">
                            <span className="across_dot"></span>
                            PERFORMANCE SNAPSHOT
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
            </section> */}

      {/* CASE STUDY 01 */}

      <section className="case_parent parent">
        <div className="case_cont cont">
          <div className="case_header">
            <div className="case_header_left">
              <span className="case_label">CASE STUDY 01</span>

              <h2>S. R. Pandit Jewellers — Full Digital Growth</h2>

              <div className="case_tags">
                <span>Content Strategy</span>
                <span>GMB Management</span>
                <span>Social Media</span>
                <span>AI Reels</span>
                <span>Product Photography</span>
              </div>
            </div>

            <div className="case_category">JEWELLERY · RETAIL</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>3.9k</strong>
              <p>Followers</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>52.1K</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>148K+</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>13.5K</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                <b>
                  A trusted jewellery brand with a strong local presence — but
                  limited digital visibility
                </b>
                . With social media, Google Business Profile, and organic
                customer discovery needing consistent attention, the brand
                needed a stronger digital presence to reach more local
                customers, showcase its jewellery collections, and build ongoing
                engagement.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>End-to-end social media management</li>

                <li>Premium jewellery creatives & content</li>

                <li>Instagram & Facebook content strategy</li>

                <li>Google Business Profile management</li>

                <li>Local SEO & visibility optimisation</li>

                <li>Audience and engagement building</li>
                <li>Festival & occasion-led campaigns</li>
                <li>Jewellery product & collection promotion </li>
                <li>Google profile updates and optimisation</li>
                <li>Customer enquiry and engagement tracking </li>
                <li>Monthly performance monitoring</li>
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

              <h2>Maid Jewellers - Full Digital Growth</h2>

              <div className="case_tags">
                <span>Content Strategy</span>
                <span>GMB Management</span>
                <span>Social Media</span>
                <span>AI Reels</span>
                <span>Product Photography</span>
              </div>
            </div>

            <div className="case_category">JEWELLERY · RETAIL</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>7.6k</strong>
              <p>Followers </p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>71.6k</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>91.6k</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>7.0k</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                <b>
                  A trusted jewellery brand with a strong local presence — but
                  limited digital visibility
                </b>
                . With social media, Google Business Profile, and organic
                customer discovery needing consistent attention, the brand
                needed a stronger digital presence to reach more local
                customers, showcase its jewellery collections, and build ongoing
                engagement.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>End-to-end social media management</li>

                <li>Premium jewellery creatives & content</li>

                <li>Instagram & Facebook content strategy</li>

                <li>Google Business Profile management</li>

                <li>Local SEO & visibility optimisation</li>

                <li>Audience and engagement building</li>
                <li>Festival & occasion-led campaigns</li>
                <li>Jewellery product & collection promotion </li>
                <li>Google profile updates and optimisation</li>
                <li>Customer enquiry and engagement tracking </li>
                <li>Monthly performance monitoring</li>
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

              <h2>Krutika Jewellers — Full Digital Growth</h2>

              <div className="case_tags">
                <span>Content Strategy</span>
                <span>GMB Management</span>
                <span>Social Media</span>
                <span>AI Reels</span>
                <span>Product Photography</span>
              </div>
            </div>

            <div className="case_category">JEWELLERY · RETAIL</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>2.1k</strong>
              <p>Followers</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>302K</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>323k+</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>32.3k</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                <b>
                  A trusted jewellery brand with a strong local presence — but
                  limited digital visibility
                </b>
                . With social media, Google Business Profile, and organic
                customer discovery needing consistent attention, the brand
                needed a stronger digital presence to reach more local
                customers, showcase its jewellery collections, and build ongoing
                engagement.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>End-to-end social media management</li>

                <li>Premium jewellery creatives & content</li>

                <li>Instagram & Facebook content strategy</li>

                <li>Google Business Profile management</li>

                <li>Local SEO & visibility optimisation</li>

                <li>Audience and engagement building</li>
                <li>Festival & occasion-led campaigns</li>
                <li>Jewellery product & collection promotion </li>
                <li>Google profile updates and optimisation</li>
                <li>Customer enquiry and engagement tracking </li>
                <li>Monthly performance monitoring</li>
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

              <h2>Vardhaman Jewellers — Full Digital Growth</h2>

              <div className="case_tags">
                <span>Content Strategy</span>
                <span>GMB Management</span>
                <span>Social Media</span>
                <span>AI Reels</span>
                <span>Product Photography</span>
              </div>
            </div>

            <div className="case_category">JEWELLERY · RETAIL</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>1061</strong>
              <p>Followers</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>12.8K</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>34.4K+</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>2.9k</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                <b>
                  A trusted jewellery brand with a strong local presence — but
                  limited digital visibility
                </b>
                . With social media, Google Business Profile, and organic
                customer discovery needing consistent attention, the brand
                needed a stronger digital presence to reach more local
                customers, showcase its jewellery collections, and build ongoing
                engagement.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>End-to-end social media management</li>

                <li>Premium jewellery creatives & content</li>

                <li>Instagram & Facebook content strategy</li>

                <li>Google Business Profile management</li>

                <li>Local SEO & visibility optimisation</li>

                <li>Audience and engagement building</li>
                <li>Festival & occasion-led campaigns</li>
                <li>Jewellery product & collection promotion </li>
                <li>Google profile updates and optimisation</li>
                <li>Customer enquiry and engagement tracking </li>
                <li>Monthly performance monitoring</li>
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

              <h2>Maid Urban Co-operative Bank — Full Digital Growth</h2>

              <div className="case_tags">
                <span>Social Media</span>
                <span>Meta Ads</span>
                <span>AI Reels</span>
                <span>Organic Growth</span>
              </div>
            </div>

            <div className="case_category">BANKING · FINANCIAL SERVICES</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>102</strong>
              <p>Followers</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>550</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>1.1k</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>107</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                A trusted local banking institution with an opportunity to
                strengthen its digital presence. The challenge was to
                communicate banking services, updates, and customer-focused
                information consistently while building stronger local
                visibility and engagement across digital channels.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>Social media strategy</li>
                <li>Content planning</li>
                <li>Reels strategy</li>
                <li>Banking-focused creative content</li>
                <li>Reels & short-form content</li>
                <li>Financial awareness content </li>
                <li>Product & service communication</li>
                <li>Google Business Profile management</li>
                <li>Local visibility optimisation</li>
                <li>Organic audience building</li>
                <li>Customer engagement</li>
                <li>Digital presence optimisation</li>
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
                Dhantirth Chits Private Limited — Building Digital Financial
                Trust
              </h2>

              <div className="case_tags">
                <span>Google Ads</span>
                <span>GMB Management</span>
                <span>Social Media</span>
                <span> Lead Generation</span>
                <span>Reels & Content</span>
                <span>Creative Strategy</span>
              </div>
            </div>

            <div className="case_category">CHIT FUNDS · FINANCIAL SERVICES</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>494</strong>
              <p>Followers</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>102K</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>134K+</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>19.2K</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                A growing financial services brand operating in the chit-fund
                space needed a stronger and more consistent digital presence.
                The goal was to communicate its schemes and services clearly,
                build customer awareness, improve local discoverability, and
                create greater trust through consistent digital communication.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>Social media strategy</li>
                <li>Financial content planning</li>
                <li>Chit-fund scheme creatives</li>
                <li>Reels & short-form content</li>
                <li>Educational financial content</li>
                <li>Scheme & service communication</li>
                <li>Google Business Profile management</li>
                <li>Local visibility optimisation</li>
                <li>Organic audience building </li>
                <li>Customer-focused content</li>
                <li>Trust & brand communication</li>
                <li>Content performance analysis</li>
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

              <h2>Hotel Kasturi — Creative & Content Growth</h2>

              <div className="case_tags">
                <span>Social Media</span>
                <span> Reels</span>
                <span>Creative Strategy</span>
                <span> Food Content</span>
                <span>Digital Marketing</span>
              </div>
            </div>

            <div className="case_category">FOOD & BEVERAGE . RESTAURANT</div>
          </div>

          <div className="case_stats">
            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>1.3k</strong>
              <p>Followers</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>13.2K</strong>
              <p>Peak Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>40.1K+</strong>
              <p>Content Views</p>
            </div>

            <div className="case_stat">
              <span className="stat_arrow">↑</span>
              <strong>4.5K</strong>
              <p>Average Views</p>
            </div>
          </div>

          <div className="case_content">
            <div className="case_challenge">
              <span className="content_label">THE CHALLENGE</span>

              <p>
                A local restaurant with a diverse food offering needed a
                stronger digital presence to showcase its menu, ambience, and
                dining experience. The goal was to create consistent
                food-focused content, increase local visibility, and turn social
                media into a stronger channel for customer discovery and
                engagement.
              </p>
            </div>

            <div className="case_delivered">
              <span className="content_label">WHAT WE DELIVERED</span>

              <ul>
                <li>Social media strategy</li>
                <li>Content planning</li>
                <li>Food-focused creative content</li>
                <li>Reels & short-form videos</li>
                <li>Menu & dish promotion</li>
                <li>Restaurant ambience content</li>
                <li>Festival & occasion-based content</li>
                <li>Creative campaigns</li>
                <li>Local audience targeting</li>
                <li>Customer engagement strategy</li>
                <li>Content optimisation</li>
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
              <p>
                <b>“They understood our product.” </b>
              </p>

              <p className="client_quote">
                “AdiAnsh didn’t just run our ads — they understood our product
                better than agencies twice their size. The campaign was built
                around our customer, not just clicks.”
              </p>

              <div className="client_bottom">
                <div className="client_info">
                  <div className="client_avatar">K</div>

                  <div>
                    <h3>Kunal C.</h3>
                    <span>D2C Food Brand</span>
                  </div>
                </div>

                <div className="client_rating">★★★★★</div>
              </div>
            </div>

            <div className="client_card">
              <p>
                <b>“A website that made an impact.”</b>
              </p>

              <p className="client_quote">
                “The website they built blew our client away. It looked like
                something a top-tier international agency would produce, and the
                turnaround was genuinely fast.”
              </p>

              <div className="client_bottom">
                <div className="client_info">
                  <div className="client_avatar">A</div>

                  <div>
                    <h3>Aniket K.</h3>
                    <span>B2B Company, Pune</span>
                  </div>
                </div>

                <div className="client_rating">★★★★★</div>
              </div>
            </div>

            <div className="client_card">
              <p>
                <b>“Six times our usual enquiry volume.” </b>
              </p>

              <p className="client_quote">
                “Six times our usual enquiry volume in the first month. The form
                qualified leads properly, and the Marathi copy actually
                converted better than the English.”
              </p>

              <div className="client_bottom">
                <div className="client_info">
                  <div className="client_avatar">A</div>

                  <div>
                    <h3>Ajit T.</h3>
                    <span>Luxury Real Estate, Pune</span>
                  </div>
                </div>

                <div className="client_rating">★★★★★</div>
              </div>
            </div>

            <div className="client_card">
              <p>
                <b>“A real system, not scattered activity.”</b>
              </p>

              <p className="client_quote">
                “From the SEO posts to the ad campaigns, everything tied
                together. We could see organic growth happening alongside paid —
                a real system, not scattered activity.”
              </p>

              <div className="client_bottom">
                <div className="client_info">
                  <div className="client_avatar">A</div>

                  <div>
                    <h3>Avanti D.</h3>
                    <span>D2C eCommerce Brand</span>
                  </div>
                </div>

                <div className="client_rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="study_parent parent">
        <div className="study_cont cont">
          <div className="study_glow study_glow_one"></div>
          <div className="study_glow study_glow_two"></div>

          {/* <div className="study_badge">
                        <span></span>
                        START YOUR CASE STUDY
                    </div> */}

          <h2>
            Your Brand Could
            <br />
            Be the <em>Next Result.</em>
          </h2>

          <p className="study_desc">
            Book a free 30-minute call and we'll show you exactly what we'd do
            for your brand—with real numbers, practical ideas and a strategy
            built around your business.
          </p>

          <div className="study_buttons">
            {/* <button className="study_primary_btn">
                            Book a free 30-min call
                            <FiArrowRight />
                        </button> */}

            <button className="study_whatsapp_btn">
              <FiMessageCircle />
              WhatsApp us instead
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
