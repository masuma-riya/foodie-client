const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex w-9/12 mx-auto space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="lg:w-[80px] w-[40px]"
        src={image}
        alt=""
      />
      <div className="space-y-4">
        <h3 className="uppercase text-xl font-semibold italic dark:text-white">
          {name} ----------
        </h3>
        <p className="dark:text-white italic font-normal text-base">{recipe}</p>
      </div>
      <p className="text-yellow-600 font-bold text-2xl">${price}</p>
    </div>
  );
};

export default MenuItem;
