import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          title: "Great!",
          text: `${data.name} is added to the menu`,
          icon: "success",
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new"}
      ></SectionTitle>

      <div className="mx-14 mt-10 bg-gray-100 rounded-lg p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-medium placeholder:text-gray-400  focus:outline-none focus:ring-1 sm:text-sm"
            />
          </div>
          <div className="my-6 flex gap-4">
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-1  sm:text-sm"
            >
              <option
                disabled
                value="default"
                className="font-medium text-slate-500"
              >
                Selete a Category
              </option>
              <option value="salad" className="font-medium text-slate-700">
                Salad
              </option>
              <option value="pizza" className="font-medium text-slate-700">
                Pizza
              </option>
              <option value="soup" className="font-medium text-slate-700">
                Soup
              </option>
              <option value="dessert" className="font-medium text-slate-700">
                Dessert
              </option>
              <option value="drinks" className="font-medium text-slate-700">
                Drinks
              </option>
            </select>
            <input
              type="number"
              {...register("price", { required: true })}
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-medium placeholder:text-gray-400  focus:outline-none focus:ring-1  sm:text-sm"
              placeholder="Price"
            />
          </div>
          <div>
            <textarea
              type="text"
              {...register("recipe")}
              placeholder="Recipe Details"
              cols={30}
              rows={10}
              className="mb-4 h-40 w-full resize-none rounded-md border border-slate-300  focus:outline-none focus:ring-1 p-5 font-medium text-gray-700"
            />
          </div>
          <div className="form-control w-full">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>

          <button
            type="submit"
            className="btn mt-6 bg-[#835D25] text-white text-base hover:bg-[#835D25]"
          >
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
