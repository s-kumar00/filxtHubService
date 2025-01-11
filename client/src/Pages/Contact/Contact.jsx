import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import ContactHome from "./contactHome";
import ContactAbout from "./contactAbout";
import ContactService from "./contactService";

const Contact = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const client = createClient(
    "hfpkkoW8LJW3VIsRCmH3Pk7btw5DZ4XUBqCeAdvSaZtpeuG1VvU3AwIG"
  );

  // Fetch image dynamically from Pexels API
  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const query = "Call";
        const page = Math.floor(Math.random() * 80) + 1;
        const response = await client.photos.search({ query, page });
        if (response.photos.length > 0) {
          setBackgroundImage(response.photos[0].src.original);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchBackgroundImage();
  }, []);

  // Links configuration
  const links = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Services", sectionId: "services" },
  ];

  // Smooth scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Background Image Section */}
      <div className="relative w-full h-[70vh]">
        <img
          src={backgroundImage || "/placeholder.jpg"}
          alt="Dynamic Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-start px-32 text-black dark:text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
        {/* Navigation Links */}
        <div className="absolute bottom-5 left-24 flex space-x-8 text-black">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.sectionId)}
              className="relative text-lg font-medium hover:text-orange-500 after:content-[''] after:block after:w-full after:h-[2px] after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <ContactHome />
      <ContactAbout />
      <ContactService />
    </div>
  );
};

export default Contact;
