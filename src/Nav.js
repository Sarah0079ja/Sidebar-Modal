import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";


const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
 
  const toggleNav = () => {
    setOpenNav(!openNav);
  };


  return (
    <>
      <div>
        <div className="">
          {!openNav ? (
            <GiHamburgerMenu
              onClick={toggleNav}
              size={24}
              className="cursor-pointer"
            />
          ) : null}

          {openNav && (
            <div className={`sidebar ${!openNav ? "active" : ""}`}>
              <div className="flex items-center justify-between mt-6">
                <h2 className="text-2xl ml-5 sm:text-1xl">
                  Code <span className="text-blue-400">Addict</span>
                </h2>

                <FaTimes
                  colr="red"
                  size={24}
                  className="flex cursor-pointer mt-2 bg-transparent transition-transform hover:bg-pink-200 mr-3"
                  onClick={toggleNav}
                />
              </div>

              <div className="">
                <div className="flex flex-col mb-4 mt-6">
                  {[
                    ["Home", "/home", <FaHome />],
                    ["Team", "/team", <BsFillPeopleFill />],
                    ["Project", "/project", <FaFileAlt />],
                    ["Profile", "/calendar", <FaFileAlt />],
                    ["Calendar", "/calendar", <FaCalendar />],
                    ["Document", "/document", <GrDocumentVerified />],
                  ].map(([title, url, icon]) => (
                    <a
                      href={url}
                      className="flex py-2  text-slate-600 font-medium ml-4
                   hover:bg-purple-300 hover:px-3 hover:rounded-lg hover:text-white items-center"
                    >
                      <div className="mr-3">{icon}</div>
                      {title}
                    </a>
                  ))}
                </div>
                <div className="flex items-end justify-evenly px-4 py-2 mt-40">
                  <FaTwitter color="blue" />
                  <FaInstagram color="blue" />
                  <FaBehance color="blue" />
                  <FaLinkedin color="blue" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
