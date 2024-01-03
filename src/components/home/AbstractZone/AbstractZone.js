import React from "react";
import Slider from "react-slick";
import Heading from "../ImageCard/Heading";
import ImageCard from "../ImageCard/ImageCard";
import {
  AbstractOne,
  AbstractTwo,
  AbstractThree,
  AbstractFour,
  AbstractFive,
  AbstractSix,
  // AbstractSeven,
  // AbstractEight,
  AbstractNine,
  AbstractTen,
  AbstractEleven,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const AbstractZone = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <div className="w-full flex justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Heading heading="🤔 Abstract Photography" />
      </div>

      <div className="py-6">
        <Slider {...settings}>
          <div className="px-2">
            <ImageCard _id="100001" img={AbstractOne} />
          </div>
          <div className="px-2">
            <ImageCard _id="100002" img={AbstractTwo} />
          </div>
          <div className="px-2">
            <ImageCard _id="100003" img={AbstractThree} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={AbstractFour} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={AbstractFive} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={AbstractSix} />
          </div>
          {/* <div className="px-2">
            <ImageCard _id="100005" img={AbstractSeven} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={AbstractEight} />
          </div> */}
          <div className="px-2">
            <ImageCard _id="100005" img={AbstractNine} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={AbstractTen} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={AbstractEleven} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AbstractZone;
