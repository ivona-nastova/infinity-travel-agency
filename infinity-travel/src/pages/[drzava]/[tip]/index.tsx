import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import OfferCard from "src/components/Card/OfferCard";
import Filters from "src/components/Filters/Filters";
import Banner from "src/components/Global/Banner";
import Title from "src/components/Global/Title";
import CheckArrangments from "src/helpers/checkArrangments";
import { ArrangementType } from "src/types";

type Props = { arrangementsData: ArrangementType[] };

const ArrangementTypePage: NextPage<Props> = ({ arrangementsData }) => {
  const router = useRouter();
  const query = router.query;
  const { drzava, tip, name, price } = query;

  const { arrangements, typeName } = CheckArrangments(
    arrangementsData,
    drzava,
    tip,
    name,
    price
  );

  return (
    <>
      <Head>
        <title>
          {drzava} - {typeName}
        </title>
      </Head>
      <Banner image="/images/banner/banner-04.png" />
      <Title title={`${drzava} ${typeName}`} />
      <div className="container-sm flex flex-wrap md:flex-nowrap">
        <Filters />
        <div className="w-full lg:w-3/4">
          <div className="md:pl-5 flex flex-wrap">
            {arrangements?.map((arrangement) => (
              <div key={arrangement.id} className="offer-card w-1/2 lg:w-2/6">
                <OfferCard offer={arrangement} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArrangementTypePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  const allTypes = ["apartmani", "hoteli"];

  const typePaths = arrangementsData.flatMap((arrangement) => {
    return allTypes.map((type) => {
      return {
        params: {
          drzava: arrangement.location.country,
          tip: type,
        },
      };
    });
  });

  const izletiTypes = ["izleti"];

  const izletiPaths = izletiTypes.map((arrangement) => {
    return {
      params: {
        drzava: "Македонија",
        tip: "izleti",
      },
    };
  });

  const paths = [...typePaths, ...izletiPaths];

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
