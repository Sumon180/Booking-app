"use client";

import { FC, Fragment } from "react";
import { getItemById } from "@/utils/db";
import { useRouter } from "next/navigation";

const ItemDetail: FC<ParamslProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const item = getItemById(id);
  // console.log(item);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        key={item.id}
        className="bg-white shadow-md p-6 rounded-md max-w-md mx-auto my-4"
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-700">{item.name}</h1>
        <p className="text-gray-600">ID: {item.id}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4 transition-colors duration-300"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
