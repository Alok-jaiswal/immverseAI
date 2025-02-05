import Image from "next/image";
import React from "react";
import img1 from "../images/Virtual_main.png";
import colaj1 from "../images/Colaj-img.png";

const HeroSection = () => {
  return (
    // navbar-dark bg-dark
    <section className="hero-section backGround_cls section_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1 className="heading_text">
                Let’s Explore
                <br />
                Three-Dimensional
                <br />
                visual
              </h1>
              <p className="sub_text py-4">
                With virtual technology you can see the digital world feel more
                real and you can play the game with a new style.
              </p>

              <div className="py-8 d-flex align-items-center">
                <button className="sign_up_btn" style={{ marginRight: "2rem" }}>
                  Get it Now
                </button>
                <div className="text_f">Explore Device</div>
              </div>

              <div className=" my-5  d-flex align-items-center">
                <Image src={colaj1} alt="photos" width={230} height={60} />
                <div>
                  <ul className="text_f font-18">
                    <li>400k people online</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="Virtual main image">
              <Image
                src={img1}
                alt="hero image"
                //    width={500} height={500}
                className="main_img"
                objectFit="cover"
                // fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
