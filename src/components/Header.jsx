import React from "react";
import HeaderOption from "./HeaderOption";
import Logo from "../assets/amazon-logo.png";
import { BsSearch, BsBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  function handleAuthentication() {
    if (user) {
      signOut(auth);
    }
  }

  return (
    <header className="w-full bg-[#131921] flex flex-row items-center text-white h-16 sticky top-0 z-50">
      <Link to="/">
        <img
          src={Logo}
          alt="Amazon logo"
          className="mt-5 mx-5 w-24 object-contain"
        />
      </Link>
      <div className="search--input flex flex-1 items-center rounded-3xl">
        <input
          type="text"
          className="search-box h-10 p-2 w-full border-none"
          id="search"
        />
        <BsSearch size={40} className="p-2 bg-[#cd9042] text-black" />
      </div>

      <div className="options flex justify-evenly">
        <Link to={!user && "/login"}>
          <HeaderOption
            topText={"Hello"}
            bottomText={user ? "Sign Out" : "Sign In"}
            onClick={handleAuthentication}
          />
        </Link>
        <HeaderOption topText={"Returns"} bottomText={"& Order"} />
        <HeaderOption topText={"Your"} bottomText={"Prime"} />
      </div>

      <Link to="/checkout">
        <div className="flex items-center">
          <BsBasket3Fill size={22} />
          <span className="mx-2 text-base font-extrabold">{cart?.length}</span>
        </div>
      </Link>
    </header>
  );
}
