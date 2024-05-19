import OrderFood from "../../Shared/OrderFood/OrderFood";

const OrderTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10  w-10/12 mx-auto">
      {items.map((item) => (
        <OrderFood key={item._id} item={item}></OrderFood>
      ))}
    </div>
  );
};

export default OrderTab;
