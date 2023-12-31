import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Achivement from "../Achievement/Achievement1";
import Achivement2 from "../Achievement/Achievement2";
import Achivement3 from "../Achievement/Achievement3";
import AbstractZone from "../../components/home/AbstractZone/AbstractZone";
import FlowerZone from "../../components/home/FlowerZone/FlowerZone";
import PotrayHer from "../../components/home/PotrayHer/PotrayHer";
import GodZone from "../../components/home/GodZone/GodZone";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Achivement />
        <Achivement2 />
        <Achivement3 />
        <FlowerZone />
        <PotrayHer />
        <AbstractZone />
        <GodZone />
      </div>
    </div>
  );
};

export default Home;
