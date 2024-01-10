import { countrySides } from "@/data";

export const getPlace = () => countrySides;

export const getMostVisitedPlaceById = (id: string) =>
  countrySides.mostVisited.place.find((item) => item.id === id);

export const getNearestPlaceById = (id: string) =>
  countrySides.nearestPlaces.place.find((item) => item.id === id);

export const getPopulerPlacesById = (id: string) =>
  countrySides.populerPlaces.place.find((item) => item.id === id);
