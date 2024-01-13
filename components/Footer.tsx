import React from "react";

const Footer = () => {
  return (
    <div className="py-3 px-5">
      <div className="flex items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} TouristBD</p>
        <p>Created by sumon</p>
      </div>
    </div>
  );
};

export default Footer;
