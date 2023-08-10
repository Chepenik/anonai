"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("584c71bf-4929-4107-9447-c83808b10597");
  }, []);

  return null;
};
