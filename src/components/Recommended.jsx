import React from "react";
import img1 from "../assets/images/img1.webp"
import img2 from "../assets/images/img2.webp"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.avif"
const Recommended = () => {
  return (
    <div class="recommended">
      <h2 class="recommended__title">All the skills you need in one place</h2>
      <p>
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>
      <div class="recommended__container">
        <div class="course-card">
          <img src={img1} alt="" />
          <p>The Complete Web Developer Course 3.0</p>
          <p>Col steele</p>
          <p>4.5/5 ⭐⭐⭐⭐</p>
          <p>
            449 <del>1000</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img2} alt="" />
          <p>The Complete javaScript Course</p>
          <p>Col steele</p>
          <p>4.5/5 ⭐⭐⭐⭐</p>
          <p>
            599 <del>1500</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img3} alt="" />
          <p>The Complete Python Course</p>
          <p>Col steele</p>
          <p>3.0/5 ⭐⭐⭐</p>
          <p>
            449 <del>1000</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img4} alt="" />
          <p>The Complete reactjs Course</p>
          <p>Col steele</p>
          <p>4.0/5 ⭐⭐⭐⭐</p>
          <p>
            559 <del>1500</del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
