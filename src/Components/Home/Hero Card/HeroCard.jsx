import React from "react";

const HeroCard = ({ value, icon, content }) => {
  return (
    <div className="bg-white min-w-[260px] min-h-28 flex items-center rounded-2xl shadow-card-shadow">
      <div className=" flex items-center gap-5">
        <div className="ml-3 w-16 h-16 rounded-full flex items-center justify-center bg-[#fb5b66] text-white text-4xl overflow-hidden">
          {icon}
        </div>
        <div>
          <h1 className="mb-2 text-2xl font-medium">{value}</h1>
          <p className="whitespace-nowrap text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
