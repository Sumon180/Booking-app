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

export const countrySides = {
  mostVisited: {
    type: "Most Visited country",
    place: [
      {
        id: 2,
        name: "Australia",
        stay: "Sydney",
        image: sydney,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 3,
        name: "Canada",
        stay: "Vancouver, BC",
        image: vancouver,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 4,
        name: "China",
        stay: "Beijing",
        image: beyjing,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 5,
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
  nearestPlaces: {
    type: "Nearest country",
    place: [
      {
        id: 11,
        name: "Germany",
        stay: "Cochem, RP",
        image: CochemRP,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 21,
        name: "India",
        stay: "Jodhpur",
        image: ankitGupta,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 31,
        name: "Japan",
        stay: "japan",
        image: japan,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 41,
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
  populerPlaces: {
    type: "Popuer visited",
    place: [
      {
        id: 11,
        name: "New Zealand",
        stay: "Kushtia",
        image: vancouver,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 21,
        name: "Norway",
        stay: "Kushtia",
        image: vancouver,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 31,
        name: "Russia",
        stay: "Kushtia",
        image: vancouver,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: 41,
        name: "South Korea",
        stay: "Kushtia",
        image: vancouver,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: Date.now().toString() + 1,
        name: "Spain",
        stay: "Kushtia",
        image: vancouver,
        away: 453,
        startDate: startDate,
        endDate: endDateFormatted,
        amount: "$56",
      },
      {
        id: Date.now().toString() + 2,
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
};
