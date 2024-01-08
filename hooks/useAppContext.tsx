"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

function useDesigner() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }

  return context;
}

export default useDesigner;
