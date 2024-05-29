const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="lg:w-4/12 dark:bg-gray-950 md:w-6/12 w-10/12 mx-auto mt-6 lg:mt-  pt- text-center">
      <p className="md:text-2xl text-lg font-medium text-[#D99904] mb-4">
        --- {subHeading} ---
      </p>
      <h3 className="md:text-3xl dark:text-white text-3xl uppercase text-[#151515] font-medium border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
