import Image from "next/image";
import BookForm from "@/components/BookForm";
import Link from "next/link";
import { getPlace } from "@/components/book/actions";

const Home = () => {
  const vistPlace = getPlace();

  return (
    <div className="bg-gray-100 pt-20 px-5">
      <div>
        <BookForm />
        {vistPlace.visitedPlace.map((place) => (
          <div className="mt-10">
            <p className="mb-3 text-lg font-semibold">{place.categoryType}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
              {place.place.map((item) => (
                <div key={item.id}>
                  <Link href={`/book/${item.id}`}>
                    <Image
                      src={item.image}
                      alt="banner"
                      className="w-full rounded-md"
                    />
                  </Link>
                  <div className="mt-3">
                    <p>
                      {item.stay}-{item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.away} Kilometers away
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">
                      {item.startDate} - {item.endDate}
                    </p>
                    <p className="text-sm font-semibold">{item.amount} 1 day</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
