import countrySides from "@/data";

export const getPlace = () => countrySides;

export const getVisitedPlaceById = (id: string) => {
  countrySides.visitedPlace.find((item) =>
    item.place.find((book) => book.id == id)
  );
};
