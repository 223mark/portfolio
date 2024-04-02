import Project from "./Project";

const Projects = () => {
  return (
    <>
      <h1 className="text-[#0077B5] text-2xl font-bold text-center  mb-6 ">
        My Projects
      </h1>
      <Project
        image="/images/foodpanda.png"
        title="FoodPanda Clone(MEVN)"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
          veritatis! Quam alias ex obcaecati quibusdam dolore sed ratione ipsa
          enim corrupti quia, porro repellat. Minima voluptatem dolorem error,
          "
      />
      <Project
        image="/images/foodpanda.png"
        title="FoodPanda Clone (MERN)"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
          veritatis! Quam alias ex obcaecati quibusdam dolore sed ratione ipsa
          enim corrupti quia, porro repellat. Minima voluptatem dolorem error,
         "
      />
      <Project
        image="/images/ticket_lab.png"
        title="Bus Ticket Booking"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
          veritatis! Quam alias ex obcaecati quibusdam dolore sed ratione ipsa
          enim corrupti quia, porro repellat. Minima voluptatem dolorem error,
          "
      />
    </>
  );
};

export default Projects;
