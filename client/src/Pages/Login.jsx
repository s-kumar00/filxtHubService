import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = ({ closeSignModal }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    // Get the current value
    const value = e.target.value;

    // Filter out non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");

    // Update state with the filtered value
    setPhoneNumber(numericValue);
    // Enable button if the length is 10, otherwise disable
    setIsBtnDisabled(numericValue.length == 10);
  };

  return (
    <div className="absolute z-50 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-homeBg bg-cover bg-center opacity-50" />
      <div className="relative bg-gray-100 text-black rounded-lg p-12 w-[60vh] h-[75vh] border shadow-lg animate-slideLogin">
        <div className="flex justify-between items-center mb-6">
          <div className="text-center w-full">
            <div className="font-bold text-3xl">Get Started</div>
            <p className="mt-3 text-sm leading-4">
              You must be logged in to perform this action.
            </p>
          </div>
          <RxCross2
            onClick={closeSignModal}
            className="text-4xl font-bold absolute top-0 right-0 m-4 p-2 hover:text-secondary cursor-pointer"
          />
        </div>

        {/* Login button */}
        <div className="mt-10 flex flex-col gap-3">
          {[
            {
              src: "https://www.svgrepo.com/show/512317/github-142.svg",
              alt: "GitHub",
              text: "Continue with GitHub",
            },
            {
              src: "https://www.svgrepo.com/show/475656/google-color.svg",
              alt: "Google",
              text: "Continue with Google",
            },
            {
              src: "https://www.svgrepo.com/show/448234/linkedin.svg",
              alt: "LinkedIn",
              text: "Continue with LinkedIn",
            },
          ].map((button, index) => (
            <button
              key={index}
              className="flex h-12 w-full justify-center gap-12 rounded border border-gray-300 p-4 text-sm font-medium outline-none focus:outline-none"
            >
              <img
                src={button.src}
                alt={button.alt}
                className="h-[20px] w-[20px]"
              />
              {button.text}
            </button>
          ))}
        </div>

        {/* divider */}
        <div className="flex w-full items-center gap-2 py-8 text-sm text-black">
          <div className="h-px w-full bg-slate-950"></div>
          OR <div className="h-px w-full bg-slate-950"></div>
        </div>

        {/* Login form */}
        <div className="flex text-center items-center gap-10">
          <div className="inline-flex items-center gap-2">
            <img
              src="https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png"
              className="h-3 w-4"
            />
            <span className="text-xs">+91</span>
          </div>
          <div className="w-3/4 border-b-2 border-gray-400 text-left">
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Continue with phone number"
              className="w-full p-2 bg-transparent focus:outline-none text-sm"
            />
          </div>
        </div>

        <button
          className={`mt-10 w-full h-12 text-white font-medium rounded-lg ${
            isBtnDisabled
              ? "bg-red-500 cursor-pointer"
              : "bg-red-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;
