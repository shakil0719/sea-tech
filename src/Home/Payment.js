import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L3hdmGERp59vmo7edtePK1E42lWUFT91PB2mNz7JjX0otnN9AmbQTTITlE0TDoXGUvwiP6puLVdmXSKHVqUcjjk00H8kU6dGV"
);

const Payment = ({}) => {
  const param = useParams();
  const id = param.json;
  const order = JSON.parse(id);
  console.log(order);

  return (
    <div className="w-full p-20">
      <div class="mx-auto card w-96 bg-primary shadow-xl ">
        <div class="card-body font-serif">
          <p>Product Name:{order.productName}</p>
          <p>Amount: ${order.paymentAmount}</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
