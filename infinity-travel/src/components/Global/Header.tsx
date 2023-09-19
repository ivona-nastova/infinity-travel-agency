import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/images/icons/logo.svg";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaSortDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownMenu from "../Other/DropdownMenu";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const {drzava, region} = router.query

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropDown, setToggleDropdown] = useState(false);

  function closeMenu() {
    setToggleDropdown(false);
    setToggleMenu(false);
  }

  useEffect(() => {
    closeMenu();
  }, [router.pathname, drzava, region]);

  return (
    <nav className="flex items-center lg:p-3 justify-between flex-wrap w-full">
      <Link rel="preload" href={"/"}>
        <Image
          src={logo}
          width={120}
          height={71}
          alt="logo"
          className="sm:ml-4 ml-0 object-contain h-auto max-w-full"
          placeholder="blur"
          blurDataURL={"public/images/icons/logo.svg"}
        />
      </Link>

      <div className="flex lg:hidden text-26 items-center">
        <span className="rounded-full bg-blue p-1 mr-3">
          <FiSearch className="text-white font-bold" />
        </span>
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <RxHamburgerMenu className="text-blue cursor-pointer mr-4" />
        </button>
      </div>

      <div
        className={`text-color-dark-purple medium-font-size ${
          toggleMenu ? "block" : "hidden"
        } w-full lg:w-auto lg:flex
            p-3 lg:p-0 shadow-lg lg:border-none shadow-neutral-400 lg:shadow-none`}
      >
        <Link
          href={"/"}
          className={`sm:mb-1 lg:mb-0 lg:mr-6 hidden lg:block ${
            pathname === "/" ? "active" : ""
          }`}
        >
          Дома
        </Link>

        <div className="relative sm:mb-1 lg:mb-0 lg:mr-6">
          <div
            className="flex cursor-pointer items-start"
            onClick={() => setToggleDropdown(!toggleDropDown)}
          >
            <span>Дестинации</span>
            <FaSortDown className="text-blue text-18" />
          </div>
          <DropdownMenu toggleDropDown={toggleDropDown} pathname={pathname} />
        </div>

        <Link
          rel="preload"
          href={"/grupni-patuvanja"}
          className={`sm:mb-1 lg:mb-0 lg:mr-6 block ${
            pathname === "/grupni-patuvanja" ? "active" : ""
          }`}
        >
          Групни Патувања
        </Link>
        <Link
          rel="preload"
          href={"/avio-karti"}
          className={`sm:mb-1 lg:mb-0 lg:mr-6 block ${
            pathname === "/avio-karti" ? "active" : ""
          }`}
        >
          Авио Карти
        </Link>
        <Link
          rel="preload"
          href={"/istrazi-ja-makedonija"}
          className={`sm:mb-1 lg:mb-0 lg:mr-6 block ${
            pathname === "/istrazi-ja-makedonija" ? "active" : ""
          }`}
        >
          Истражи ја Македонија
        </Link>
        <Link
          rel="preload"
          href={"/za-nas"}
          className={`sm:mb-1 lg:mb-0 lg:mr-6 block ${
            pathname === "/za-nas" ? "active" : ""
          }`}
        >
          За нас
        </Link>
        <span className="sm:mb-1 lg:mb-0 lg:mr-6 flex items-center">
          <FaPhoneAlt className="text-blue" />
        <Link href="tel:02/2100-360">02/2100-360</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
