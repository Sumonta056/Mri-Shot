import React from "react";
import Slider from "react-slick";
import Heading from "../ImageCard/Heading";
import ImageCard from "../ImageCard/ImageCard";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
  newArrSix,
  newArrSeven,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const FlowerZone = () => {
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
    <div className="w-full pb-3">
      <div className="w-full flex justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Heading heading="🌺 Flower Photography" />
      </div>

      <div className="py-6">
        <Slider {...settings}>
          <div className="px-2">
            <ImageCard _id="100001" img={newArrOne} />
          </div>
          <div className="px-2">
            <ImageCard _id="100002" img={newArrTwo} />
          </div>
          <div className="px-2">
            <ImageCard _id="100003" img={newArrThree} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={newArrFour} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={newArrFive} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={newArrSix} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={newArrSeven} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FlowerZone;
