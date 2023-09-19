import React from "react";
import Image from "next/image";
import Link from "next/link";

const GroupTripSection = () => {
  return (
    <div className="flex flex-wrap h-60vh my-10">
      <div className="md:w-1/5 w-1/2 bg-[url(/images/group-trip-01.png)] bg-cover bg-no-repeat bg-top"></div>
      <div className="md:w-2/5 relative bg-[url(/images/group-trip-02.png)] bg-cover w-1/2 bg-no-repeat">
        <Image
          src="/images/group-trip-04.png"
          width={357}
          height={237}
          alt="group-trip"
          className="w-auto h-auto min-[768px]:w-1/2"
        />
        <Image
          src="/images/group-trip-05.png"
          width={318}
          height={211}
          alt="group-trip"
          className="absolute min-[768px]:w-1/2 bottom-7 right-0 md:right-40 w-auto h-auto"
        />

        <Image
          src="/images/icons/london-stamp.svg"
          width={180}
          height={189}
          alt="group-trip"
          className="hidden lg:block absolute z-30 -top-12 right-36 w-auto h-auto"
        />

        <Image
          src="/images/icons/istanbul-stamp.svg"
          width={233}
          height={117}
          alt="group-trip"
          className="hidden lg:block absolute z-30 -bottom-6 -left-16 w-auto h-auto"
        />
      </div>

      <div className="w-full bg-cover md:w-2/5 bg-[url(/images/group-trip-03.png)] flex items-center bg-no-repeat relative">
        <div className="bg-[url(/images/group-trip-vector.png)] flex mx-auto md:-m-28 z-30 flex-col bg-no-repeat p-5 sm:p-14 bg-bottom w-1/2 md:w-4/5">
          <h3 className="text-26 font-bold mb-3">Групни патувања</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
          </p>
          <Link
            href="/grupni-patuvanja"
            className="bg-orange text-center rounded-md px-4 py-2 uppercase mt-2"
          >
            Повеќе
          </Link>
          <Image
            src="/images/icons/purple-lines.svg"
            width={213}
            height={114}
            alt="purple-lines"
            className="hidden lg:block absolute z-30 -bottom-4 right-36 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupTripSection;
