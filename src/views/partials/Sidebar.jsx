import { Link, NavLink, useLocation } from "react-router-dom";
import { BiLogoLinkedin, BiLogoUpwork, BiSolidBriefcase } from "react-icons/bi";
import { BsFileEarmarkText, BsFillFileEarmarkPdfFill, BsStars, BsWhatsapp } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { AiFillPhone, AiOutlineGithub, AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const sidebarInfo = {
    name: "Faiq Nadeem",
    designation: "Full Stack Developer",
    getInTouchLinks: [
      { link: "https://github.com/faiq-nadeem", icon: <AiOutlineGithub className="text-md" /> },
      { link: "https://www.linkedin.com/in/faiq-nadeem", icon: <BiLogoLinkedin className="text-md" /> },
      { link: "tel:+92321423028", icon: <AiFillPhone className="text-md" /> },
      { link: "mailto:chfaiqnadeem@gmail.com", icon: <MdEmail className="text-md" /> },
      { link: "", icon: <BiLogoUpwork className="text-md" /> },
      {
        link: "https://wa.me/9232142320289?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.%20Can%20we%20have%20a%20meeting%3F",
        icon: <BsWhatsapp className="text-md" />,
      },
    ],
  };

  return (
    <div className="flex flex-col p-6 self-center py-2 md:py-10 space-y-5 min-w-[20%]">
      <div className="flex flex-col gap-4 items-center text-center text-white px-3">
        <div>
          <img
            src="assets/images/profile-picture-animated.gif"
            alt="profile-picture"
            className="w-[132px] md:w-[152px] md:h-[152px] h-[132px] rounded-full hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col space-y-0">
          <h1 className="font-medium text-xl md:text-3xl uppercase">{sidebarInfo?.name}</h1>
          <h1 className="font-light text-lg md:text-2xl">{sidebarInfo?.designation}</h1>
        </div>
      </div>

      <div className="hidden md:block">
        <hr />
      </div>

      <div className={`md:hidden block relative animate-bounce ${open ? "py-0" : "py-3"}`}>
        <div onClick={() => setOpen(!open)} className="flex justify-center">
          {open ? (
            <AiOutlineArrowUp color="white" height="16px" width="16px" />
          ) : (
            <AiOutlineArrowDown color="white" className="w-[16px] h-[16px]" />
          )}
        </div>
      </div>

      <Transition
        show={open}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className={`flex flex-col px-5 transition-all duration-500 text-white ease-in md:flex md:flex-col gap-2`}>
          <div className="flex flex-col px-5 transition-all duration-500 text-white ease-in">
            <ul className="flex flex-col  gap-1 transition-all duration-500 text-white ease-in font-medium text-sm">
              <NavLink
                to="/intro"
                onClick={handleClose}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
                  location.pathname === "/intro" ? "bg-secondary text-white rounded-lg" : ""
                }`}
              >
                <BsStars className="text-md" />
                <p className="text-md">Intro</p>
              </NavLink>
              <NavLink
                to="/portfolio"
                onClick={handleClose}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
                  location.pathname === "/portfolio" ? "bg-secondary text-white rounded-lg" : ""
                }`}
              >
                <BiSolidBriefcase className="text-md" />
                <p className="text-md">Portfolio</p>
              </NavLink>
              <NavLink
                to="/cover-letter"
                onClick={handleClose}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
                  location.pathname === "/cover-letter" ? "bg-secondary text-white rounded-lg" : ""
                }`}
              >
                <BsFileEarmarkText className="text-md" />
                <p className="text-md">Cover Letter</p>
              </NavLink>
              <NavLink
                to="/curriculum-vitae-cv"
                onClick={handleClose}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
                  location.pathname === "/curriculum-vitae-cv" ? "bg-secondary text-white rounded-lg" : ""
                }`}
              >
                <BsFillFileEarmarkPdfFill className="text-md" />
                <p className="text-md">Curriculum vitae - CV</p>
              </NavLink>
              <NavLink
                to="/contact-me"
                onClick={handleClose}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
                  location.pathname === "/contact-me" ? "bg-secondary text-white rounded-lg" : ""
                }`}
              >
                <FaHandshake className="text-md" />
                <p className="text-md">Contact Me</p>
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-2 text-white py-5 px-5">
            <div className="flex flex-col justify-start mx-auto md:mx-0 gap-4 md:gap-0 items-center">
              <div className="w-fit md:w-full">
                <h1 className="font-extralight text-md md:mb-3">Get in touch</h1>
              </div>
              <div className="flex w-full justify-start space-x-3">
                {sidebarInfo?.getInTouchLinks?.length > 0 &&
                  sidebarInfo.getInTouchLinks.map(
                    (item, index) =>
                      item?.link && (
                        <Link to={item?.link} target="__blank" key={index}>
                          {item?.icon}
                        </Link>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Sidebar;
