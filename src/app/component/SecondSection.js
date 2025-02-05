import Image from "next/image";
import React from "react";
import girl from "../images/girl.png";
import boy from "../images/boy.png";
import youImg from "../images/youImg.png";

const SecondSection = () => {
  return (
    // navbar-dark bg-dark
    <section className="hero-section backGround_cls section_area">
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="Virtual main image">
              <Image
                src={girl}
                alt="hero image"
                className="girl_g"
                objectFit="cover"
              />
              <Image
                src={boy}
                alt="hero image"
                className="boy_g"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-text second_section_right_container">
              <h1 className="heading_text">
                New Experience In
                <br /> Playing Game
              </h1>
              <p className="sub_text py-4 text-align-justify">
                You can try playing the game with a new style and of course a
                more real feel, like you are the main character in your game and
                adventure in this new digital world.
              </p>

              <div className="py-8 d-flex align-items-center">
                <button className="sign_up_btn" style={{ marginRight: "2rem" }}>
                  Get it Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundImage">
        <h1 className="heading_text font-24">
          Awesome experiences with <br />
          virtual reality world
        </h1>
        <Image
          src={youImg}
          alt="you image"
          className="you_img"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default SecondSection;
