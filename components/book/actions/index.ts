import countrySides from "@/data";
import { StaticImageData } from "next/image";

type Place = {
  id: number;
  name: string;
  stay: string;
  image: string | StaticImageData; // Update the type to string
  away: number;
  startDate: string;
  endDate: string;
  amount: string;
};

export const getPlace = () => countrySides;

export const getVisitedPlaceById = (id: number): Place | undefined => {
  const result = countrySides.visitedPlace.find((item) =>
    item.place.find((place) => place.id === id)
  );
  console.log(result);

  return result?.place.find((place) => place.id === id);
};
