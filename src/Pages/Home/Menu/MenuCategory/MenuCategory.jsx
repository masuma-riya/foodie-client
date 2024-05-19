import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && (
        <>
          <div className="flex justify-center">
            <button className="btn uppercase dark:text-white text-2xl btn-outline border-0 border-b-4  mb-16">
              Order Your Favourite Food
            </button>
          </div>
          <Cover img={img} title={title}></Cover>
        </>
      )}

      <div className="grid mt-16 mb-8 md:grid-cols-2 gap-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
