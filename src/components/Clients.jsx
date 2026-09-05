import { Helmet } from "react-helmet";
import "../style/Clients.scss";

const Clients = () => {
    return (
        <>
        <Helmet>
            <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">           </script>
        </Helmet>
            <section className="clients_parent parent">
                <div className="clients_cont cont">

                    <div className="clients_heading">
                        <span className="clients_tag">
                            <i></i>
                            OUR CLIENTS
                        </span>

                        <h2>
                            Trusted By Brands.
                            <br />
                            <em>Built For Growth.</em>
                        </h2>

                        <p>
                            We work with ambitious brands across industries to build,
                            scale and grow digital experiences that actually perform.
                        </p>
                    </div>

                    <div className="clients_grid">

                        <div className="client_card">
                            <span className="client_number">01</span>
                            <h3>Denza Dental Center</h3>
                            <p>Healthcare & Dentistry</p>
                        </div>

                        <div className="client_card">
                            <span className="client_number">02</span>
                            <h3>Krutika Jewellers</h3>
                            <p>Jewellery & Retail</p>
                        </div>

                        <div className="client_card">
                            <span className="client_number">03</span>
                            <h3>Maid Urban</h3>
                            <p>Finance & Cooperative Services</p>
                        </div>

                        <div className="client_card">
                            <span className="client_number">04</span>
                            <h3>Maid Jewellers </h3>
                            <p>Jewellery & Retail</p>
                        </div>

                        <div className="client_card">
                            <span className="client_number">05</span>
                            <h3>Dhantirth Chits Pvt.Ltd.</h3>
                            <p>Financial Services</p>
                        </div>

                    </div>

                    {/* <div className="clients_bottom">
                    <span>India</span>
                    <span>Australia</span>
                    <span>USA</span>
                    <span>UK</span>
                    <span>Worldwide</span>
                </div> */}

                </div>
            </section>
        </>
    );
};

export default Clients;