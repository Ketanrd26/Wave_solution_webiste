import "../style/Hero.scss";

const Hero = () => {
  return (
    <section className="hero_parent parent">
      <div className="hero_cont cont">

        <div className="hero_left">

          <div className="hero_tag">
            <span></span>
            DIGITAL SOLUTIONS • INDIA
          </div>

          <h1>
            Build Your
            <br />
            <span>Digital</span>
            <br />
            Future.
          </h1>

          <p className="hero_desc">
            We build smart digital solutions, powerful websites and
            technology that helps businesses grow faster.
          </p>

          <div className="hero_btns">
            <button className="hero_btn">
              Let's Work Together
              <span>→</span>
            </button>

            <button className="hero_btn_outline">
              Message us
              <span>↗</span>
            </button>
          </div>

        </div>


        <div className="hero_right">

          <div className="hero_glow"></div>

          <div className="hero_circle hero_circle_1"></div>
          <div className="hero_circle hero_circle_2"></div>

          <div className="hero_visual">

            <div className="hero_card">
              <div className="card_top">
                <span className="card_dot"></span>
                Wave Solution
              </div>

              <div className="card_main">
                <small>Digital Growth</small>
                <strong>+87%</strong>
              </div>

              <div className="card_lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="floating_box box_1">
              <span></span>
              Web Development
            </div>

            <div className="floating_box box_2">
              <span></span>
              Digital Solutions
            </div>

            <div className="floating_box box_3">
              <span></span>
              Growth +72%
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;