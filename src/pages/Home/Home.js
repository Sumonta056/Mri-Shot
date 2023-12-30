import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Achivement from "../Achievement/Achievement1";
import Achivement2 from "../Achievement/Achievement2";
import Achivement3 from "../Achievement/Achievement3";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Achivement />
        <Achivement2 />
        <Achivement3 />
        <NewArrivals />
        <Sale />
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
