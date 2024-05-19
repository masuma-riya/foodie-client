const OrderFood = ({ item }) => {
  const { name, image, price, recipe, category } = item;
  return (
    <div className=" rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <img className="w-full h-72" src={image} alt="Product Image" />
        <div className="absolute top-0 right-0 bg-gray-800 text-white px-4 py-1 m-2 rounded-md text-2xl font-normal italic">
          {"$" + price}
        </div>
      </div>
      <div className="p-5 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold mb-6">{name}</h3>

        <p className="text-gray-600 italic font-medium text-base mb-4">
          {recipe}
        </p>

        <button className="btn text-yellow-600 text-xl btn-outline hover:bg-gray-800 hover:text-yellow-600 border-0 border-b-4 mb-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default OrderFood;
