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
                        Trusted by brands.
                        <br />
                        <em>Built for growth.</em>
                    </h2>

                    <p>
                        We work with ambitious brands across industries to build,
                        scale and grow digital experiences that actually perform.
                    </p>
                </div>

                <div className="clients_grid">

                    <div className="client_card">
                        <span className="client_number">01</span>
                        <h3>Wave Solutions</h3>
                        <p>Technology & Software</p>
                    </div>

                    <div className="client_card">
                        <span className="client_number">02</span>
                        <h3>Brand Partners</h3>
                        <p>Branding & Marketing</p>
                    </div>

                    <div className="client_card">
                        <span className="client_number">03</span>
                        <h3>Growth Brands</h3>
                        <p>Digital Growth</p>
                    </div>

                    <div className="client_card">
                        <span className="client_number">04</span>
                        <h3>Global Clients</h3>
                        <p>International Markets</p>
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