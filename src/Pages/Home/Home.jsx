import Hero2 from "../../Pages/Home/Hero/Hero2";
import BistroBoss from "./BistroBoss/BistroBoss";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import CheafRecom from "./CheafRecom/CheafRecom";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Testimonial from "./Testimonial/Testimonial";
import Banner2 from "./Banner/Banner2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <div>
      <Hero2></Hero2>
      <Category></Category>

      <BistroBoss></BistroBoss>
      <Menu></Menu>
      <CallUs></CallUs>
      <SectionTitle
        subHeading={"GET 30-50% OFF"}
        heading={"Available Offers"}
      ></SectionTitle>
      <Banner2></Banner2>
      <CheafRecom></CheafRecom>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
