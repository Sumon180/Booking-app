import countrySides from "@/data";

export const getPlace = () => countrySides;

export const getVisitedPlaceById = (id: string) => {
  countrySides.visitedPlace.flatMap((item) => {
    item.place.flatMap((book) => {
      book.id === id;
    });

    console.log(item);

    return item;
  });
};
