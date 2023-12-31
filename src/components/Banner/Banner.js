import React, { useState } from "react";
import Slider from "react-slick";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
  banner11,
  banner12,
  banner13,
} from "../../assets/images";
import Image from "../Layouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full mx-auto px-20 py-4 bg-white">
      <Slider {...settings}>
        <div>
          <Image imgSrc={banner1} />
        </div>
        <div>
          <Image imgSrc={banner2} />
        </div>
        <div>
          <Image imgSrc={banner3} />
        </div>
        <div>
          <Image imgSrc={banner4} />
        </div>
        <div>
          <Image imgSrc={banner5} />
        </div>
        <div>
          <Image imgSrc={banner6} />
        </div>
        <div>
          <Image imgSrc={banner7} />
        </div>
        <div>
          <Image imgSrc={banner8} />
        </div>
        <div>
          <Image imgSrc={banner9} />
        </div>
        <div>
          <Image imgSrc={banner10} />
        </div>
        <div>
          <Image imgSrc={banner11} />
        </div>
        <div>
          <Image imgSrc={banner12} />
        </div>
        <div>
          <Image imgSrc={banner13} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
