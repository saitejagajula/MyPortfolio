import React from "react";

const Databases = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Data &amp; Messaging</h3>
    <div className="skills__box">
      <div className="skills__group">

        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>
        <div>
          <h3 className="skills__name">PostgreSQL / MySQL</h3>
          <span className="skills__level">Advanced</span>
        </div>
        </div>

        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>
        <div>
          <h3 className="skills__name">MongoDB</h3>
          <span className="skills__level">Advanced</span>
        </div>
        </div>

        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>
        <div>
          <h3 className="skills__name">Redis / Firebase</h3>
          <span className="skills__level">Intermediate</span>
        </div>
        </div>

        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>
        <div>
          <h3 className="skills__name">Apache Kafka</h3>
          <span className="skills__level">Intermediate</span>
        </div>
        </div>

        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>
        <div>
          <h3 className="skills__name">Snowflake / Airflow</h3>
          <span className="skills__level">Intermediate</span>
        </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Databases
