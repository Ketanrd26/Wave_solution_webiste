import { useState } from "react";
import "../style/OurClients.scss";

const OurClients = () => {
  const [activeTab, setActiveTab] = useState("social-media");

  return (
    <div>
      <section className="studies_parent parent">
        <div className="studies_cont cont">
          <span className="studies_tag">
            <span className="studies_dot"></span>
            OUR CLIENTS
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

      <section className="work_tabs_parent parent">
        <div className="work_tabs_cont cont">
          <div
            className="work_tabs"
            role="tablist"
            aria-label="Our work categories"
          >
            {[
              ["social-media", "Digital Marketing"],
              ["web-app", "Technology Solutions"],
              ["websites", "Web & Design"],
            ].map(([tabId, label]) => (
              <button
                key={tabId}
                className={activeTab === tabId ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={activeTab === tabId}
                onClick={() => setActiveTab(tabId)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "social-media" && (
        <>
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
                      A trusted jewellery brand with a strong local presence —
                      but limited digital visibility
                    </b>
                    . With social media, Google Business Profile, and organic
                    customer discovery needing consistent attention, the brand
                    needed a stronger digital presence to reach more local
                    customers, showcase its jewellery collections, and build
                    ongoing engagement.
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
                      A trusted jewellery brand with a strong local presence —
                      but limited digital visibility
                    </b>
                    . With social media, Google Business Profile, and organic
                    customer discovery needing consistent attention, the brand
                    needed a stronger digital presence to reach more local
                    customers, showcase its jewellery collections, and build
                    ongoing engagement.
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
                      A trusted jewellery brand with a strong local presence —
                      but limited digital visibility
                    </b>
                    . With social media, Google Business Profile, and organic
                    customer discovery needing consistent attention, the brand
                    needed a stronger digital presence to reach more local
                    customers, showcase its jewellery collections, and build
                    ongoing engagement.
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
                      A trusted jewellery brand with a strong local presence —
                      but limited digital visibility
                    </b>
                    . With social media, Google Business Profile, and organic
                    customer discovery needing consistent attention, the brand
                    needed a stronger digital presence to reach more local
                    customers, showcase its jewellery collections, and build
                    ongoing engagement.
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

                <div className="case_category">
                  BANKING · FINANCIAL SERVICES
                </div>
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

                <div className="case_category">
                  CHIT FUNDS · FINANCIAL SERVICES
                </div>
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
                    A growing financial services brand operating in the
                    chit-fund space needed a stronger and more consistent
                    digital presence. The goal was to communicate its schemes
                    and services clearly, build customer awareness, improve
                    local discoverability, and create greater trust through
                    consistent digital communication.
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

                <div className="case_category">
                  FOOD & BEVERAGE . RESTAURANT
                </div>
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
                    stronger digital presence to showcase its menu, ambience,
                    and dining experience. The goal was to create consistent
                    food-focused content, increase local visibility, and turn
                    social media into a stronger channel for customer discovery
                    and engagement.
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
        </>
      )}

      {activeTab === "web-app" && (
        <section className="client_category_parent parent">
          <div className="client_category_cont cont">
            <span className="client_category_label">WEB APP CLIENTS</span>
            <h2>
              Digital products built to <em>work harder.</em>
            </h2>
            <div className="client_category_grid">
              <article className="client_category_card">
                <span>01</span>
                <h3>Denza Dental Center</h3>
                <p>
                  Patient-focused digital experience and online enquiry flow.
                </p>
              </article>
              <article className="client_category_card">
                <span>02</span>
                <h3>Maid Urban</h3>
                <p>
                  A clear, conversion-ready digital system for a growing brand.
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {activeTab === "websites" && (
        <section className="client_category_parent parent">
          <div className="client_category_cont cont">
            <span className="client_category_label">WEBSITE CLIENTS</span>
            <h2>
              Websites that make brands <em>stand out.</em>
            </h2>
            <div className="client_category_grid">
              <article className="client_category_card">
                <span>01</span>
                <h3>Krutika Jewellers</h3>
                <p>
                  A premium brand presence designed to showcase every detail.
                </p>
              </article>
              <article className="client_category_card">
                <span>02</span>
                <h3>Wave Solutions</h3>
                <p>
                  A modern website experience built around clarity and growth.
                </p>
              </article>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default OurClients;
