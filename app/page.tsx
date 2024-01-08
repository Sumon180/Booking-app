import Image from "next/image";
import banner from "@/public/pexels-arthouse-studio-4557304.jpg";
import BookForm from "@/components/BookForm";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen pt-20 px-5">
      <div>
        <div className="w-full ">
          <BookForm />
        </div>
        <div className="">
          <h1>Hello Sumon</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
