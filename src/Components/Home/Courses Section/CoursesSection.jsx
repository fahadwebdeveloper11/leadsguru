import React from "react";
import Card from "../../Common/Card";
import { coursesCardData } from "../../../Constants/CoursesCardData";

const CoursesSection = () => {
  return (
    <div className="bg-courses-sec-img bg-cover bg-norepeat min-h-screen w-full bg-top">
      <div className="w-[80%] mx-auto py-20">
        <h1 className="font-semibold text-4xl">Our Exclusive Packages</h1>
        <p className="text-[#685f78] mt-5 mb-10">
          With our exclusive packages, now you can be assured to acquire the
          best knowledge and expertise from our team of experts. We believe you
          can empower the world with industry-leading courses.
        </p>
        <div className="grid grid-flow-row grid-cols-3 gap-x-5 gap-y-4">
            {coursesCardData.map((item,i) => (
                <Card
                key={i}
                image= {item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                packages={item.package}
                courses={item.courses}
                timing={item.timing}
                students_enrolled={item.students_enrolled}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
