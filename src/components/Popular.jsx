import React from "react";
import img1 from "../assets/images/img1.webp"
import img2 from "../assets/images/img2.webp"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.avif"
const Popular = () => {
  return (
    <div class="popular">
      <div class="popular__title">
        <h2>Learners are viewing</h2>
      </div>
      <div class="popular__subtitle">
        <p>Pick the best fit</p>
      </div>
      <div class="popular__container">
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
          <img src={img3}alt="" />
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
        <div class="course-card">
          <img src={img1} alt="" />
          <p>The Complete FullStack Course 3.0</p>
          <p>Col steele</p>
          <p>4.5/5 ⭐⭐⭐⭐</p>
          <p>
            449 <del>1000</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img2} alt="" />
          <p>The Complete Angular Course</p>
          <p>Col steele</p>
          <p>4.5/5 ⭐⭐⭐⭐</p>
          <p>
            599 <del>1500</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img3} alt="" />
          <p>The Complete Java Course</p>
          <p>Col steele</p>
          <p>3.0/5 ⭐⭐⭐</p>
          <p>
            449 <del>1000</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img4} alt="" />
          <p>The Complete Nextjs Course</p>
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

export default Popular;
