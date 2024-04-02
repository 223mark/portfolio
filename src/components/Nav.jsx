import { useState } from "react";
import { AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { FaSun } from "react-icons/fa";

const Nav = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full bg-white z-40 shadow-sm  ">
        <div className="flex justify-between md:justify-end gap-[20px] items-center px-4 py-3  ">
          <div className="text-[#0077B5] text-lg hover:underline cursor-pointer hidden md:inline-block">
            Home
          </div>
          <div id="about" className="text-[#0077B5] text-lg hover:underline cursor-pointer hidden  md:inline-block">
            About
          </div>
          <div className="text-[#0077B5] text-lg hover:underline cursor-pointer hidden  md:inline-block">
            Projects
          </div>
          <div className="text-[#0077B5] text-lg hover:underline cursor-pointer hidden  md:inline-block">
            Contact
          </div>
          <button className="bg-[#0077B5] px-2 py-1 rounded-md text-white font-medium hidden  md:inline-block">
            <FaSun />
          </button>
          <button className="bg-[#0077B5] px-2 py-1 rounded-md text-white font-medium">
            <AiFillGithub />
          </button>
          <div
            onClick={() => setIsMobileNav(true)}
            className="text-[#0077B5] text-lg hover:underline cursor-pointer sm:inline-block md:hidden"
          >
            <AiOutlineMenu />
          </div>
          {/* <button className="bg-[#0077B5] px-2 py-1 rounded-md text-white font-medium">
          <FaRegMoon />
        </button> */}
        </div>
      </nav>
      {/* Mobile Nav */}
      {isMobileNav && (
        <div  className="fixed bg-gray-900 w-[80%] h-full z-50 top-0 right-0 ">
          <div className="flex justify-between items-center px-4 mt-2">
            <button className="bg-[#0077B5] px-2 py-1 rounded-md text-white font-medium">
              <AiFillGithub />
            </button>
            <div onClick={()=> setIsMobileNav(false)} className="text-xl text-white font-bold">x</div>
          </div>
          <div className="flex flex-col justify-between items-center space-y-4 px-4 py-3  ">
            <div className="text-white text-md hover:underline cursor-pointer">
              Home
            </div>
            <div className="text-white text-md hover:underline cursor-pointer ">
              About
            </div>
            <div className="text-white text-md hover:underline cursor-pointer ">
              Projects
            </div>
            <div className="text-white text-md hover:underline cursor-pointer ">
              Contact
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Nav;
