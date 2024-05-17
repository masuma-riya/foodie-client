import bgImg from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      className="relative  w-10/12 mb-10  mx-auto bg-cover bg-center dark:text-gray-100"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute dark:bg-gray-400 opacity-55 inset-0 "></div>
      <div className="relative container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="rounded-lg w-10/12 mx-auto bg-white p-5 shadow-sm transition text-center   dark:bg-gray-800 dark:shadow-none md:p-7 xl:p-9">
          <h4 className="mb-6  md:text-5xl text-3xl md:font-light font-normal italic">
            Bistro Boss
          </h4>
          <p className="leading-relaxed md:text-lg md:font-medium italic dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
