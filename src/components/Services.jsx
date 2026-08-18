import React from "react";
import "../style/Services.scss";
import { FiVideo } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";


const services = [
    {
        number: "01",
        icon: <FiVideo />,
        title: "AI Reels & UGC",
        text: "Short-form video and creator-style content that will improve your brand reach and engagement.",
    },
    {
        number: "02",
        icon: <FiBarChart2 />,
        title: "Performance Marketing",
        text: "Meta and Google campaigns built around one number: what a customer actually costs you.",
    },
    {
        number: "03",
        icon: <FiSearch />,
        title: "SEO & AI Search",
        text: "Rank in Google and get noticed by AI search engines with smart SEO strategies.",
    },
    {
        number: "04",
        icon: <FiShare2 />,
        title: "Social Media Management",
        text: "Calendars, community and reporting that keeps your social media active and engaging.",
    },
    {
        number: "05",
        icon: <FiCode />,
        title: "Web Design & Development",
        text: "Modern websites that load fast, look professional and are built to convert.",
    },
    {
        number: "06",
        icon: <FiShoppingCart />,
        title: "Shopify Development",
        text: "Fast storefronts with clean UI, great pages and a smooth checkout experience.",
    },
    {
        number: "07",
        icon: <FiStar />,
        title: "Branding",
        text: "Build a strong and memorable brand identity that connects with your audience.",
    },
    {
        number: "08",
        icon: <FiTarget />,
        title: "Brand Strategy",
        text: "Clear positioning, messaging and strategy to help your business stand out.",
    },
    {
        number: "09",
        icon: <FiLayers />,
        title: "Creative Solutions",
        text: "Creative digital solutions designed to grow your business and improve your online presence.",
    },
];

const Services = () => {
    return (
        <section className="services_parent parent">
            <div className="services_cont cont">

                <div className="services_heading">
                    <span className="small_title">WHAT WE RUN</span>

                    <h2>
                        Nine services.{" "}
                        <span>One growth engine.</span>
                    </h2>

                    <p>
                        Bring us one channel or all nine. Same team, same reporting,
                        same deadlines either way.
                    </p>
                </div>

                <div className="services_grid">
                    {services.map((service) => (
                        <div className="service_card" key={service.number}>

                            {/* <div className="card_image">
                                <div className="circle">
                                    <span>↑</span>
                                </div>
                            </div> */}

                            <div className="service_icon">
                                {service.icon}
                            </div>

                            <span className="service_number">
                                {service.number}
                            </span>

                            <h3>{service.title}</h3>

                            <p>{service.text}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;