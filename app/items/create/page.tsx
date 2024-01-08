"use client";

import { FC, useState } from "react";
import { addItem } from "@/utils/db";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const CreateItem: FC = () => {
  const router = useRouter();
  const [itemName, setItemName] = useState("");

  const handleCreate = () => {
    if (!itemName) {
      toast.error("Please enter a item name");
    } else {
      const newItem = {
        id: Date.now(),
        name: itemName,
      };

      addItem(newItem);
      router.push(`/items/${newItem.id}`);
    }
  };

  return (
    <>
      <Toaster position="bottom-left" />
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md p-4">
          <h1 className="text-2xl font-bold mb-4">Create Item</h1>

          <label className="block mb-2">
            <span className="text-gray-700">Item Name:</span>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </label>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateItem;
