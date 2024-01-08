"use client";

import { FC } from "react";
import { getItemById } from "@/utils/db";
import { useRouter } from "next/navigation";

interface ItemDetailProps {
  params: {
    id: number;
  };
}

const ItemDetail: FC<ItemDetailProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const item = getItemById(id);
  console.log(item);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleGoBack = () => {
    router.push("/items");
  };

  return (
    <>
      <div key={item.id}>
        <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
        <p>ID: {item.id}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default ItemDetail;
