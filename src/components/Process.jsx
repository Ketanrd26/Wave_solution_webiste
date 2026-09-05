import { Helmet } from "react-helmet";
import "../style/Process.scss";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    text: "Thirty minutes on your goals, your buyers and what your competitors are getting away with. No deck.",
  },
  {
    number: "02",
    title: "Custom strategy",
    text: "Channels, budget, content and timelines — written for your targets, with the numbers we expect to move.",
  },
  {
    number: "03",
    title: "Execute & launch",
    text: "We build, publish and run every piece. You see the work in progress, not just the invoice at the end.",
  },
  {
    number: "04",
    title: "Measure & scale",
    text: "Monthly reporting in plain English. We double down on what works and kill what doesn’t.",
  },
];

const Process = () => {
  return (
    <>
    <Helmet>
      <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">              </script>
    </Helmet>
      <section className="process_parent parent">
        <div className="process_cont cont">

          <div className="process_heading">
            <div className="process_tag">
              <span></span>
              HOW WE WORK
            </div>

            <h2>
              From First Call To
              <em>Compounding Growth.</em>
            </h2>
          </div>

          <div className="process_box">

            {steps.map((step, index) => (
              <div className="process_item" key={index}>

                <div className="process_number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Process;