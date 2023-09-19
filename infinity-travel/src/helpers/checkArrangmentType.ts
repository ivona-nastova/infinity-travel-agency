const CheckArrangmentType = (type: string) => {
  let arrangementType;

  // Get pathname for each arrangment
  if (type === "Apartment") {
    arrangementType = "apartmani";
  } else if (type === "Hotel") {
    arrangementType = "hoteli";
  } else if (type === "Izlet") {
    arrangementType = "izleti";
  }
  return arrangementType;
};

export default CheckArrangmentType;
