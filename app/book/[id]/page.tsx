"use client";

import { getVisitedPlaceById } from "@/components/book/actions";
import Image from "next/image";
import React from "react";

const BookPage = ({ params }: BookParamslProps) => {
  const { id } = params;

  const bookPlace = getVisitedPlaceById(id);
  console.log(bookPlace);

  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-7/12">Image tag</div>
        <div className="w-5/12">Book</div>
      </div>
    </div>
  );
};

export default BookPage;
