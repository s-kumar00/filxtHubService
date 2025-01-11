import React, { useEffect, useRef } from "react";
import Gift from "../assets/gift.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { CiGift } from "react-icons/ci";
import { LiaHandsHelpingSolid } from "react-icons/lia";

const Profile = ({ closeProfileModal, openSignModalFromProfile }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeProfileModal();
    }
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
      id="overlay"
      onClick={handleClickOutside}
    >
      <div className="fixed inset-0 bg-black opacity-10" />
      <div
        ref={modalRef}
        className="fixed z-50 top-0 right-0 w-[50vh] h-full  bg-white shadow-lg overflow-y-auto animate-slideProfile flex flex-col justify-between"
      >
        <div>
          <div className="p-4 border-2 font-bold text-xl text-gray-800">
            Hey!
          </div>
          <div className="flex justify-between items-center gap-3 p-3 font-semibold border shadow-sm">
            <img src={Gift} className="h-10 w-10 rounded-full" />
            <span className="text-sm dark:text-black">
              Unlock special offers & great benefits.
            </span>
            <button
              onClick={openSignModalFromProfile}
              className="text-xs w-1/2 p-2 text-red-500 ring-1 rounded-md ring-red-600"
            >
              Login / Register
            </button>
          </div>
          <Link className="flex justify-between items-center p-6 border font-serif font-medium text-black">
            <div className="flex justify-start items-center gap-3">
              <IoIosNotificationsOutline className="h-5 w-5" />
              <span>Notifications</span>
            </div>
            <GoChevronRight className="h-5 w-5" />
          </Link>
          <Link className="flex justify-between items-center p-6 border font-serif font-medium text-black">
            <div className="flex justify-start items-center gap-3">
              <IoIosNotificationsOutline className="h-5 w-5" />
              <span>Your Orders</span>
            </div>
            <GoChevronRight className="h-5 w-5" />
          </Link>
          <Link className="flex justify-between items-center p-6 border font-serif font-medium text-black">
            <div className="flex justify-start items-center gap-3">
              <CiGift className="h-5 w-5" />
              <span>Rewards</span>
            </div>
            <GoChevronRight className="h-5 w-5" />
          </Link>
          <Link className="flex justify-between items-center p-6 border font-serif font-medium text-black">
            <div className="flex justify-start items-center gap-3">
              <LiaHandsHelpingSolid className="h-5 w-5" />
              <span>Help & Support</span>
            </div>
            <GoChevronRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="p-3 border-2 shadow-slate-950 shadow-lg">
          <button className="w-full font-semibold p-3 text-red-500 ring-1 rounded-md ring-red-600">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
