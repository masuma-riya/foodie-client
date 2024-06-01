import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout/Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Pay to Eat"}
        heading={"Payment"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <Checkout></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
