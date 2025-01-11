import React, { useEffect, useRef } from "react";
import pik from "../assets/pik2.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Services = ({ closeService }) => {
  const modalRef = useRef(null);

  // Handle click outside of modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeService();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeService]);

  return (
    <div
      className="fixed top-full left-0 w-full h-[60vh] bg-white dark:bg-gray-800 shadow-lg"
      style={{ top: "46%", transform: "translateY(-50%)" }}
      id="overlay"
    >
      <div className="grid grid-cols-6 h-full" ref={modalRef}>
        {/* Left side div */}
        <div className="col-span-2 flex flex-col gap-y-6 justify-center bg-gray-100 dark:bg-gray-900">
          <p className="text-start text-4xl px-10 text-orange-500">
            Our cloud-native, open and dynamic products and services will enable
            you to transform your business.
          </p>
          <div className="flex justify-start items-center px-10 gap-x-2 text-black">
            <Link>See our all Services</Link>
            <GoArrowRight className="text-md mt-1" />
          </div>
        </div>

        {/* Right side div with image and links */}
        <div className="col-span-4 flex justify-between p-10 text-black">
          <div className="grid grid-cols-2 gap-10 ml-20">
            <Link>Carpenter</Link>
            <Link>Plumber</Link>
            <Link>Electrician</Link>
            <Link>Painter</Link>
            <Link>Cleaner</Link>
            <Link>Gardener</Link>
          </div>
          <div className="">
            <img src={pik} className="w-[50vh] h-[45vh] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
