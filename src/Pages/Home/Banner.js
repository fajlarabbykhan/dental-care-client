import React from "react";
import BannerImg from "../../assets/images/BannerImg.jpg";
const Banner = () => {
  return (
    <div className="hero min-h-screen px-12 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-2">
          <h1 className="text-5xl font-bold">Peace begins with a smile</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In delenitiiiiiiiiiiii eaque aut
            repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
