import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2">
      <h1>Navbar</h1>
      <ul className="flex gap-3">
        <li>Login</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};

export default Navbar;
