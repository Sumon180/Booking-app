import React from "react";

const Footer = () => {
  return (
    <div className="py-3 px-5">
      <div className="flex items-center justify-between">
        <p>Footer</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
