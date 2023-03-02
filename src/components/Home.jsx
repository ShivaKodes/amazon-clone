import React from "react";
import Product from "./Product";

export default function Home() {
  return (
    <div className="flex justify-center max-w-[1500px] mx-auto">
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/D19563423_WLM_Uber_Placeholder_graphic_DesktopTallHero_1500x600._CB414063907_.jpg"
          alt="hero"
          className="w-full -z-[1] -mb-36 gradient-mask-b-0"
        />
        <div className="row-one flex z-10 mx-2 ">
          <Product
            image={
              "https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY218_.jpg"
            }
            title={"The lean Startup"}
            price={29.99}
            rating={4}
            id={1}
          />
          <Product
            image={
              "https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY218_.jpg"
            }
            title={"The lean Startup"}
            price={29}
            rating={4}
            id={2}
          />
        </div>
        <div className="row-two flex z-10 mx-2">
          <Product
            image={
              "https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY218_.jpg"
            }
            title={"The lean Startup"}
            price={29}
            rating={4}
            id={3}
          />
          <Product
            image={
              "https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY218_.jpg"
            }
            title={"The lean Startup"}
            price={29}
            rating={4}
            id={4}
          />
          <Product
            image={
              "https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY218_.jpg"
            }
            title={"The lean Startup"}
            price={29}
            rating={4}
            id={5}
          />
        </div>
        <div className="row-three flex z-10 mx-2">
          <Product
            image={
              "https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY218_.jpg"
            }
            title={"The lean Startup"}
            price={29}
            rating={3}
            id={6}
          />
        </div>
      </div>
    </div>
  );
}
