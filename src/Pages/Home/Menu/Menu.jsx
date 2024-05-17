import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12 dark:pt-8 dark:pb-8 dark:bg-gray-900">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid mt-14 md:grid-cols-2 gap-16">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn text-2xl btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
