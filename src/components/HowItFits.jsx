import { Helmet } from "react-helmet";
import "../style/HowItFits.scss";

const services = [
    {
        title: "Create",
        subtitle: "Fill the top of the funnel",
        items: [
            {
                title: "AI Reels & UGC",
                desc: "Short-form video at scale",
                icon: "▣",
            },
            {
                title: "Social Media Management",
                desc: "Calendars, community, reporting",
                icon: "⌘",
            },
            {
                title: "On-demand Design",
                desc: "Decks, packaging, ad creative",
                icon: "▱",
            },
        ],
    },
    {
        title: "Convert",
        subtitle: "Turn attention into revenue",
        items: [
            {
                title: "Performance Marketing",
                desc: "Meta & Google, built on CAC",
                icon: "⌁",
            },
            {
                title: "Web Design & Development",
                desc: "Web Studio and WordPress",
                icon: "‹›",
            },
            {
                title: "Shopify Development",
                desc: "Storefronts tuned to convert",
                icon: "⌑",
            },
        ],
    },
    {
        title: "Compound",
        subtitle: "Build assets that keep paying",
        items: [
            {
                title: "SEO & AI Search",
                desc: "Google plus ChatGPT and Perplexity",
                icon: "⌕",
            },
            {
                title: "Influencer Marketing",
                desc: "Creators with real tracking",
                icon: "☆",
            },
            {
                title: "Branding & Strategy",
                desc: "Positioning that outlasts campaigns",
                icon: "♢",
            },
        ],
    },
];

const HowItFits = () => {
    return (
        <>
        <Helmet>
            <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">          </script>
        </Helmet>
            <section className=" how-it-fits_parent parent ">
                <div className="how-it-fits_cont cont">

                    {/* Hero */}
                    <div className="hero">
                        <div className="hero-tag">
                            <span></span>
                            HOW IT FITS TOGETHER
                        </div>

                        <h2>
                            Create. Convert.{" "}
                            <span>Compound.</span>
                        </h2>

                        <p>
                            Most agencies sell you channels. We run a system where each part
                            feeds the next — content fuels ads, ads fund search, and search
                            compounds while you sleep.
                        </p>
                    </div>

                    <div className="flow-box">

                        <div className="brand-box">
                            Wave Solution
                        </div>

                        <div className="flow-line"></div>

                        <div className="flow-items">
                            <div className="flow-item">
                                <span>01</span>
                                Create
                            </div>

                            <div className="flow-item">
                                <span>02</span>
                                Convert
                            </div>

                            <div className="flow-item">
                                <span>03</span>
                                Compound
                            </div>
                        </div>
                    </div>

                    {/* Service Cards */}
                    <div className="service-grid">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>

                                <div className="card-heading">
                                    <div className="card-icon">
                                        {index === 0 ? "✦" : index === 1 ? "◎" : "⌁"}
                                    </div>

                                    <div>
                                        <h3>{service.title}</h3>
                                        <p>{service.subtitle}</p>
                                    </div>
                                </div>

                                <div className="card-items">
                                    {service.items.map((item, itemIndex) => (
                                        <div className="service-item" key={itemIndex}>

                                            <div className="item-icon">
                                                {item.icon}
                                            </div>

                                            <div className="item-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>

                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default HowItFits;