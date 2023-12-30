import React from "react";
import Love from "./love.png";
import Follow from "./follow.png";
import Instagram from "./instagram.png";

const BannerBottom = () => {
  function handlediv() {
    window.location.href = "https://www.instagram.com/_sumonta_saha_/";
  }
  return (
    <div className="max-w-[1340px] mx-auto bg-white border-b-[1px] py-4 border-b-gray-200 px-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div
        className="max-w-container mx-auto h-30 flex flex-col md:flex-row justify-between items-center"
        onClick={handlediv}
      >
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-4xl text-center w-10">
            <img src={Love} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">More Than 3000 Likes</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-4xl text-center w-10">
            <img src={Follow} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">More Than 340 Followers</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-4xl text-center w-10">
            <img src={Instagram} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">Follow Me On Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
