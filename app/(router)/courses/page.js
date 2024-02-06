import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";

const Courses = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3">
      {/* Left Container */}
      <div className="col-span-2">
        {/* Banner */}
        <WelcomeBanner />
      </div>
      {/* Right Container */}
      Right Section
    </div>
  );
};

export default Courses;
