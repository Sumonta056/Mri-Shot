import React from "react";
import Slider from "react-slick";
import Heading from "../ImageCard/Heading";
import ImageCard from "../ImageCard/ImageCard";
import {
  FlowerZoneOne,
  FlowerZoneTwo,
  FlowerZoneThree,
  FlowerZoneFour,
  FlowerZoneFive,
  FlowerZoneSix,
  FlowerZoneSeven,
  FlowerZoneOne1,
  FlowerZoneTwo1,
  FlowerZoneThree1,
  FlowerZoneFour1,
  FlowerZoneFive1,
  FlowerZoneSix1,
  FlowerZoneSeven1,
  FlowerZoneOne2,
  FlowerZoneTwo2,
  FlowerZoneThree2,
  FlowerZoneFour2,
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
            <ImageCard _id="100001" img={FlowerZoneOne} />
          </div>
          <div className="px-2">
            <ImageCard _id="100002" img={FlowerZoneTwo} />
          </div>
          <div className="px-2">
            <ImageCard _id="100003" img={FlowerZoneThree} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneSix} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={FlowerZoneFour} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneFive} />
          </div>

          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneSeven} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={FlowerZoneFour1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={FlowerZoneOne2} />
          </div>
        </Slider>
      </div>
      <div className="py-2">
        <Slider {...settings}>
          <div className="px-2">
            <ImageCard _id="100001" img={FlowerZoneOne1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100002" img={FlowerZoneTwo1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100003" img={FlowerZoneThree1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100004" img={FlowerZoneFour2} />
          </div>

          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneSix1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneSeven1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneTwo2} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneFive1} />
          </div>
          <div className="px-2">
            <ImageCard _id="100005" img={FlowerZoneThree2} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FlowerZone;
