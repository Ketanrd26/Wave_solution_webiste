import "../style/Stats.scss";

const Stats = () => {
  return (
    <>
      <section className="stats_parent parent">
        <div className="stats_cont cont">

          <div className="stats_item">
            <div className="stats_number">
              7<span>+</span>
            </div>
            <p>Industries served</p>
          </div>

          <div className="stats_item">
            <div className="stats_number">
              4<span>+</span>
            </div>
            <p>Years in business</p>
          </div>

          <div className="stats_item">
            <div className="stats_number">
              30<span>+</span>
            </div>
            <p>Brands scaled</p>
          </div>

          <div className="stats_item">
            <div className="stats_number">
              9
            </div>
            <p>Services under one roof</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Stats;