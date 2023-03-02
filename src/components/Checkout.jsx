import React from "react";
import Subtotal from "./Subtotal";
import CartItem from "./CartItem";
import { useStateValue } from "./StateProvider";

export default function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  console.log(user?.email);
  return (
    <div className="w-full flex p-5 bg-white h-max">
      <div className="checkout-left flex-1">
        <strong>Hello,{user.email}</strong>
        <h2 className="text-black font-bold text-lg mr-2 p-2 border-b border-gray-300">
          Your Shopping Basket
        </h2>

        {cart.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout-right ">
        <Subtotal />
      </div>
    </div>
  );
}
