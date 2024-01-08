import React from "react";
import Link from "next/link";
import { getItems } from "@/utils/db";

const UserList = () => {
  const items = getItems();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <ul className="text-center w-96 max-w-full p-8 bg-white shadow-md rounded-md">
        {items.map((item) => (
          <li key={item.id} className="mb-2 flex items-center justify-between">
            {item.name}
            <div className="flex items-center gap-5">
              <Link href={`/items/update/${item.id}`}>Update</Link>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
