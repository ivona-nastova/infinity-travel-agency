import { ArrangementType } from "src/types";

export default function uniqueRegions(arrangements: ArrangementType[]) {
  const allRegions = arrangements.map(
    (arrangement) => arrangement.location.region
  );
  const uniqueRegions = Array.from(new Set([...allRegions]));

  return uniqueRegions;
}
