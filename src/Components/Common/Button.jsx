import React from "react";

const Button = ({ data, classNames }) => {
  return (
    <button className={`rounded-full text-white bg-[#392c7d] ${classNames} `}>
      {data}
    </button>
  );
};

export default Button;
