import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiDatabase,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";
import "../style/Academy.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const courses = [
  {
    number: "01",
    icon: <FiMonitor />,
    title: "Frontend Development",
    description:
      "Create responsive, interactive websites by turning designs into accessible, polished user experiences.",
    topics: ["HTML, CSS & JavaScript", "React fundamentals", "Responsive UI"],
    label: "Build the interface",
  },
  {
    number: "02",
    icon: <FiDatabase />,
    title: "Backend Development",
    description:
      "Learn how server-side applications work, from designing APIs to managing data and building reliable services.",
    topics: ["Server-side programming", "APIs & integrations", "Databases"],
    label: "Power the product",
  },
  {
    number: "03",
    icon: <FiLayers />,
    title: "Full-Stack Development",
    description:
      "Bring frontend and backend together to build complete web applications from the user interface to the database.",
    topics: [
      "Frontend & backend",
      "Full-stack applications",
      "Deployment basics",
    ],
    label: "Build end to end",
  },
];

const internships = [
  {
    title: " Front-End Development Intern",
    description:
      "Learn to build responsive, interactive user interfaces and modern web experiences using industry-standard technologies.",
    skills: "HTML · CSS · JavaScript · React",
  },

  {
    title: " Back-End Development Intern",
    description:
      "Learn to develop server-side applications, build REST APIs, manage databases, and implement secure backend logic.",
    skills: "Node.js · Express.js · MySQL",
  },
  {
    title: "Full-Stack Development Intern",
    description:
      "Work across the complete web development process, from designing user interfaces to building APIs and integrating databases.",
    skills: "React · Node.js · Express.js · MySQL",
  },
];

function Academy() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const getDate = new Date();

    const date = getDate.toDateString();

    formDatab.append("date", date);
    formDatab.append("type", "trainning_form");

    fetch(
      "https://script.google.com/macros/s/AKfycbwrcOHLX9NYEirRvmOFbDLJASmYCvilxhbi_1wxoFiSzrwehSZgznYn3coW4gUWDfM_ZQ/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsSubmitting(false); // Reset submitting state
        toast.success("Form submitted successfully");
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false); // Reset submitting state even on error
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <div className="academy_page">
      <Helmet>
        <title>Wave Academy | Courses & Internships</title>
        <meta
          name="description"
          content="Build practical frontend, backend, and full-stack development skills with Wave Academy courses and hands-on internship opportunities."
        />
        <link rel="canonical" href="https://wavesolutions.in/academy" />
      </Helmet>

      <section className="academy_hero">
        <div className="academy_cont">
          <div className="academy_eyebrow">
            <span />
            WAVE ACADEMY
          </div>
          <h1>
            Learn by doing.
            <br />
            <em>Grow by creating.</em>
          </h1>
          <p className="academy_hero_copy">
            Get hands-on with the skills shaping the digital world. Learn
            through practical courses, then take your next step with an
            internship at Wave.
          </p>
          <div className="academy_hero_actions">
            <a
              className="academy_button academy_button_primary"
              href="#courses"
            >
              Explore courses <FiArrowRight />
            </a>
            <a className="academy_text_link" href="#internships">
              Find an internship <FiArrowDown />
            </a>
          </div>
          <div className="academy_hero_note">
            <span className="academy_note_line" />
            Practical learning for people ready to make things happen.
          </div>
        </div>
        <a
          className="academy_scroll"
          href="#courses"
          aria-label="Scroll to courses"
        >
          <FiArrowDown />
        </a>
      </section>

      <section className="academy_courses academy_section" id="courses">
        <div className="academy_cont">
          <div className="academy_section_intro">
            <div>
              <div className="academy_kicker">01 — COURSES</div>
              <h2>
                Skills you can
                <br />
                <em>put to work.</em>
              </h2>
            </div>
            <p>
              Skip the theory-only approach. Explore practical learning paths
              built around the work digital teams do every day.
            </p>
          </div>

          <div className="academy_course_grid">
            {courses.map((course) => (
              <article className="academy_course_card" key={course.number}>
                <div className="academy_card_topline">
                  <span className="academy_card_number">{course.number}</span>
                  <span className="academy_card_icon">{course.icon}</span>
                </div>
                <span className="academy_card_label">{course.label}</span>
                <h3>{course.title}</h3>
                <p className="academy_card_description">{course.description}</p>
                <ul>
                  {course.topics.map((topic) => (
                    <li key={topic}>
                      <FiCheck />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  className="academy_card_link"
                  to="/contact"
                  aria-label={`Enquire about ${course.title}`}
                >
                  Enquire about this course <FiArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy_internships academy_section" id="internships">
        <div className="academy_cont">
          <div className="academy_internship_panel">
            <div className="academy_internship_heading">
              <div>
                <div className="academy_kicker">
                  <FiBriefcase /> 02 — INTERNSHIPS
                </div>
                <h2>
                  Make your
                  <br />
                  <em>next move.</em>
                </h2>
              </div>
              <p>
                Put what you know into practice. Work alongside our team, learn
                from real projects, and build experience that moves you forward.
              </p>
            </div>

            <div className="academy_internship_list">
              {internships.map((internship, index) => (
                <article
                  className="academy_internship_item"
                  key={internship.title}
                >
                  <span className="academy_internship_index">0{index + 1}</span>
                  <div className="academy_internship_details">
                    <h3>{internship.title}</h3>
                    <p>{internship.description}</p>
                    <span>{internship.skills}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="academy_internship_link"
                    aria-label={`Apply for ${internship.title}`}
                  >
                    <FiArrowUpRight />
                  </Link>
                </article>
              ))}
            </div>

            <div className="academy_internship_footer">
              <p>Ready to learn on the job?</p>
              <Link
                className="academy_button academy_button_primary"
                to="/contact"
              >
                Apply for an internship <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="academy_cta">
        <div className="academy_cont academy_cta_inner">
          <p>YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Curious? Let’s
            <em> talk.</em>
          </h2>
          <p className="academy_cta_copy">
            Tell us what you’re interested in and we’ll help you find the right
            next step.
          </p>
          <form className="academy_enquiry_form" onSubmit={Submit}>
            <div className="academy_form_fields">
              <div className="academy_form_group">
                <label htmlFor="academy-name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="academy_form_group">
                <label htmlFor="academy-phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 90000 00000"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="academy_form_group">
                <label htmlFor="academy-email">Email</label>
                <input
                  id="academy-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="academy_form_group">
                <label htmlFor="academy-course">Course / Internship</label>
                <select
                  id="course_internship"
                  name="course_internship"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Choose a course or internship
                  </option>
                  {courses.map((course) => (
                    <option key={course.number} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            <button
              className="academy_button academy_button_primary academy_form_submit"
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <FiArrowRight />
            </button>
            <span className="academy_form_note">
              Submitting opens an email draft addressed to Wave Academy.
            </span>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Academy;
