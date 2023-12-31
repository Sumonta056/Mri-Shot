import React from "react";
import {
  PotrayHerImgOne,
  PotrayHerImgTwo,
  PotrayHerImgThree,
} from "../../../assets/images/index";
import Image from "../../Layouts/Image";
import Heading from "../ImageCard/Heading";

const PotrayHer = () => {
  return (
    <div className="h-3/4">
      <div className="w-full flex justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Heading heading="🌱 A Walk of Adventure" />
      </div>
      <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
        <div className="w-2/3 md:w-2/3 lg:w-1/2 h-full">
          <Image
            className="h-full w-full object-cover"
            imgSrc={PotrayHerImgOne}
          />
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
          <div className="h-1/2 w-full">
            <Image className="w-full object-cover" imgSrc={PotrayHerImgTwo} />
          </div>
          <div className="h-1/2 w-full">
            <Image className="w-full object-cover" imgSrc={PotrayHerImgThree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotrayHer;
