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

  const IntuitContent = () => (
    <div>
      <h3>Software Engineer</h3>
      <p className="subtitle-location">Intuit, Inc. (Jan 2025 – Present)</p>
      <br/>
      <h4>Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Build and maintain Python (FastAPI) microservices and React.js frontend for an AI-powered financial platform processing 10K+ daily transactions across billing, payroll and invoicing, scaling the system to serve 100K+ active users.</li>
        <li>Integrate Generative AI models (GPT-4, BERT) via LangChain into cash flow forecasting and invoice optimization, boosting user retention by 17% through personalized financial insights.</li>
        <li>Containerize services with Docker on AWS ECS and architect CI/CD pipelines (Spinnaker, CodePipeline) with a 6-engineer team, improving uptime from 99.2% to 99.8% and cutting deploy time from 4 hours to 25 minutes.</li>
      </ul>
    </div>
  )

  const ZohoContent = () => (
    <div>
      <h3>Software Engineer</h3>
      <p className="subtitle-location">Zoho Corporation (Jun 2020 – Aug 2023)</p>
      <br/>
      <h4>Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Developed a multi-tenant SaaS purchase order system serving 500+ enterprise clients, reducing manual procurement time by 30% and increasing order accuracy by 18%.</li>
        <li>Engineered 4 production REST APIs (Order, Vendor, Approval, Reporting) using Node.js and Express, reducing API latency by 12% and increasing throughput by 8%.</li>
        <li>Designed 20+ reusable React components and role-based analytics dashboards, improving task completion efficiency by 15% and cutting approval turnaround by 12%.</li>
        <li>Optimized MySQL and PostgreSQL across 2M+ records using Python scripts for indexing analysis and schema refactoring, improving overall query and report performance by 14%.</li>
      </ul>
    </div>
  )

  const RAGContent = () => (
    <div>
      <h3>GenAI Document Intelligence (RAG Pipeline)</h3>
      <p className="subtitle-location">Python, FastAPI, LangChain, GPT-4, Pinecone, AWS Lambda · 2024</p>
      <br/>
      <ul className="custom-bullets">
        <li>Built a RAG platform for natural-language document querying with 92% answer accuracy. Async FastAPI backend with LangChain achieves &lt;1.5s latency, deployed serverless on Lambda at 40% lower cost.</li>
        <li>Implemented Pinecone vector search with OpenAI embeddings for semantic retrieval across 10K+ documents, with SSE streaming to React.js frontend and source citations for every response.</li>
      </ul>
    </div>
  )

  const FintechContent = () => (
    <div>
      <h3>Real-Time Fintech Dashboard</h3>
      <p className="subtitle-location">React, TypeScript, Kafka, PostgreSQL, Redis, AWS EKS · 2024</p>
      <br/>
      <ul className="custom-bullets">
        <li>Engineered a real-time analytics dashboard over Kafka with sub-100ms latency for anomaly detection. Redis caching and read replicas reduced DB load by 45% and enabled 3x concurrent user growth.</li>
        <li>Developed portfolio tracking and P&amp;L reporting modules with React and TypeScript, using WebSockets for live data feeds and Prometheus + Grafana for full pipeline observability.</li>
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
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-code-branch qualification__icon"></i>
            Projects
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

        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M.S. Computer Science</h3>
                <span className="qualification__subtitle">
                  University of Central Missouri, Lee Summit
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 – May 2025
                </div>
                <span className="qualification__subtitle">GPA: 3.4/4.0</span>
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
                <h3 className="qualification__title">B.S. Computer Science</h3>
                <span className="qualification__subtitle">
                  JNTUK, Andhra Pradesh, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2017 – Jun 2021
                </div>
              </div>
            </div>
          </div>

          {/* Professional Work */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div onClick={() => openModal(<IntuitContent />)}>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Intuit, Inc.</span>
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
              <div onClick={() => openModal(<ZohoContent />)}>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Zoho Corporation</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2020 – Aug 2023
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div onClick={() => openModal(<RAGContent />)}>
                <h3 className="qualification__title">GenAI Document Intelligence</h3>
                <span className="qualification__subtitle">Python, FastAPI, LangChain, GPT-4, Pinecone</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
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
              <div onClick={() => openModal(<FintechContent />)}>
                <h3 className="qualification__title">Real-Time Fintech Dashboard</h3>
                <span className="qualification__subtitle">React, TypeScript, Kafka, PostgreSQL, Redis</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
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
