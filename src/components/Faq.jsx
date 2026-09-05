import { useState } from "react";
import "../style/Faq.scss";
import { Helmet } from "react-helmet";


const faqData = [
  {
    question: "What does Wave Solution do?",
    answer:
      "Wave Solution builds modern digital products, websites and technology solutions that help businesses grow, improve their online presence and work more efficiently.",
  },
  {
    question: "What services does Wave Solution provide?",
    answer:
      " Wave Solution provides nine core services: AI Reels & UGC, Performance Marketing, SEO & AI Search, Social Media Management, Web Design & Development, Shopify Development, Branding, Brand Strategy, and Creative Solutions — delivered as one connected system or as individual channels.",
  },
  {
    question: "Can you build a website according to our requirements?",
    answer:
      "Yes. Every website is custom-built around your business, brand, and goals — from a marketing site to a full Shopify storefront — with no fixed templates, so the design, structure, and features match what your requirements actually call for.",
  },
  {
    question: "Do you work with businesses of different industries?",
    answer:
      "Yes. Wave Solution works with D2C brands, SaaS companies, and service businesses across industries, including Indian brands expanding internationally and international brands entering the Indian market.",
  },
  {
    question: "How long does a website project take?",
    answer:
      " Most business websites are completed in 2–4 weeks from approved design to launch, while larger builds like Shopify stores or custom web applications typically take 4–8 weeks depending on scope — confirmed exactly during the discovery call.",
  },
  {
    question: "How can I get started with Wave Solution?",
    answer:
      " Book a free 30-minute discovery call or send a brief through the contact form — Wave Solution will review your goals and respond with a custom strategy and quote, usually within one business day.",
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const handleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
    <Helmet>
      <title>India        Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune,       </title>      <meta        name="description"        content="Wave Solution runs performance marketing, SEO, web design and content for Indian brands going global — one team, one system, measurable growth every month."      />      <meta        name="keywords"        content="Wave Solution, Wave Solution Pune, Wave Solution digital agency, digital marketing agency Pune, performance marketing agency India, SEO agency Pune, SEO agency India, web design agency Pune, web development company Pune, Shopify development agency India, branding agency Pune, brand strategy agency India, social media management agency India, digital growth agency India, AI reels agency India, UGC content agency India, digital marketing agency for Indian brands going global, D2C marketing agency India, performance marketing agency Pune, content marketing agency Pune, growth marketing agency India"      />      <meta        name="robots"        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"      />      <meta name="author" content="Wave Solution" />      <link rel="canonical" href="https://wavesolution.com/" />      {/* =========================          LOCAL SEO      ========================== */}      <meta name="geo.region" content="IN-MH" />      <meta name="geo.placename" content="Pune, Maharashtra, India" />      <meta name="geo.position" content="18.5204;73.8567" />      <meta name="ICBM" content="18.5204, 73.8567" />      {/* =========================          OPEN GRAPH      ========================== */}      <meta property="og:type" content="website" />      <meta property="og:site_name" content="Wave Solution" />      <meta        property="og:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design in Pune, India"      />      <meta        property="og:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta property="og:url" content="https://wavesolution.com/" />      <meta property="og:image" content="https://wavesolution.com/og-image.jpg" />      <meta property="og:image:alt" content="Wave Solution — Digital Growth Engine, Pune, India" />      <meta property="og:locale" content="en_IN" />      {/* =========================          TWITTER / X      ========================== */}      <meta name="twitter:card" content="summary_large_image" />      <meta        name="twitter:title"        content="Wave Solution | Digital Growth Engine — Performance Marketing, SEO & Web Design"      />      <meta        name="twitter:description"        content="Performance marketing, SEO, web design and content for Indian brands going global. One team, one system, measurable growth every month."      />      <meta name="twitter:image" content="https://wavesolution.com/og-image.jpg" />      <meta name="twitter:image:alt" content="Wave Solution — Pune, India" />      <meta name="twitter:site" content="@WaveSolution" />      {/* =========================          STRUCTURED DATA      ========================== */}      <script type="application/ld+json">              </script>
    </Helmet>
      <section className="faq_parent parent">
        <div className="faq_cont cont">

          <div className="faq_header">

            <div className="faq_tag">
              <span></span>
              QUESTIONS
            </div>

            <h2>
              The Things People
              <br />
              <em>Actually Ask.</em>
            </h2>

          </div>


          <div className="faq_list">

            {faqData.map((item, index) => (
              <div
                className={`faq_item ${activeFaq === index ? "active" : ""
                  }`}
                key={index}
              >

                <button
                  className="faq_question"
                  onClick={() => handleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>{item.question}</span>

                  <span className="faq_icon">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>


                <div className="faq_answer">
                  <div className="faq_answer_inner">
                    <p>{item.answer}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Faq;
