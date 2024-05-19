import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      className="w-11/12 mx-auto"
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[500px] ">
        <div className="hero-overlay bg-opacity-15"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-gray-900 bg-opacity-70 px-16 py-6 flex flex-col justify-center items-center">
            <h1 className="mb-5 text-5xl font-medium uppercase">{title}</h1>
            <p className="mb-5 text-lg italic font-normal uppercase">
              Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
