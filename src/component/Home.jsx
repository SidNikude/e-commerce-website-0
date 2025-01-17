import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="Background"
          height="600px"
        />
        <div className="container">
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p class="card-text fw-bold lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
