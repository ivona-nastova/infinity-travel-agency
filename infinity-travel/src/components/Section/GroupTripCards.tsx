import React from "react";
import Image from "next/image";

const GroupTripCards = () => {
  return (
    <div className="bg-[url('/images/bg-group-trip.png')]
     bg-no-repeat bg-cover h-80 flex justify-center items-center relative
      mx-auto w-full md:w-11/12 sm:text-16 text-11">
      <Image
        className="hidden md:block absolute -top-5 -left-8"
        src="/images/icons/purple-ribbon.svg"
        width={150}
        height={100}
        alt="purple-ribbon"
      />

      <div className="w-1/3 text-center flex flex-col items-center">
        <Image
          src="/images/icons/suitcase-icon.svg"
          width={70}
          height={70}
          alt="suitcase-icon"
        />
        <span>1000+патувања</span>
        <p className="hidden lg:block"> Започнете ја вашата авантура</p>
      </div>

      <div className="w-1/3 text-center flex flex-col items-center">
        <Image
          src="/images/icons/global-network-icon.svg"
          width={70}
          height={70}
          alt="global-network-icon"
        />
        <span>15000+патници годишно</span>
        <p className="hidden lg:block">
          Бидете дел од нашите задоволни патници
        </p>
      </div>

      <div className="w-1/3 text-center flex flex-col items-center">
        <Image
          src="/images/icons/location-icon.svg"
          width={70}
          height={70}
          alt="location-icon"
        />
        <p>Одберете ја вашата дестинација</p>
      </div>

      <Image
        className="hidden md:block absolute -bottom-5 right-0"
        src="/images/icons/purple-ribbon.svg"
        width={150}
        height={100}
        alt="purple-ribbon"
      />
    </div>
  );
};

export default GroupTripCards;
