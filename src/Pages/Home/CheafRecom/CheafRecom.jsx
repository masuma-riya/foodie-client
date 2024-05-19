import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CheafRecom = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const slicedMenu = menu.slice(0, 3);
  return (
    <section>
      {" "}
      <SectionTitle
        subHeading={"Should try"}
        heading={"chef recommends"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10  w-10/12 mx-auto">
        {slicedMenu.map((menu) => (
          <div
            key={menu._id}
            className=" rounded-md overflow-hidden shadow-md hover:shadow-lg"
          >
            <div className="relative">
              <img
                className="w-full h-72"
                src={menu.image}
                alt="Product Image"
              />
              <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-2xl font-medium">
                {menu.category}
              </div>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-6">{menu.name}</h3>
              <p className="text-gray-600 italic font-medium text-base mb-5">
                {menu.recipe}
              </p>

              <button className="btn text-yellow-600 text-xl btn-outline hover:bg-gray-800 hover:text-yellow-600 border-0 border-b-4 mb-4">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheafRecom;
