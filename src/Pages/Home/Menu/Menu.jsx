import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 dark:pt-8 dark:pb-8 dark:bg-gray-900">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid mt-14 md:grid-cols-2 gap-16">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn dark:text-white text-2xl btn-outline border-0 border-b-4 mt-4 mb-16">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
