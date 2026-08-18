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
        <section className=" how-it-fits_parent parent ">
            <div className="how-it-fits_cont cont">

                {/* Hero */}
                <div className="hero">
                    <div className="hero-tag">
                        <span></span>
                        HOW IT FITS TOGETHER
                    </div>

                    <h1>
                        Create. Convert.
                        <strong>Compound.</strong>
                    </h1>

                    <p>
                        Most agencies sell you channels. We run a system where each part
                        feeds the next — content fuels ads, ads fund search, and search
                        compounds while you sleep.
                    </p>
                </div>

                <div className="flow-box">

                    <div className="brand-box">
                        AdiAnsh Media
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
    );
};

export default HowItFits;