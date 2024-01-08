"use client";

import React from "react";
import Link from "next/link";
import { deleteItem, getItems } from "@/utils/db";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserList = () => {
  const router = useRouter();
  const items = getItems();

  const removeItem = async (id: string) => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      deleteItem(id);
      router.refresh();
      toast.success("Item deleted");
    }
  };

  if (!items.length) {
    return (
      <h1 className="text-2xl font-bold mb-4">Hey user not created yet</h1>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <ul className="text-center w-96 max-w-full p-8 bg-white shadow-md rounded-md">
        {items.map((item) => (
          <li key={item.id} className="mb-2 flex items-center justify-between">
            {item.name}
            <div className="flex items-center gap-5">
              <Link href={`/items/update/${item.id}`}>Update</Link>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
