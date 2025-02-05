import Image from "next/image";
import React from "react";
import dImg1 from "../images/dImg1.png";
import dImg2 from "../images/dImg2.png";
import dImg3 from "../images/dImg3.png";
import dImg4 from "../images/dImg4.png";

const ThirdSection = () => {
  return (
    // navbar-dark bg-dark
    <section className="hero-section backGround_cls section_area">
      <div className="container">
        <div className="row d-flex justify-content-center text-align-center">
          <div className="card_wrapper">
            <Image
              src={dImg1}
              alt="hero image"
              className="d_image p-3 mi_3"
              objectFit="cover"
            />
            <Image
              src={dImg2}
              alt="hero image"
              className="d_image p-3"
              objectFit="cover"
            />
            <Image
              src={dImg3}
              alt="hero image"
              className="d_image p-3 mi_3"
              objectFit="cover"
            />
            <Image
              src={dImg4}
              alt="hero image"
              className="d_image p-3"
              objectFit="cover"
            />
          </div>
          <div className="card_wrapper_center">
            <h1 className="heading_text font-24">What our clients say</h1>
            <p className="sub_text text-center pt-4 w-75">
              See what our customer say about us. It really matter for us. How
              good or bad we will make ir for evaluation to make EhyalLive
              better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
