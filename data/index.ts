import { format, addDays } from "date-fns";

import vancouver from "@/public/pexels-onur-kurtic-205377.jpg";
import sydney from "@/public/pexels-brett-stone-2845013.jpg";
import beyjing from "@/public/great-wall.jpg";
import BrownCastle from "@/public/Brown Castle.jpg";
import CochemRP from "@/public/CochemRP.jpg";
import ankitGupta from "@/public/ankit-gupta.jpg";
import japan from "@/public/japan.jpg";

const currentDate = new Date();
const endDate = addDays(currentDate, 5);
const startDate = format(currentDate, "LLL dd");
const endDateFormatted = format(endDate, "dd");

const countrySides = {
  name: "Country Sides",
  description: "Country Sides for the Visit",
  visitedPlace: [
    {
      id: 1,
      categoryType: "Most Visited country",
      place: [
        {
          id: 11,
          name: "Australia",
          stay: "Sydney",
          image: sydney,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 12,
          name: "Canada",
          stay: "Vancouver, BC",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 13,
          name: "China",
          stay: "Beijing",
          image: beyjing,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 14,
          name: "France",
          stay: "Brown Castle",
          image: BrownCastle,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
      ],
    },
    {
      id: 2,
      categoryType: "Nearest country",
      place: [
        {
          id: 21,
          name: "Germany",
          stay: "Cochem, RP",
          image: CochemRP,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 22,
          name: "India",
          stay: "Jodhpur",
          image: ankitGupta,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 23,
          name: "Japan",
          stay: "Japan",
          image: japan,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 24,
          name: "Mexico",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
      ],
    },
    {
      id: 3,
      categoryType: "Popular visited",
      place: [
        {
          id: 31,
          name: "New Zealand",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 32,
          name: "Norway",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 33,
          name: "Russia",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 34,
          name: "South Korea",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 35,
          name: "Spain",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
        {
          id: 36,
          name: "Bangladesh",
          stay: "Kushtia",
          image: vancouver,
          away: 453,
          startDate: startDate,
          endDate: endDateFormatted,
          amount: "$56",
        },
      ],
    },
  ],
};

export default countrySides;
