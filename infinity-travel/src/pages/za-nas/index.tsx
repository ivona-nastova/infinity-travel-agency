import { NextPage } from "next";
import ContactForm from "src/components/ContactForm/ContactForm";
import Banner from "src/components/Global/Banner";
import Title from "src/components/Global/Title";
import AboutUsSection from "src/components/Section/AboutUsSection";
import Head from "next/head";

const AboutUsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>За нас</title>
      </Head>
      <Banner image="/images/banner/banner-08.png" />
      <Title title="За нас" />
      <AboutUsSection />
      <ContactForm />
    </>
  );
};

export default AboutUsPage;
