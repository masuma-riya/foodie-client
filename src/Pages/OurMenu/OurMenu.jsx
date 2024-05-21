import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import desssertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../Home/Menu/MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offerd = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Foodie | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our menu"}></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offerd}></MenuCategory>
      {/* Desserts Menu Items */}
      <MenuCategory
        items={desserts}
        title="desserts"
        img={desssertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salads} title="salads" img={saladImg}></MenuCategory>
      <MenuCategory items={soups} title="soups" img={soupImg}></MenuCategory>
    </div>
  );
};

export default OurMenu;
