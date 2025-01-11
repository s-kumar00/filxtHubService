import React from "react";
import about from "../assets/about1.jpg";

const About = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Image */}
      <img
        src={about}
        alt="Snow-covered pine trees"
        className="w-full h-[60vh] object-cover opacity-60"
      />

      <div className="absolute top-0 left-0 w-full h-full flex">
        <p className="z-50 text-black text-2xl font-bold">About your Service</p>
      </div>
    </div>
  );
};

export default About;
