import React from "react";
import { ImSpinner2 } from "react-icons/im";

function RootLoading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <ImSpinner2 className="animate-spin h-12 w-12" />
    </div>
  );
}

export default RootLoading;
