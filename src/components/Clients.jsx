import "../style/Clients.scss";

const Clients = () => {
    return (
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
    );
};

export default Clients;