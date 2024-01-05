import React from "react";
import Button from "../../Common/Button";
import heroimage from "../../../assets/hero-img-4.png";
import { heroCardsData } from "../../../Constants/HeroCardsData";
import HeroCard from "../Hero Card/HeroCard";
const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-hero-img bg-cover bg-no-repeat bg-top">
      <div className="w-[80%] mx-auto flex justify-between items-center h-full">
        <div className="w-[60%]">
          <h3 className="text-[#685f78] text-xl mb-8">
            Innovation in education
          </h3>
          <h1 className="text-[#22100d] text-6xl font-semibold">
            Welcome to India’s
          </h1>
          <h1 className="text-[#22100d] text-4xl font-semibold mb-8">
            Leading Learning Platform.
          </h1>
          <Button
            data={"Get Started Now"}
            classNames={
              "hover:text-[#023246] hover:bg-[#ffa8ae] duration-300 py-2 px-4 "
            }
          />
        </div>
        <div className="w-[40%]">
          <img src={heroimage} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 w-[80%] gap-x-20 mx-auto">
        {heroCardsData.map((item, i) => (
          <HeroCard
            key={i}
            value={item.value}
            content={item.innerContent}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
