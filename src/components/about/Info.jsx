import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bx-briefcase about__icon' ></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle"> 3 Years</span>
      </div>

      <div className="about__box">
      <i class='bx bxl-visual-studio about__icon' ></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5 Projects</span>
      </div>

      <div className="about__box">
      <i class='bx bxs-graduation about__icon'></i>
        <h3 className="about__title">GPA</h3>
        <span className="about__subtitle">3.4/4.0</span>
      </div>
    </div>
  )
}

export default Info