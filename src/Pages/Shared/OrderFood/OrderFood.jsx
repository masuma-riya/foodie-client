import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";

const OrderFood = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const { user } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const axiosSecure = useAxios();

  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to Your Cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You're not Logged In",
        text: "Please login to Add to the Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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

        <button
          onClick={handleAddToCart}
          className="btn bg-slate-100 text-yellow-600 text-xl btn-outline hover:bg-gray-800 hover:text-yellow-600 border-0 border-b-4 mb-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default OrderFood;
