// eslint-disable-next-line react/prop-types
const Icon = ({ children, color }) => {
  const textColor = `text-[${color}]`;
  const borderColor = ` border-b-2 border-[${color}]`;
  const content = (
    <div
      className={`${borderColor}  bg-white  text-4xl p-2  rounded-md shadow-md border-b-2  flex justify-center items-center hover:drop-shadow-2xl`}
    >
      <h2 className={`${textColor}`}>{children}</h2>
    </div>
  );
  return content;
};

export default Icon;
