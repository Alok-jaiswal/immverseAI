import Image from "next/image";
import React from "react";
import dImg1 from "../images/dImg1.png";
import dImg2 from "../images/dImg2.png";
import dImg3 from "../images/dImg3.png";
import dImg4 from "../images/dImg4.png";
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";

const ThirdSection = () => {
  const reviewData = [
    {
      text: `“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”`,
      name: "Denny Hilguston",
      tag: "@denny.hill",
      photoUrl: pro1,
    },
    {
      text: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
      name: "Vani Pandey",
      tag: "@vani.pandey",
      photoUrl: pro2,
    },
    {
      text: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
      name: "milly Singh",
      tag: "@milly.singh",
      photoUrl: pro3,
    },
  ];
  return (
    // navbar-dark bg-dark
    <section className="hero-section backGround_cls section_area">
      <div className="shape_round"></div>
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
            <div className="review_card_wrapper">
              {reviewData.map((item, index) => (
                <div className="review_card_box" key={index}>
                  <p className="sub_text_card">
                    starstar<span>star</span>
                  </p>
                  <p className="review_text">{item.text}</p>
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src={item.photoUrl}
                        alt="photo"
                        className="profile_img"
                        // objectFit="cover"
                        style={{ objectFit: "cover" }}
                        width={15}
                        height={15}
                      />
                    </div>
                    <div>
                      <p className="font-12 p-0 m-0">{item.name}</p>
                      <p
                        className="font-12 p-0 m-0"
                        style={{ color: `rgba(235, 68, 104, 1)` }}
                      >
                        {item.tag}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
