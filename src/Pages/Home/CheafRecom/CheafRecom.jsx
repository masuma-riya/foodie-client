import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import OrderFood from "../../Shared/OrderFood/OrderFood";

const CheafRecom = () => {
  const [menu] = useMenu();

  const slicedMenu = menu.slice(0, 3);
  return (
    <section>
      {" "}
      <SectionTitle
        subHeading={"Should try"}
        heading={"chef recommends"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10  w-10/12 mx-auto">
        {slicedMenu.map((item) => (
          <OrderFood key={item._id} item={item}></OrderFood>
        ))}
      </div>
    </section>
  );
};

export default CheafRecom;
