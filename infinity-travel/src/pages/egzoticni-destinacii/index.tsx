import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import CardsSlider from "src/components/Sliders/CardsSlider";
import Banner from "src/components/Global/Banner";
import OffersSection from "src/components/Section/OffersSection";
import { ArrangementType } from "src/types";
import Head from "next/head";

type Props = {
  arrangementsData: ArrangementType[];
};

const ExocticDestinationsPage: NextPage<Props> = ({ arrangementsData }) => {
  const router = useRouter();
  const region = router.query.region;

  let exoticDestinations;

  exoticDestinations = arrangementsData.filter(
    (arrangement) => arrangement.exoticDestination
  );

  const countries = exoticDestinations.map(
    (arrangement) => arrangement.location.country
  );
  const uniqueCountries = Array.from(new Set([...countries]));

  if (region) {
    exoticDestinations = exoticDestinations.filter(
      (arrangement) => arrangement.location.country === region
    );
  }

  return (
    <>
      <Head>
        <title>Егзотични дестинации</title>
      </Head>
      <Banner image="/images/banner/banner-05.png" />
      <OffersSection names={uniqueCountries} />
      <div>
        <CardsSlider arrangements={exoticDestinations} />
      </div>
    </>
  );
};

export default ExocticDestinationsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  return {
    props: { arrangementsData },
  };
};
