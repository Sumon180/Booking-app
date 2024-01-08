import { FC } from "react";
import Link from "next/link";
import { getItems } from "../utils/db";

const Home: FC<{ items: Item[] }> = () => {
  const items = getItems();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold mb-4">Item List</h1>
        <ul className="text-center p-8 bg-white shadow-md rounded-md">
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              <Link
                href={`/items/update/${item.id}`}
                className="text-blue-500 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/items/create"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Create Item
        </Link>
      </div>
    </div>
  );
};

export default Home;
