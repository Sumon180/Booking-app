import Image from "next/image";
import BookForm from "@/components/BookForm";
import { countrySides } from "@/data";

const Home = () => {
  return (
    <div className="bg-gray-100 pt-20 px-5">
      <div>
        <div className="w-full ">
          <BookForm />
        </div>
        <div className="mt-10">
          <p className="mb-3 text-lg font-semibold">
            {countrySides.mostVisited.type}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
            {countrySides.mostVisited.place.map((country) => (
              <div
                key={country.id}
                className="w-full rounded-md overflow-hidden"
              >
                <Image
                  // unoptimized
                  src={country.image}
                  alt="banner"
                  className="w-full rounded-md"
                />
                <div className="mt-3">
                  <p>
                    {country.stay}-{country.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {country.away} Kilometers away
                  </p>
                  <p className="text-sm text-gray-500">
                    {country.startDate}-{country.endDate}
                  </p>
                  <p className="text-sm">{country.amount} 1 day</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <p className="mb-3 text-lg font-semibold">
            {countrySides.nearestPlaces.type}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
            {countrySides.nearestPlaces.place.map((country) => (
              <div
                key={country.id}
                className="w-full rounded-md overflow-hidden"
              >
                <Image
                  // unoptimized
                  src={country.image}
                  alt="banner"
                  className="w-full rounded-md"
                />
                <div className="mt-3">
                  <p>
                    {country.stay}-{country.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {country.away} Kilometers away
                  </p>
                  <p className="text-sm text-gray-500">
                    {country.startDate}-{country.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <p className="mb-3 text-lg font-semibold">
            {countrySides.populerPlaces.type}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
            {countrySides.populerPlaces.place.map((country) => (
              <div
                key={country.id}
                className="w-full rounded-md overflow-hidden"
              >
                <Image
                  // unoptimized
                  src={country.image}
                  alt="banner"
                  className="w-full rounded-md"
                />
                <div className="mt-3">
                  <p>
                    {country.stay}-{country.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {country.away} Kilometers away
                  </p>
                  <p className="text-sm text-gray-500">
                    {country.startDate}-{country.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
