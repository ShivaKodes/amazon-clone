import React from "react";

export default function HeaderOption(props) {
  return (
    <div
      className="header__option flex flex-col mx-2"
      onClick={props.onClick ? props.onClick : ""}
    >
      <span className="top-text text-xs">{props.topText}</span>
      <span className="bottom-text text-sm font-extrabold">
        {props.bottomText}
      </span>
    </div>
  );
}
