"use client";

import useDesigner from "@/hooks/useAppContext";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { isLoggedin } = useDesigner();

  return (
    <div className="flex items-center justify-between px-5 py-2 fixed left-0 right-0 top-0 bg-white">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          TouristBD
        </h1>
      </Link>
      {isLoggedin ? (
        <button className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-pink-500">
          S
        </button>
      ) : (
        <ul className="flex gap-3">
          <li>Login</li>
          <li>Sign in</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
