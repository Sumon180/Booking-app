import { FC } from "react";
import UserList from "@/components/UserList";
import Link from "next/link";

const Home: FC<{ items: Item[] }> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div>
        <UserList />
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
