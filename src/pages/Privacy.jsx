import { Helmet } from "react-helmet";
import "../style/Privacy.scss";

const sections = [
  ["information", "Information we collect"],
  ["use", "How we use information"],
  ["sharing", "When information is shared"],
  ["retention", "Storage and retention"],
  ["cookies", "Cookies and site technology"],
  ["choices", "Your choices"],
  ["third-parties", "Third-party websites"],
  ["children", "Children's privacy"],
  ["updates", "Policy updates"],
  ["contact", "Contact us"],
];

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Wave Solution</title>
        <meta
          name="description"
          content="Read how Wave Solution handles information when you visit our website or contact our team."
        />
        <link rel="canonical" href="https://wavesolution.com/privacy" />
      </Helmet>

      <main className="privacy_parent parent">
        <div className="privacy_cont cont">
          <header className="privacy_heading">
            <span className="privacy_eyebrow">
              <span aria-hidden="true"></span>
              YOUR INFORMATION, RESPECTED
            </span>
            <h1>
              Privacy <em>Policy</em>
            </h1>
            <p>
              This policy explains what information Wave Solution may receive
              when you visit our website or get in touch, and how we handle it.
            </p>
            <span className="privacy_updated">Last updated: September 30, 2026</span>
          </header>

          <div className="privacy_layout">
            <nav className="privacy_nav" aria-label="Privacy policy sections">
              <span>ON THIS PAGE</span>
              {sections.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="privacy_content">
              <section id="information">
                <h2>Information we collect</h2>
                <p>
                  If you contact us directly by email, phone, or WhatsApp, we
                  receive the information you choose to share. This may include
                  your name, contact details, company or brand, and details
                  about your project or enquiry.
                </p>
                <p>
                  The enquiry form currently displayed on this website is not
                  connected to a form-processing service and does not deliver
                  submissions to us. Please contact us using the details below
                  instead.
                </p>
                <p>
                  Our website hosting provider may also process basic technical
                  information, such as an IP address, browser or device details,
                  and request time, in server logs used to deliver and protect
                  the site. The exact information and retention period depend
                  on the provider.
                </p>
              </section>

              <section id="use">
                <h2>How we use information</h2>
                <p>We use information we receive to:</p>
                <ul>
                  <li>Respond to questions and discuss potential projects.</li>
                  <li>Provide services and communicate with clients.</li>
                  <li>Maintain, troubleshoot, and protect our website.</li>
                  <li>Meet applicable legal and contractual obligations.</li>
                </ul>
              </section>

              <section id="sharing">
                <h2>When information is shared</h2>
                <p>
                  We may share relevant information with service providers who
                  help us operate our website or communicate with you, when
                  required by law, or when necessary to protect our rights and
                  the security of our services. We do not sell personal
                  information.
                </p>
              </section>

              <section id="retention">
                <h2>Storage and retention</h2>
                <p>
                  We keep enquiry and client information only for as long as it
                  is reasonably needed for the purpose it was provided, to
                  maintain business records, or to meet legal requirements.
                  Hosting providers may retain technical logs according to
                  their own retention practices.
                </p>
                <p>
                  We take reasonable steps to protect information, but no method
                  of transmission or electronic storage can be guaranteed to be
                  completely secure.
                </p>
              </section>

              <section id="cookies">
                <h2>Cookies and site technology</h2>
                <p>
                  The current website does not include analytics or advertising
                  trackers in its application code. Our hosting provider may
                  use essential technologies to deliver or secure the site.
                  You can manage cookies through your browser settings.
                </p>
              </section>

              <section id="choices">
                <h2>Your choices</h2>
                <p>
                  You can contact us to ask about, correct, or request deletion
                  of information you have shared with us. We may need to retain
                  some information where required by law or for legitimate
                  business records. Your rights depend on the laws that apply
                  to you.
                </p>
              </section>

              <section id="third-parties">
                <h2>Third-party websites</h2>
                <p>
                  Our website may link to external websites and services,
                  including WhatsApp and social networks. Those services have
                  their own privacy policies and practices; this policy does
                  not cover them.
                </p>
              </section>

              <section id="children">
                <h2>Children's privacy</h2>
                <p>
                  This website and our services are intended for businesses and
                  adults. We do not knowingly seek to collect personal
                  information from children.
                </p>
              </section>

              <section id="updates">
                <h2>Policy updates</h2>
                <p>
                  We may update this policy as our website or practices change.
                  The latest version will be published on this page with its
                  updated date.
                </p>
              </section>

              <section id="contact">
                <h2>Contact us</h2>
                <p>
                  For privacy questions or requests, contact Wave Solution at
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

export default Privacy;
