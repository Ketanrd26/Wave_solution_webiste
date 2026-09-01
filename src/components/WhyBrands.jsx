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

                    <a href="tel:+918459188254" className="whybrands_btn">
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
    );
};

export default WhyBrands;