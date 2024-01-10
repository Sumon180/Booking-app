import { getMostVisitedPlaceById } from "@/components/book/actions";
import Image from "next/image";
import React from "react";

const BookPage = ({ params }: ParamslProps) => {
  const { id } = params;

  const bookPlace = getMostVisitedPlaceById(id);

  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row gap-5 px-5 w-full">
        <div className="w-7/12">
          <Image
            src={bookPlace?.image as unknown as string}
            alt="banner"
            className="w-full"
          />
        </div>
        <div className="w-5/12">Book</div>
      </div>
    </div>
  );
};

export default BookPage;
