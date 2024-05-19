import Hero2 from "../../Pages/Home/Hero/Hero2";
import BistroBoss from "./BistroBoss/BistroBoss";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import CheafRecom from "./CheafRecom/CheafRecom";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero2></Hero2>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <Menu></Menu>
      <CallUs></CallUs>
      <CheafRecom></CheafRecom>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
