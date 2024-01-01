import React from "react";
import Love from "./love.png";
import Follow from "./follow.png";
import Instagram from "./downloads.png";
import Views from "./views.png";

const BannerBottom = () => {
  function handlediv() {
    window.location.href = "https://www.instagram.com/_sumonta_saha_/";
  }
  function handlediv1() {
    window.location.href =
      "https://unsplash.com/@sumonta056/stats?stats=all-time";
  }

  return (
    <div className="max-w-[1340px] mx-auto bg-white border-b-[1px] py-4 border-b-gray-200 px-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="max-w-container mx-auto h-30 flex flex-col md:flex-row justify-between items-center cursor-pointer">
        <div
          className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300"
          onClick={handlediv1}
        >
          <span className="text-4xl text-center w-10">
            <img src={Views} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">More Than 3200 Views</p>
        </div>
        <div
          className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300"
          onClick={handlediv}
        >
          <span className="text-4xl text-center w-10">
            <img src={Love} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">More Than 2100 Likes</p>
        </div>
        <div
          className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300"
          onClick={handlediv}
        >
          <span className="text-4xl text-center w-10">
            <img src={Follow} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">More Than 340 Followers</p>
        </div>
        <div
          className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300"
          onClick={handlediv1}
        >
          <span className="text-4xl text-center w-10">
            <img src={Instagram} alt="hlow"></img>
          </span>
          <p className="text-lightText text-base">More Than 20 Downloads</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
