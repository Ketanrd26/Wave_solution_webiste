import { Helmet } from "react-helmet";
import "../style/Privacy.scss";

const sections = [
  ["acceptance", "Using this website"],
  ["services", "Services and project agreements"],
  ["your-content", "Information you provide"],
  ["ownership", "Intellectual property"],
  ["external-links", "Third-party links"],
  ["disclaimers", "Website information"],
  ["liability", "Limitation of liability"],
  ["changes", "Changes to these terms"],
  ["law", "Governing law"],
  ["contact", "Contact us"],
];

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Wave Solution</title>
        <meta
          name="description"
          content="Read the terms for using the Wave Solution website and information about our digital services."
        />
        <link rel="canonical" href="https://wavesolution.com/terms" />
      </Helmet>

      <main className="privacy_parent parent">
        <div className="privacy_cont cont">
          <header className="privacy_heading">
            <span className="privacy_eyebrow">
              <span aria-hidden="true"></span>
              TERMS OF USE
            </span>
            <h1>
              Terms &amp; <em>Conditions</em>
            </h1>
            <p>
              These terms cover your use of the Wave Solution website. Any
              services we provide are also governed by the written agreement
              for that project.
            </p>
            <span className="privacy_updated">Last updated: September 30, 2026</span>
          </header>

          <div className="privacy_layout">
            <nav className="privacy_nav" aria-label="Terms and conditions sections">
              <span>ON THIS PAGE</span>
              {sections.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="privacy_content">
              <section id="acceptance">
                <h2>Using this website</h2>
                <p>
                  By accessing or using this website, you agree to these terms.
                  If you do not agree, please do not use the website. You agree
                  to use it lawfully and not to interfere with its operation,
                  security, or other visitors' access.
                </p>
              </section>

              <section id="services">
                <h2>Services and project agreements</h2>
                <p>
                  Information on this website describes our services generally
                  and is not a binding offer. The scope, deliverables, fees,
                  schedule, payment terms, and responsibilities for a project
                  are set out in the proposal or written agreement accepted by
                  the client. If that agreement conflicts with these website
                  terms, the project agreement controls for that work.
                </p>
              </section>

              <section id="your-content">
                <h2>Information you provide</h2>
                <p>
                  When you send us materials or information for an enquiry or
                  project, you are responsible for having the right to share
                  them. You allow us to use those materials only as reasonably
                  needed to respond to you or perform the agreed services.
                </p>
              </section>

              <section id="ownership">
                <h2>Intellectual property</h2>
                <p>
                  Website text, designs, graphics, and other materials are
                  owned by Wave Solution or its licensors and may not be copied,
                  republished, or used commercially without permission, except
                  where the law allows. Client materials remain the client's.
                  Ownership and permitted use of project deliverables are
                  governed by the applicable written project agreement.
                </p>
              </section>

              <section id="external-links">
                <h2>Third-party links</h2>
                <p>
                  This website may link to third-party websites or services.
                  Those links are provided for convenience; we do not control
                  and are not responsible for third-party content, availability,
                  or terms. Your use of those services is subject to their own
                  terms and policies.
                </p>
              </section>

              <section id="disclaimers">
                <h2>Website information</h2>
                <p>
                  We aim to keep website information useful and current, but it
                  may contain errors or become outdated. The website and its
                  content are provided on an "as available" basis. Nothing on
                  this website is a guarantee of a particular business or
                  marketing result; outcomes depend on factors specific to each
                  project.
                </p>
              </section>

              <section id="liability">
                <h2>Limitation of liability</h2>
                <p>
                  To the extent permitted by applicable law, Wave Solution is
                  not liable for indirect or consequential loss arising from
                  your use of, or inability to use, this website. These terms do
                  not exclude or limit any liability that cannot lawfully be
                  excluded or limited.
                </p>
              </section>

              <section id="changes">
                <h2>Changes to these terms</h2>
                <p>
                  We may update these terms when our website or services
                  change. The revised version will appear on this page with a
                  new update date. Your continued use of the website after an
                  update means you accept the revised terms.
                </p>
              </section>

              <section id="law">
                <h2>Governing law</h2>
                <p>
                  These terms are governed by the laws of India. Subject to
                  applicable law, courts in Pune, Maharashtra will have
                  jurisdiction over disputes relating to these website terms.
                </p>
              </section>

              <section id="contact">
                <h2>Contact us</h2>
                <p>
                  Questions about these terms? Contact Wave Solution at
                  <a href="mailto:contact@wavesolutions.in">
                    contact@wavesolutions.in
                  </a>
                  . We are based in Pune, Maharashtra, India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Terms;
