import React from "react";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

export default function Product({ id, title, image, price, rating }) {
  const [{ cart, user }, dispatch] = useStateValue();

  const navigate = useNavigate();
  // console.log("cart", cart);
  function addToCart() {
    //add the item to the data layer
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      navigate("/login");
      alert("You need to login first");
    }
  }

  return (
    <div
      className="text-black z-20 flex flex-col justify-end items-center m-2 p-5 w-full min-w-[100px] max-h-[400px] bg-white "
      key={id}
    >
      <div className="product-info w-full">
        <p className="mb-4">{title}</p>
        <p className="mt-4">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="text-lg">*</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt="the lean startup"
        className="w-48 max-h-[200px] object-contain mb-4"
      />
      <button
        className="bg-[#f0c14b] border-2 mt-2 px-1 border-[#a88734_#9c7e31_#846a29] text-[#111]"
        onClick={addToCart}
      >
        Add to basket
      </button>
    </div>
  );
}
