import { Helmet } from "react-helmet";
import "../style/WhyBrands.scss";

const reasons = [
    {
        title: "Deadlines we actually hit",
        text: "If we commit to a date, we ship on it. Quality doesn't get traded for speed and neither gets traded for excuses.",
    },
    {
        title: "Every decision tied to a number",
        text: "We don’t build pretty things that don’t convert. If it can’t be measured, we’ll tell you before you pay for it.",
    },
    {
        title: "Strategy built around your market",
        text: "No recycled plans. What works for a D2C brand in Mumbai won’t work for a SaaS company in Sydney — and we plan accordingly.",
    },
    {
        title: "Pricing with no fine print",
        text: "One quote, no hidden charges, paid securely through Razorpay. You always know what you’re spending before you spend it.",
    },
    {
        title: "Global standards, local instinct",
        text: "We understand how Indian buyers actually behave and what international brands expect — and we bridge the two.",
    },
];

const WhyBrands = () => {
    return (
        <>
        <Helmet>
            <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">      </script>
        </Helmet>
            <section className="whybrands_parent parent">
                <div className="whybrands_cont cont">

                    <div className="whybrands_left">

                        <div className="whybrands_tag">
                            <span></span>
                            WHY BRANDS STAY
                        </div>

                        <h2>
                            The Agency
                            <br />
                            That
                            <br />
                            <em>Actually Delivers.</em>
                        </h2>

                        <p className="whybrands_desc">
                            We work with Indian brands going global and international
                            brands entering India. No templates. No guesswork. No
                            surprises on the invoice.
                        </p>

                        <a href="tel:+919096915795" className="whybrands_btn">
                            Book a call
                            <span>→</span>
                        </a>

                    </div>

                    <div className="whybrands_right">

                        {reasons.map((item, index) => (
                            <div className="whybrands_item" key={index}>

                                <div className="whybrands_check">
                                    ✓
                                </div>

                                <div className="whybrands_item_content">
                                    <h3>{item.title}</h3>

                                    <p>{item.text}</p>
                                </div>

                            </div>
                        ))}

                    </div>


                </div>
            </section>
        </>
    );
};

export default WhyBrands;