import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex-col hidden md:flex w-2/5">
      <h4 className="text-26 mb-2">Kонтакт</h4>
      <span className="mb-1">
        Aдреса: Бул, Даме Груев бр 14 лок.24 <br /> 1000 Скопје, Македонија
      </span>
      <span className="mb-1">E-маил: contact@infinitytravel.mk</span>
      <span className="mb-1">Телефон: 023100360/ 072254160</span>
      <span className="flex text-32 text-darkPurple">
        <Link
          href="https://www.instagram.com/infinitytravel.mk/"
          className="mr-4"
        >
          <FaInstagram />
        </Link>
        <Link href={"/"}>
          <FaFacebook />
        </Link>
      </span>
    </div>
  );
};

export default Contact;
