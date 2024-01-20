import { StaticImageData } from "next/image";

interface Item {
  id: string;
  name: string;
}
interface ParamslProps {
  params: {
    id: string;
  };
}

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

type VisitedPlaceCategory = {
  id: number;
  categoryType: string;
  place: Place[];
};

type CountrySides = {
  name: string;
  description: string;
  visitedPlace: VisitedPlaceCategory[];
};
