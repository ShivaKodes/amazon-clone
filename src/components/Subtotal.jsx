import React from "react";
import CurrencyFormat from "react-currency-format";
import { totalPrice } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col justify-between w-[300px] h-[100px] p-5 bg-[#f3f3f3] border border-[#ddd] rounded-sm sticky top-[5.5rem] right-0">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({cart.length} items) : <strong>{value}</strong>
            </p>
            <small className="flex itemd-center">
              <input type="checkbox" className="mr-1" /> This contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="bg-[#f0c14b] rounded-sm w-full h-7 border border-[#a88734_#9c7e31_#846a29] text-[#111]">
        Proceed to checkout
      </button>
    </div>
  );
}
