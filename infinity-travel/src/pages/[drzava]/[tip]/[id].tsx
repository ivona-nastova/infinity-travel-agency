import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import Banner from "src/components/Global/Banner";
import Title from "src/components/Global/Title";
import PricesTable from "src/components/Other/PricesTable";
import GallerySlider from "src/components/Sliders/GallerySlider";
import { ArrangementType } from "src/types";

type Props = {
  arrangement: ArrangementType;
};

const ArrangementPage: NextPage<Props> = ({ arrangement }) => {
  let {
    name,
    location,
    description,
    gallery,
  } = arrangement;


  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Banner
        image={
          arrangement.type === "Izlet"
            ? "/images/banner/banner-07.png"
            : "/images/banner/banner-04.png"
        }
      />
      <Title title={name} />
      <div className="py-10">
        <div className="container-fluid">
          <div className="flex flex-wrap justify-between text-20 md:text-26 mb-4">
            <div>
              <Link className="mr-2 md:mr-4" href="#opis">
                Oпис
              </Link>
              <Link className="mr-2 md:mr-4" href="#galerija">
                Галерија
              </Link>
              <Link className="mr-2 md:mr-4" href="#ceni">
                Цени
              </Link>
              <Link className="mr-2 md:mr-4" href="#prevoz">
                Превоз
              </Link>
            </div>

            <span className="flex items-center text-gray-600">
              <SlLocationPin className={"text-26"} />
              {location.country}, {location.region}
            </span>
          </div>

          <div>
            <h3 className="text-26 my-6">{name}</h3>
            <p id="opis">{description}</p>
          </div>
        </div>

          <GallerySlider gallery={gallery}/>
          <PricesTable arrangment={arrangement}/>
      

       
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const arrangementsRes = await fetch("https://experienced-chatter-path.glitch.me/arrangements");
  const arrangementsData: ArrangementType[] = await arrangementsRes.json();

  const paths = arrangementsData.map((arrangement) => {
    let tip;
    if (arrangement.type === "Apartment") {
      tip = "apartmani";
    } else if (arrangement.type === "Hotel") {
      tip = "hoteli";
    } else if (
      arrangement.type === "Izlet" &&
      arrangement.location.country === "Македонија"
    ) {
      tip = "izleti";
    }
  
    return {
      params: {
        drzava: arrangement.location.country,
        tip: tip,
        id: arrangement.id.toString(),
      },
    };
  });
  
 
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const arrangementRes = await fetch(`https://experienced-chatter-path.glitch.me/arrangements/${id}`);

  const arrangement: ArrangementType[] = await arrangementRes.json();

  return {
    props: {
      arrangement,
    },
  };
};

export default ArrangementPage;
