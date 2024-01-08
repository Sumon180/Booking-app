"use client";

import { FC, useState, useEffect } from "react";
import { getItemById, updateItem } from "@/utils/db";
import { useRouter } from "next/navigation";

interface UpdateItemProps {
  params: {
    id: number;
  };
}

const UpdateItem: FC<UpdateItemProps> = ({ params }) => {
  const { id } = params;
  const item = getItemById(id);
  const router = useRouter();
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    if (item) {
      setItemName(item.name);
    }
  }, [item]);

  const handleUpdate = () => {
    if (item) {
      const updatedItem = { ...item, name: itemName };
      updateItem(item.id, updatedItem);
      router.push(`/items/${item.id}`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Update Item</h1>
        <label className="block mb-4">
          <span className="text-gray-700">Item Name:</span>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateItem;
