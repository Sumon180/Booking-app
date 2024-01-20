"use client";

import { getVisitedPlaceById } from "@/components/book/actions";
import Image from "next/image";
import React from "react";

type ParamsType = {
  id: number;
};

const BookPage = ({ params }: { params: ParamsType }) => {
  const { id } = params;
  const bookPlace = getVisitedPlaceById(id);

  if (!bookPlace) {
    return <div>Place not found</div>;
  }

  const { name, stay, startDate, endDate, amount, image } = bookPlace;
  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-7/12">
          <Image src={image} alt={"name"} width={500} height={300} />
        </div>
        <div className="w-5/12">
          <h2>{name}</h2>
          <p>Stay: {stay}</p>
          <p>
            Dates: {startDate} to {endDate}
          </p>
          <p>Amount: {amount}</p>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
