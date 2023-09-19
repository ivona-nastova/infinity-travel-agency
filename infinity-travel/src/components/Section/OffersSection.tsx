import { useRouter } from "next/router";
import OfferButton from "../Other/OfferButton";

type Props = {
  names: (string | undefined)[];
};

const OffersSection = ({ names }: Props) => {
  const router = useRouter();
  const region = router.query.region;

  function handleFilter(title: string) {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, region: title },
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <>
      <div className="flex flex-wrap container-fluid py-10">
        {names &&
          names.map((name) => (
            <OfferButton
              key={name}
              title={name!}
              filterArray={handleFilter}
              region={region}
            />
          ))}
        {names.length === 4 && (
          <OfferButton
            filterArray={handleFilter}
            title="Last Minute"
            region={region}
          />
        )}
      </div>
    </>
  );
};

export default OffersSection;
