import React from "react";
import Image from "next/image";

const WelcomeBanner = () => {
  return (
    <div className="mt-3 flex gap-5 items-center bg-white rounded-xl  ml-3 p-5">
      <Image src="/Welcome_Finder.png" alt="Finder" height={350} width={350} />
      <div>
        <h1 className="font-bold text-[30px]">
          Welcome to the <span className="text-primary"> Jobify!</span>
        </h1>
        <h2 className="text-gray-500"> Explore Learn and build network</h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
