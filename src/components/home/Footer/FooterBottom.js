import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-10">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | MriShot | All Rights Reserved |
          <a
            href="https://sumonta056.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ml-1 font-medium group-hover:text-red-400">
              <b>Sumonta Saha Mridul</b>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
