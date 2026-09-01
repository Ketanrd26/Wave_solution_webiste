import { useState } from "react";
import "../style/Faq.scss";


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
              className={`faq_item ${
                activeFaq === index ? "active" : ""
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
  );
};

export default Faq;
