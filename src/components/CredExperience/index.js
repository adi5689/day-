import React from "react";
import "./credExperience.css";
import Button from "../common/Button";
import Coupon from "../Coupon/Coupon";

const CredExperience = () => {
  const couponsData =[
    {
      title: "Movie Night",
      frontTitle: "Coupon 1",
      code: "kittuMovieNight",
      description: "->You get to choose any movie/series of your choice and we can watch it together!",
    },
    {
      title: "Virtual Date",
      frontTitle: "Coupon 2",
      code: "kittuVdate",
      description: "->You get to choose any setup of your choice.(coffee, tea, food)",
    },
    {
      title: "Pamper Session",
      frontTitle: "Coupon 3",
      code: "kittuPamperMe",
      description: "->Whenever you feel low, just use this one.",
    },
    {
      title: "Deep Talk",
      frontTitle: "Coupon 4",
      code: "kittuDeep",
      description: "->Use is whenever you feel like having a deep connection!",
    }
  ];
  return (
    <div className="cred-experience">
      <div className="max-width">
        <div className="photo-section-child cred-exp-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-exp-heading">
              Coupons
            </div>
            <div className="photo-section-subheading">
              You get 4 coupons as a birthday present babe! 
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-desc cred-exp-desc">
              Redeem them anytime you want, how many times you want, its got lifetime validity.
              Ciao! 
            </div>
            <div className="coupons">
            {couponsData.map((coupon, index) => (
                <Coupon key={index} couponContent={coupon} />
              ))}
            </div>
            <div className="home-btn2">
              <a href="/">Back Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredExperience;
