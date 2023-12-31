import React from "react";
import {
  godzone1,
  godzone2,
  godzone3,
  godzone4,
} from "../../../assets/images/index";
import Image from "../../Layouts/Image";
import Heading from "../ImageCard/Heading";

const GodZone = () => {
  return (
    <div className="w-3/4 mx-auto px-6">
      <div className="w-full flex justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Heading heading="😊 Divine Frames: Capturing Devotion" />
      </div>
      <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
        <div className="w-2/3 md:w-2/3 lg:w-1/3 h-full">
          <Image className="h-full w-full object-cover" imgSrc={godzone1} />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3 h-auto flex flex-col gap-4 lg:gap-10">
          <div className="h-1/2 w-full">
            <Image className="w-full object-cover" imgSrc={godzone2} />
          </div>
          <div className="h-1/2 w-full">
            <Image className="w-full object-cover" imgSrc={godzone3} />
          </div>
        </div>
        <div className="w-2/3 md:w-2/3 lg:w-1/3 h-full">
          <Image className="h-full w-full object-cover" imgSrc={godzone4} />
        </div>
      </div>
    </div>
  );
};

export default GodZone;
