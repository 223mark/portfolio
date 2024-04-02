// eslint-disable-next-line react/prop-types
const Project = ({ image, title, desc }) => {
  return (
    <div
      className={`flex  flex-col-reverse items-center justify-between w-full   border-y-2 py-6 sm:flex-row  `}
    >
      <div className="w-full sm:w-[30%] mt-4 md:mt-0 ">
        <h1 className="text-gray-800 font-semibold tracking-wide text-xl mb-4">
          {title}
        </h1>
        <p>{desc}</p>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-1 border-2 border-[#0077B5] text-[15px] text-[#0077B5] font-medium hover:bg-[#0077B5] hover:text-white">
            See Live
          </button>
          <button className="text-[15px] font-medium text-[#0077B5] hover:underline ">
            Source Code
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[60%]  h-full shadow-2xl border-2 rounded-md ">
        <img
          src={`${image}`}
          alt="project_image"
          className="w-full h-[200px] sm:h-[350px]  object-cover "
        />
      </div>
    </div>
  );
};

export default Project;
