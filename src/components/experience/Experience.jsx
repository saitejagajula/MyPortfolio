import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const openModal = (content) => { 
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  }

  // const MastersContent = () => (
  //   <div>
  //     <h3>Masters in Computer Science</h3>
  //     <p className="subtitle-location">University of Central Missouri, Lee summit (Aug 2023 - May 2025)</p>
  //     <br/>
  //     <h4>Key Focus Areas:</h4>
  //     <ul className="custom-bullets">x
  //       <li>Data Structures and Algorithms</li>
  //       <li>Advanced Data Science</li>
  //       <li>Compilers</li>
  //       <li>System Design</li>
  //     </ul>
  //     <p className="main-info">This program allowed me to develop expertise in various advanced
  //       computer science topics such as advanced data structures, algorithms, compilers, advanced data science topics including information retrieval and big data techniques. My research is focused on incremental compilation of compilers. I'm developing a project that is a proof of concept for a compiler that can handle incremental compilation effectively. Built a big data project on spatial data intersection and developed GPU and AI projects. </p>
  //   </div>
  // )

  // const BachelorsContent = () => (
  //   <div>
  //     <h3>Bachelors in Computer Science</h3>
  //     <p className="subtitle-location">SRKR Engineering College (Aug 2017 - Jul 2021)</p>
  //     <br/>
  //     <h4>Key Focus Areas:</h4>
  //     <ul className="custom-bullets">
  //       <li>Data Structures</li>
  //       <li>PL/SQL and Database Design</li>
  //       <li>Cloud Computing</li>
  //     </ul>
  //     <p className="main-info">During my undergraduate studies, I focused on developing core Computer Science topics such as programming languages, data structures, algorithms, databases, cloud technologies, fundamentals of data science, IoT, cyber security, mathematics and statistics. I developed various projects that covered wide range of tech stacks during my tenure that helped me gain a hands-on knowledge with building tools of software.</p>
  //   </div>
  // )

  const TeachingAssistantContent = () => (
    <div>
      <h3>Frontend Developer</h3>
      <p className="subtitle-location">HCL TECL (December 2021- July 2023)</p>
      <br/>
      <p>Skills gained:Html,CSS,JS,Bootstrap,React.js, React Hooks, Context API, Redux Toolkit </p>
      <br/>
      <h4>Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Developed web and mobile-based applications using React and React Native with JavaScript (ES6+) and JSX syntax.</li>
<li>Responsible to style, look and feel of the web page with SASS that extends CSS with dynamic behavior such as variables, mixins, operations, and functions.</li>
<li>Took ownership of building scalable React 18+ components using functional patterns, React Router, Hooks, and Context API for managing global state.</li>
<li>Designed and implemented Formik + Yup-powered form modules with complex validation for scheduling, registration, and feedback workflows.</li>
<li>Built modular UI components using Material-UI and SCSS modules to maintain a consistent design language across modules.</li>
<li>Used Redux Toolkit for state management and React Query for optimized API caching and background updates in patient dashboards.</li>
<li>Integrated RESTful APIs to fetch lab test reports, appointment details, and alerts in real time using Axios with token-based authentication.</li>
<li>Developed interactive visualizations and real-time health trend charts using Chart.js and custom SVG components.</li>
<li>Enhanced accessibility and performance by implementing semantic HTML, ARIA tags, keyboard navigation, and lazy loading techniques.</li>
<li>Improved UI performance with React.memo, dynamic imports, and Lighthouse-based performance optimizations.</li>
</ul>
    </div>
  )

  const AnalystContent = () => (
    <div>
      <h3>Software Developer</h3>
      <p className="subtitle-location">HCl Tech ( June 2020 – November 2021)</p>
      <br/>
      <p>Skills gained:HTML,CSS,Bootstrap,Javascript,Git,GitHub,React.js </p>
      <br/>
      <h4>Key Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Participated in Waterfall methodology with structured milestones, supporting analysis, UI prototyping, and basic testing.</li>
<li>Built simple web pages using HTML, CSS, JavaScript, and jQuery for appointment booking features.</li>
<li>Implemented client-side logic using AJAX and handled form submissions with Java Servlets.</li>
<li>Worked on integrating SOAP web services with JAX-WS to fetch lab reports from legacy systems.</li>
<li>Handled XML for SOAP message structure and reading application configurations.</li>
<li>Assisted in writing simple SQL queries in PostgreSQL to support appointment and patient data retrieval.</li>
<li>Supported backend test cases using JUnit and Mockito under guidance.</li>
<li>Used Git and GitHub for version control, managing feature branches and participating in code reviews.</li>

       
      </ul>
    </div>
  )

  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Professional Work
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="    qualification__sections">
          <div
            className={`
             ${toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"}
            `}
          >
            <div className=" qualification__data">
              <div>
                <h3 className="qualification__title">Masters in Computer Science</h3>
                <span className="qualification__subtitle">
                  University of Central Missouri, Lee Summit
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - May 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bachelors in Computer Science</h3>
                <span className="qualification__subtitle">
                  Gudlavalleru engineering college
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2017 - May 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div onClick={() => openModal(<TeachingAssistantContent />)}>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                HCL Tech  Client:Quest Diagnostics
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> December 2021- July 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div onClick={() => openModal(<AnalystContent />)}>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">HCL Tech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2020 – November 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>&times;</span>
            {modalContent}
          </div>
        </div>
      )}
    </section>
  
  )
}

export default Experience