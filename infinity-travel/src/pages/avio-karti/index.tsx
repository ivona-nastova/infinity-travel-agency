import Head from "next/head";
import TicketContact from "src/components/ContactForm/TicketContact";
import Banner from "src/components/Global/Banner";
import Title from "src/components/Global/Title";

const AirlineTicketsPage = () => {
  return (
    <>
      <Head>
        <title>Авио Карти</title>
      </Head>
      <Banner image="/images/banner/banner-03.png" />
      <Title title="Aвионски карти" />
      <TicketContact />
    </>
  );
};

export default AirlineTicketsPage;
