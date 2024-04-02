import { BiLogoReact } from "react-icons/bi";
import { FaVuejs, FaPhp, FaNodeJs, FaLaravel } from "react-icons/fa";
import {
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
const Hero = () => {
  return (
    <div className="h-[100vh]   max-w-[600px] w-full mt-2 sm:mt-0 mx-auto flex justify-center items-center flex-col">
      <img
        src="/images/myphoto.jpg"
        alt="myphoto"
        className="h-[140px] w-[140px] rounded-full shadow object-cover  border-2  border-[#0077B5]"
      />
      <div className="mt-4 text-center">
        <h2 className="text-md sm:text-lg font-semibold text-[#808080]">
          Hello I am , Pyae Sone Hein 👋
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0077B5]">
          Fullstack Developer🚀
        </h1>
        <p className="text-[#808080] font-normal text-md  pt-3  pb-5 px-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          sequi omnis quos perferendis laborum odio, eligendi aliquid illo
          maiores? Alias impedit illum reiciendis dolor veniam.
        </p>
        <div className="mt-2 px-2 sm:px-0">
          <h4 className="text-[18px] sm:text-lg font-semibold text-[#808080] text-left mb-4">
            Tech I ❤️
          </h4>
          <div className="grid grid-cols-3 gap-1 sm:grid-cols-5 sm:gap-4">
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <BiLogoReact color={"#3178c6"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <FaVuejs color={"#30f19a"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <SiNextdotjs color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <SiTailwindcss color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <SiBootstrap color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <FaNodeJs color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <SiExpress color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <FaPhp color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <FaLaravel color={"#808080"} size={40} />
            </div>
            <div className="text-4xl p-2  rounded-md shadow-md border-2  flex justify-center items-center ">
              <SiTypescript color={"#808080"} size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
