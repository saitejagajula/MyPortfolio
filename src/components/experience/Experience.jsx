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
      <h3>Full Stack Software Developer  </h3>
      <p className="subtitle-location">Intuit, Inc (01/2025 – Present)</p>
      <br/>
      <p>React, TypeScript, Python (FastAPI), microservices architecture, event-driven systems (Apache Kafka), PostgreSQL, cloud-native development on AWS, Docker and containerization, secure authentication (OAuth 2.0, OpenID Connect, AWS IAM), real-time financial systems, Generative AI and LLM API integration, scalable backend design, CI/CD and production deployments.
 </p>
      <br/>
      <h4>Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Designed and developed AI-driven small business financial management platform using React frontend, Python (FastAPI) backend, PostgreSQL, AWS,
and Kafka, leveraging Generative AI and transformer LLMs for cash flow forecasting, invoice optimization, and product recommendations, increasing
engagement 15%.</li>
<li>
      Built scalable Python microservices supporting billing, payroll, invoicing, and accounting dashboards, integrating with PostgreSQL and AWS services,
reducing service errors by 10%, improving system reliability, for high performance for concurrent real-time financial transactions and analytics.
    </li>
    <li>
     Integrated Generative AI and transformer LLMs for transaction classification, expense prediction, personalized insights, and revenue forecasting,
optimizing user decision-making and retention, while enabling predictive financial recommendations and smarter business financial management,
boosting retention by 17%.
    </li>
    <li>
     Implemented secure authentication and authorization using OAuth2, OpenID Connect, AWS IAM, and custom token services, strengthening identity
management, reducing login failures by 8%, maintaining compliance with Intuit privacy and security standards, and enabling secure platform access.
    </li>
    <li>
     Containerized React frontend and Python backend using Docker and AWS ECS, enabling auto-scaling, high availability, observability via CloudWatch
and Splunk dashboards, improving platform reliability by 12%, supporting multi-region deployment, and ensuring operational efficiency and uptime.
    </li>
    <li>
    Developed automated CI/CD pipelines in collaboration with DevOps using Spinnaker, AWS CodePipeline, Maven, Jenkins, SonarQube, JUnit, and Jest,
handling deployments, zero-downtime weekly releases, improving code quality, team collaboration, and system scalability efficiently.
    </li>
   
</ul>
    </div>
  )

  const AnalystContent = () => (
    <div>
      <h3>Full Stack Software Developer</h3>
      <p className="subtitle-location"> Zoho Corporation Pvt. Ltd ( June 2020 – Aug 2023)</p>
      <br/>
      <p> JavaScript (ES6+), React, Redux, Node.js, Express.js, REST API design, role-based access control (RBAC), JWT authentication, MySQL and PostgreSQL, database optimization and query tuning, API performance optimization, unit and integration testing (Jest, Mocha), Dockerized services, SaaS application development. </p>
      <br/>
      <h4>Key Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>
      Developed responsive and accessible UI components using React and JavaScript,
      improving usability and cross-browser compatibility.
    </li>
    <li>
      Built and integrated backend services and REST APIs using Node.js and Express
      to support frontend workflows.
    </li>
    <li>
      Refactored legacy UI codebases into modular, component-based architectures,
      reducing technical debt and improving maintainability.
    </li>
    <li>
      Optimized SQL queries and API response flows, improving page responsiveness
      for high-traffic modules.
    </li>
    <li>
      Ensured accessibility compliance using semantic HTML and best practices for
      keyboard navigation and screen readers.
    </li>
    <li>
      Collaborated closely with product managers and QA teams to deliver features
      on schedule with reduced production issues.
    </li>
    <li>
      Used Git for version control and contributed to CI/CD workflows to support
      stable and consistent releases.
    </li>

       
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
                <h3 className="qualification__title">Full Stack Developer </h3>
                <span className="qualification__subtitle">
                  Intuit, Inc
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2025 – Present
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
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Zoho Corporation Pvt. Ltd</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2020 – Aug 2023 
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