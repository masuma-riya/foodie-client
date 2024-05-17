import Hero2 from "../../Pages/Home/Hero/Hero2";
import BistroBoss from "./BistroBoss/BistroBoss";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
// import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero2></Hero2>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <Menu></Menu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
