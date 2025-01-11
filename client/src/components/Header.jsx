import React, { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import Login from "../Pages/Login";
import Profile from "./Profile";
import Services from "../Pages/Services";
import { MdKeyboardArrowDown } from "react-icons/md";
import vid from "../assets/vid.mp4";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const [isProfileModelOpen, setIsProfileModelOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname === "/");

  const openSignModal = () => setIsSignModalOpen(true);
  const closeSignModal = () => setIsSignModalOpen(false);

  const openProfileModal = () => setIsProfileModelOpen(true);
  const closeProfileModal = () => setIsProfileModelOpen(false);

  const toggleService = () => setIsServicesOpen(true);

  const openSignModalFromProfile = () => {
    closeProfileModal();
    openSignModal();
  };

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  useEffect(() => {
    // Disable scrolling when any modal is open
    if (isSignModalOpen || isProfileModelOpen || isServicesOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSignModalOpen, isProfileModelOpen, isServicesOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/feature" },
  ];

  return (
    <>
      <header
        className={`relative w-full ${
          isHome ? "h-[50vh]" : "h-30"
        } object-cover bg-cover shadow-xl`}
      >
        {/* Background Video */}
        {isHome && (
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay for darkening the video if needed */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        {/* Header content */}
        <nav
          className={`relative z-20 ${
            isHome
              ? "bg-transparent text-white"
              : "bg-white dark:bg-gray-950 dark:text-white"
          }`}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <div className="flex gap-5 justify-between items-center w-3/4 text-2xl">
              <Link to="/" className="flex items-center rtl:space-x-reverse">
                <p>Fixlt</p>
                <span className="self-center bg-red-600 rounded-l-md rounded-b-lg p-0.5 font-semibold font-serif whitespace-nowrap text-white dark:text-white">
                  HUB
                </span>
              </Link>

              {/* <form className="w-full">
                <label className="mb-2 text-sm font-medium sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <AiOutlineSearch />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-1/2 p-2 ps-10 text-sm rounded-lg bg-gray-50 outline-none focus:outline-none"
                    placeholder="Search ..."
                    required
                  />
                </div>
              </form> */}
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <button
                className="text-2xl"
                onClick={() => dispatch(toggleTheme())}
              >
                {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
              </button>
              <button
                onClick={openSignModal}
                className="text-sm text-white bg-red-500 px-4 py-1 rounded-md dark:text-white"
              >
                Sign in
              </button>
              <button
                data-collapse-toggle="navbar-hamburger"
                type="button"
                onClick={openProfileModal}
                className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-hamburger"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <nav
          className={`relative z-20 ${
            isHome
              ? "bg-transparent text-white border-none"
              : "bg-gray-200 text-black dark:bg-gray-900 dark:text-gray-400"
          } shadow-md dark:shadow-md`}
        >
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center justify-between">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex font-medium mt-0 text-sm space-x-8">
                <Link onClick={toggleService} className="flex">
                  <p>Services</p>
                  <MdKeyboardArrowDown className="inline-block text-2xl" />
                </Link>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-full z-30">
                    <Services closeService={() => setIsServicesOpen(false)} />
                  </div>
                )}
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal outside header to prevent any z-index issues */}
      {isSignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login closeSignModal={closeSignModal} />
        </div>
      )}
      {isProfileModelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Profile
            closeProfileModal={closeProfileModal}
            openSignModalFromProfile={openSignModalFromProfile}
          />
        </div>
      )}
    </>
  );
};

export default Header;
