import { GetStaticProps, NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "src/components/Global/Banner";
import SeeMoreLink from "src/components/Global/SeeMoreLink";
import Title from "src/components/Global/Title";
import CardsSlider from "src/components/Sliders/CardsSlider";
import GroupTripCards from "src/components/Section/GroupTripCards";
import GroupTripSection from "src/components/Section/GroupTripSection";
import MomentSection from "src/components/Section/MomentSection";
import OffersSection from "src/components/Section/OffersSection";
import TestimonialSection from "src/components/Section/TestimonialSection";
import uniqueRegions from "src/helpers/uniqueRegions";
import { ArrangementType, ImageType, TestimonialType } from "src/types";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  testimonialData: TestimonialType[];
  momentsData: ImageType[];
  arrangementsData: ArrangementType[];
};

const Home: NextPage<Props> = ({
  testimonialData,
  momentsData,
  arrangementsData,
}) => {
  const router = useRouter();
  const region = router.query.region;
  let arrangementsInGreece: ArrangementType[];

  arrangementsInGreece = arrangementsData.filter(
    (arrangement) => arrangement.location.country === "Грција"
  );
  const regions = uniqueRegions(arrangementsInGreece);

  if (region) {
    arrangementsInGreece = arrangementsInGreece.filter(
      (arrangement) => arrangement.location.region === region
    );
    if (region === "Last Minute") {
      arrangementsInGreece = arrangementsInGreece.filter(
        (arrangement) => arrangement.isLastMinute
      );
    }
  }

  return (
    <>
      <Head>
        <title>Infinity Travel Macedonia</title>
      </Head>
      <Banner image="/images/banner/banner-01.png" />
      <Title title="Актуелни понуди" />
      <OffersSection names={regions} />
      <CardsSlider arrangements={arrangementsInGreece} />
      <Link href="/Грција">
        <SeeMoreLink />
      </Link>
      <GroupTripSection />
      <GroupTripCards />
      <TestimonialSection testimonialData={testimonialData} />
      <MomentSection momentsData={momentsData} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const testimonialRes = await fetch("https://experienced-chatter-path.glitch.me/testimonials");
  const testimonialData: TestimonialType[] = await testimonialRes.json();

  const momentsRes = await fetch("https://experienced-chatter-path.glitch.me/moments");
  const momentsData: ImageType[] = await momentsRes.json();

  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  return {
    props: {
      testimonialData,
      momentsData,
      arrangementsData,
    },
  };
};
