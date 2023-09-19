import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "src/components/Global/Banner";
import SeeMoreLink from "src/components/Global/SeeMoreLink";
import Title from "src/components/Global/Title";
import OffersSection from "src/components/Section/OffersSection";
import CardsSlider from "src/components/Sliders/CardsSlider";
import uniqueRegions from "src/helpers/uniqueRegions";
import { ArrangementType } from "src/types";

type Props = { arrangementsData: ArrangementType[] };

const ExploreMacedoniaPage: NextPage<Props> = ({ arrangementsData }) => {
  const router = useRouter();
  const region = router.query.region;

  const arrangementsInMacedonia = arrangementsData.filter(
    (arrangement) => arrangement.location.country === "Македонија"
  );
  const arrangements = arrangementsInMacedonia.filter(
    (arrangement) =>
      arrangement.type === "Apartment" || arrangement.type === "Hotel"
  );

  const uniqueCitiesInMacedonia = uniqueRegions(arrangementsInMacedonia);

  const filteredArrangementsByRegion = region
    ? arrangements.filter(
        (arrangement) => arrangement.location.region === region
      )
    : arrangements;

  const excursionInMacedonia = arrangementsInMacedonia.filter(
    (arrangement) => arrangement.type === "Izlet"
  );
  const filteredExcursion = region
    ? excursionInMacedonia.filter(
        (arrangement) => arrangement.location.region === region
      )
    : excursionInMacedonia;

  return (
    <>
      <Head>
        <title>Истражи ја Македонија</title>
      </Head>
      <Banner image="/images/banner/banner-06.png" />
      <Title title="Истражи ја Македонија" />
      <OffersSection names={uniqueCitiesInMacedonia} />
      <CardsSlider arrangements={filteredArrangementsByRegion} />
      <Link href="/Македонија">
        <SeeMoreLink />
      </Link>
      <Title title="Излети" />
      <CardsSlider arrangements={filteredExcursion} />
      <Link href="/Македонија/izleti">
        <SeeMoreLink />
      </Link>
    </>
  );
};

export default ExploreMacedoniaPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  return {
    props: { arrangementsData },
  };
};
