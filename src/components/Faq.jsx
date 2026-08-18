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
      "We provide web development, UI/UX design, software development, digital solutions and other technology services tailored to business requirements.",
  },
  {
    question: "Can you build a website according to our requirements?",
    answer:
      "Yes. We create custom websites based on your business goals, brand identity, content and functionality requirements.",
  },
  {
    question: "Do you work with businesses of different industries?",
    answer:
      "Yes. Our solutions can be customized for businesses across different industries and company sizes.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Project timelines depend on the size, features and requirements of the website. After understanding your requirements, we can provide a clear estimated timeline.",
  },
  {
    question: "How can I get started with Wave Solution?",
    answer:
      "Simply contact our team and share your requirements. We will discuss your project, suggest the right approach and guide you through the next steps.",
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
            The things people
            <br />
            <em>actually ask.</em>
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
