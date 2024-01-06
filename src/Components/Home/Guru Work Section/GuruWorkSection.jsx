import React from "react";
import { leadGuruSecData } from "../../../Constants/LeadGuruSecData";
import GuruSections from "../Guru Sections/GuruSections";

const GuruWorkSection = () => {


  return (
    <div className="bg-[#f8fbff] w-full py-16 min-h-screen">
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl mb-5 text-center font-semibold">How LeadsGuru Works</h1>
        {leadGuruSecData.map((item,i) => (
            <GuruSections 
            key={i}
            image={item.image}
            heading={item.heading}
            sub_heading={item.sub_heading}
            description={item.description}
            />
        ))}
      </div>
    </div>
  );
};

export default GuruWorkSection;
