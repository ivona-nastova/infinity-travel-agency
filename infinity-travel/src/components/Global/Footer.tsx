import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import chatIcon from "public/images/icons/chat-icon.svg";
import LiveChatCard from "../Card/LiveChatCard";

const Footer = () => {
  const [toggleLiveChat, setToggleLiveChat] = useState(false);

  function closeLiveChat() {
    setToggleLiveChat(false);
  }

  return (
    <footer className="relative">
      <div className="flex flex-wrap justify-between text-darkPurple p-12">
        <div className="flex flex-col">
          <h4 className="text-26 mb-2">Дестинации</h4>
          <Link rel="preload" href={"/Грција"} className="mb-1">
            Грција
          </Link>
          <Link rel="preload" href={"/Турција"} className="mb-1">
            Турција
          </Link>
          <Link rel="preload" href={"/Црна-Гора"} className="mb-1">
            Црна Гора
          </Link>
          <Link rel="preload" href={"/Хрватска"} className="mb-1">
            Хрватска
          </Link>
          <Link rel="preload" href={"/Египет"} className="mb-1">
            Египет
          </Link>
          <Link rel="preload" href={"/Италија"} className="mb-1">
            Италија
          </Link>
          <Link rel="preload" href={"/egzoticni-destinacii"} className="mb-1">
            Далечни патувања
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-26 mb-2">Информации</h4>
          <Link rel="preload" href="/avio-karti" className="mb-1">
            Авио карти
          </Link>
          <Link
            rel="preload"
            href="/grupni-patuvanja#miceTourism"
            className="mb-1"
          >
            MICE Tуризам
          </Link>
          <Link
            rel="preload"
            href="/grupni-patuvanja#teamBuilding"
            className="mb-1"
          >
            Team building
          </Link>
          <Link
            rel="preload"
            href="/grupni-patuvanja#tailorMade"
            className="mb-1"
          >
            Tailor made
          </Link>
          <Link rel="preload" href="/" className="mb-1">
            Gift card
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-26 mb-2">Останато</h4>
          <Link rel="preload" href="/za-nas" className="mb-1">
            За нас
          </Link>
          <Link rel="preload" href="/opsti-uslovi" className="mb-1">
            Општи услови за патување
          </Link>
          <Link rel="preload" href="/patnicko-osiguruvanje" className="mb-1">
            Патничко осигурување
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-26 mb-2">Kонтакт</h4>
          <span className="mb-1">
            Aдреса: Бул, Даме Груев бр 14 лок.24 <br /> 1000 Скопје, Македонија
          </span>
          <span className="mb-1">E-маил: <Link href="mailto:contact@infinitytravel.mk">contact@infinitytravel.mk</Link></span>
          <span className="mb-1">Телефон: 023100360/ 072254160</span>
          <span className="flex text-32 text-darkPurple">
            <Link
              rel="preload"
              target="blank"
              href="https://www.instagram.com/infinitytravel.mk/"
              className="mr-4"
            >
              <FaInstagram />
            </Link>
            <Link rel="preload" href="/">
              <FaFacebook />
            </Link>
          </span>
        </div>
      </div>

      <button
        id="live-chat"
        onClick={() => setToggleLiveChat(true)}
        className="flex bg-orange items-center px-4 py-2 rounded-lg absolute z-10"
      >
        <Image
          className="mr-2"
          src={chatIcon}
          width={40}
          height={40}
          alt="chat-icon"
        />
        Live chat
      </button>

      {toggleLiveChat && <LiveChatCard closeLiveChat={closeLiveChat} />}

      <div className="bg-purple p-3 pl-12 text-white w-full">
        <span>&copy; 2023 Инфинити травел. Сите права се задржани.</span>
      </div>
    </footer>
  );
};

export default Footer;
