import React from "react";
import Title from "../Global/Title";
import Image from "next/image";

const AboutTripSection = () => {
  return (
    <div className="container-fluid">
      <div className="flex flex-wrap justify-between items-center mb-16">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0" id="miceTourism">
          <h4 className="text-32 mb-3">Mice Tourism</h4>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
        </div>

        <Image
          className="w-full lg:w-1/2"
          src="/images/mice-tourism.png"
          width={528}
          height={315}
          alt="Mice Tourism"
        />
      </div>

      <div
        className="flex flex-wrap justify-between items-center mb-16 flex-col-reverse lg:flex-row"
        id="teamBuilding"
      >
        <Image
          className="w-full lg:w-1/2 mb-4"
          src="/images/team-building.png"
          width={528}
          height={315}
          alt="Team Building"
        />

        <div className="w-full lg:w-2/5 mb-4 lg:mb-0" id="miceTourism">
          <h4 className="text-32 mb-3">Team Building</h4>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-between items-center"
        id="tailorMade"
      >
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0" id="miceTourism">
          <h4 className="text-32 mb-3">Tailor made</h4>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
        </div>

        <Image
          className="w-full lg:w-1/2"
          src="/images/tailor-made.png"
          width={528}
          height={315}
          alt="Tailor Made"
        />
      </div>
    </div>
  );
};

export default AboutTripSection;
