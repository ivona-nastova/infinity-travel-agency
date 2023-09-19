import { NextPage } from "next";
import ContactForm from "src/components/ContactForm/ContactForm";
import Banner from "src/components/Global/Banner";
import Title from "src/components/Global/Title";
import AboutTripSection from "src/components/Section/AboutTripSection";
import Head from "next/head";

const GroupTripsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Групни патувања</title>
      </Head>
      <Banner image="/images/banner/banner-02.png" />
      <div className="py-10">
        <Title title="Групни патувања" />
        <AboutTripSection />
        <Title title="Контакт" />
        <ContactForm />
      </div>
    </>
  );
};

export default GroupTripsPage;
