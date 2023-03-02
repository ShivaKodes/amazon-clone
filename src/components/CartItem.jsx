import React from "react";
import { useStateValue } from "./StateProvider";

export default function CartItem({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  //remove the item from the cart
  function removeFromCart() {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  }

  return (
    <div className="flex my-5 gap-5">
      <img src={image} alt="" className="object-contain h-[180px] w-[180px]" />
      <div>
        <p className="text-lg font-extrabold">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button
          className="bg-[#f0c14b] border mt-2 border-[#a88734_#9c7e31_#846a29] text-[#111]"
          onClick={removeFromCart}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
