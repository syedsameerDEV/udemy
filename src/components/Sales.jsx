import React from "react";
import sales from "../assets/images/sales.jpeg"

const Sales = () => {
  return (
    <div class="sale-img">
      <img src={sales} alt="" />
      <div class="sale-img__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>
          Get the top courses for just 499. Just one day to save but a lifetime
          to learn
        </p>
      </div>
    </div>
  );
};

export default Sales;
