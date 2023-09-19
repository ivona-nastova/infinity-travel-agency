import Link from "next/link";
import React from "react";

type Props = {
  toggleDropDown: boolean;
  pathname: string;
};

const DropdownMenu = ({ toggleDropDown, pathname }: Props) => {  
  return (
    <div
      className={`flex flex-col lg:absolute lg:right-0 z-10 mt-2 py-3 
      lg:w-56 border-y border-blue lg:border-none lg:rounded-md
       bg-white lg:shadow-lg
        ${toggleDropDown ? "block" : "hidden"}`}
    >
      <Link
        rel="preload"
        href="/Грција"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Грција
      </Link>
      <Link
        rel="preload"
        href="/Tурција"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Турција
      </Link>
      <Link
        rel="preload"
        href="/Албанија"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Албанија
      </Link>
      <Link
        rel="preload"
        href="/Хрватска"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Хрватска
      </Link>
      <Link
        rel="preload"
        href="/Црна-Гора"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Црна Гора
      </Link>
      <Link
        rel="preload"
        href="/Италија"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Италија
      </Link>
      <Link
        rel="preload"
        href="/Шпанија"
        className="lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100"
      >
        Шпанија
      </Link>
      <Link
        rel="preload"
        href="/egzoticni-destinacii"
        className={`lg:px-4 lg:py-2 py-1 text-sm hover:bg-gray-100 ${
          pathname === "/egzoticni-destinacii" ? "active" : ""
        }`}
      >
        Егзотични патувања
      </Link>
    </div>
  );
};

export default DropdownMenu;
