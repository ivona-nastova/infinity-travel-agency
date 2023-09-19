import { NextPage } from "next";
import React from "react";
import Banner from "src/components/Global/Banner";
import Title from "src/components/Global/Title";
import Head from "next/head";

const TravelInsurancePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Патничко осигурување</title>
      </Head>
      <Banner image="/images/banner/banner-08.png" />
      <Title title="Патничко осигурување" />
      <div className="container-fluid pb-28 pt-7">
        <div className="mb-8">
          <h3 className="mb-3 text-26 font-bold">Lorem ipsum</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-26 font-bold">Lorem ipsum dolor sin amet</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor tation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-26 font-bold">
            Lorem ipsum consectetur adipiscing elit, sed do eiusmo
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor tation u
          </p>
        </div>
      </div>
    </>
  );
};

export default TravelInsurancePage;
