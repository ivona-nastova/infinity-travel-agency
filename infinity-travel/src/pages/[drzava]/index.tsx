import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "src/components/Global/Banner";
import SeeMoreLink from "src/components/Global/SeeMoreLink";
import Title from "src/components/Global/Title";
import OffersSection from "src/components/Section/OffersSection";
import CardsSlider from "src/components/Sliders/CardsSlider";
import filterArrangments from "src/helpers/filterArrangments";
import { ArrangementType } from "src/types";
import ErrorPage from "src/pages/404";

type Props = {
  arrangementsData: ArrangementType[];
};

const CountryPage: NextPage<Props> = ({ arrangementsData }) => {
  const router = useRouter();
  const drzava = router.query.drzava;
  const region = router.query.region;

  const { appartments, hotels, regions, error } = filterArrangments(
    arrangementsData,
    drzava,
    region, 
  );

  return (
    <>
 {error && <ErrorPage/>}
{error === false &&  
<>
<Head>
        <title>{drzava}</title>
      </Head>
      <Banner image="/images/banner/banner-04.png" />
      <OffersSection names={regions} />
      <div>
        <Title title={`${drzava} Апартмани`} />
        <CardsSlider arrangements={appartments} />
        <Link href={`${drzava}/apartmani`}>
          <SeeMoreLink />
        </Link>
      </div>

      <div>
        <Title title={`${drzava} Хотели`} />
        <CardsSlider arrangements={hotels} />
        <Link href={`${drzava}/hoteli`}>
          <SeeMoreLink />
        </Link>
      </div>
</>
}
</>
  );
};

export default CountryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  const allCountries = arrangementsData.map(
    (arrangement) => arrangement.location.country
  );
  const uniqueCountries = Array.from(new Set([...allCountries]));

  const paths = uniqueCountries.map((country) => {
    return {
      params: {
        drzava: country,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  return {
    props: {
      arrangementsData,
    },
  };
};
