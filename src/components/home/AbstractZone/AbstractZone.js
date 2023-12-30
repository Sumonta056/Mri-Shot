import React from "react";
import Slider from "react-slick";
import Heading from "../ImageCard/Heading";
import ImageCard from "../ImageCard/ImageCard";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  bestSellerFive,
  bestSellerSix,
  bestSellerSeven,
  bestSellerEight,
  bestSellerNine,
  bestSellerTen,
  bestSellerEleven,
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
            <ImageCard _id="100001" img={bestSellerOne} />
          </div>
          <div className="px-2">
            <ImageCard _id="100002" img={bestSellerTwo} />
          </div>
          <div className="px-2">
            <ImageCard _id="100003" img={bestSellerThree} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={bestSellerFour} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={bestSellerFive} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={bestSellerSix} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={bestSellerSeven} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={bestSellerEight} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={bestSellerNine} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={bestSellerTen} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={bestSellerEleven} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AbstractZone;
