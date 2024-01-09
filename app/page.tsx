import Image from "next/image";
import BookForm from "@/components/BookForm";
import { countrySides } from "@/data";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen pt-20 px-5">
      <div>
        <div className="w-full ">
          <BookForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 mt-10">
          {countrySides.map((country) => (
            <div key={country.id} className="w-full rounded-md overflow-hidden">
              <Image
                // unoptimized
                src={country.image}
                alt="banner"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
