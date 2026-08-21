import "../style/Book.scss";

const Book = () => {
  return (
    <section className="book_parent parent">
      <div className="book_cont cont">

       
        <div className="book_left">

          <div className="book_tag">
            <span></span>
            BOOK A CALL
          </div>

          <h2>
            Tell us what
            <br />
            you need.
            <br />
            <em>We’ll be straight with you.</em>
          </h2>

          <p className="book_desc">
            Tell us about your business and what you're looking to build.
            We'll understand your requirements, suggest the right solution,
            and help you take the next step.
          </p>


         
          <div className="book_contacts">

            <a href="https://wa.me/918459188254" className="contact_card">
              <div className="contact_icon">
                <span>◉</span>
              </div>

              <div className="contact_content">
                <strong>WhatsApp</strong>
                <small>Fastest reply · Usually within the hour</small>
              </div>
            </a>


            <a href="tel:+918459188254" className="contact_card">
              <div className="contact_icon">
                <span>⌕</span>
              </div>

              <div className="contact_content">
                <strong>+91 84591 88254</strong>
                <small>Mon–Sat · 10am–7pm IST</small>
              </div>
            </a>


            <a href="mailto:info@wavesolution.com" className="contact_card">
              <div className="contact_icon">
                <span>✉</span>
              </div>

              <div className="contact_content">
                <strong>info@wavesolution.com</strong>
                <small>For proposals and detailed briefs</small>
              </div>
            </a>

          </div>

        </div>


        <div className="book_right">

          <div className="book_form">

            <div className="form_heading">
              <h3>Send us a brief</h3>

              <p>
                The more detail you give, the more useful our first reply
                will be.
              </p>
            </div>


            <form>


              <div className="form_row">

                <div className="form_group">
                  <label>
                    Your name <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                  />
                </div>


                <div className="form_group">
                  <label>
                    Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>

              </div>



              <div className="form_row">

                <div className="form_group">
                  <label>
                    Phone / WhatsApp <span>*</span>
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 90000 00000"
                  />
                </div>


                <div className="form_group">
                  <label>Company or brand</label>

                  <input
                    type="text"
                    placeholder="Your brand"
                  />
                </div>

              </div>



              <div className="form_group">

                <label>What are you interested in?</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Not sure yet — help me choose
                  </option>

                  <option value="website">
                    Website Development
                  </option>

                  <option value="software">
                    Software Development
                  </option>

                  <option value="design">
                    UI/UX Design
                  </option>

                  <option value="digital">
                    Digital Solutions
                  </option>
                </select>

              </div>



              {/* <div className="form_group">

                <label>Rough monthly budget</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select your budget
                  </option>

                  <option value="25000">
                    Under ₹25,000 / month
                  </option>

                  <option value="50000">
                    ₹25,000 – ₹50,000 / month
                  </option>

                  <option value="100000">
                    ₹50,000 – ₹1,00,000 / month
                  </option>

                  <option value="100000+">
                    ₹1,00,000+ / month
                  </option>

                </select>

              </div> */}



              <div className="form_group">

                <label>
                  What do you need? <span>*</span>
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us where you are now, what's not working, and what a good outcome looks like."
                ></textarea>

              </div>


              <button type="submit" className="book_submit">
                Send enquiry
                <span>→</span>
              </button>


              <p className="form_note">
                Prefer to talk?{" "}
                <a href="https://wa.me/918459188254">
                  WhatsApp us
                </a>{" "}
                or book a call. We never share your details.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Book;