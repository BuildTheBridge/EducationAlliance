import React from "react";

export default function SectionOne() {
  return (
    <div className="w-full h-lvh">
      <div className="absolute w-full left-0 h-2/5 bg-gradient-to-b from-white via-white to-transparent"></div>
      <img
        src="https://static.toss.im/assets/homepage/newtossim/new_main.png"
        alt="s1-bg"
        className="w-full h-lvh"
      />
      <div className="absolute  left-0 bottom-16 flex w-full justify-center items-center">
        <img
          src="/images/icons/arrow-down.svg"
          alt="s1-arrow-down"
          className="animate-pulse w-10 h-10"
        />
      </div>
    </div>
  );
}

// position: absolute;
// top: 0px;
// left: 0;
// width: 100%;
// height: 500px;
// background: linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%);
