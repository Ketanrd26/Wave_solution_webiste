import "../style/Process.scss";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    text: "Thirty minutes on your goals, your buyers and what your competitors are getting away with. No deck.",
  },
  {
    number: "02",
    title: "Custom strategy",
    text: "Channels, budget, content and timelines — written for your targets, with the numbers we expect to move.",
  },
  {
    number: "03",
    title: "Execute & launch",
    text: "We build, publish and run every piece. You see the work in progress, not just the invoice at the end.",
  },
  {
    number: "04",
    title: "Measure & scale",
    text: "Monthly reporting in plain English. We double down on what works and kill what doesn’t.",
  },
];

const Process = () => {
  return (
    <section className="process_parent parent">
      <div className="process_cont cont">

        <div className="process_heading">
          <div className="process_tag">
            <span></span>
            HOW WE WORK
          </div>

          <h2>
            From First Call To
            <em>Compounding Growth.</em>
          </h2>
        </div>

        <div className="process_box">

          {steps.map((step, index) => (
            <div className="process_item" key={index}>

              <div className="process_number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;