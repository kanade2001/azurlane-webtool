"use client";

import { useState } from "react";

export const useExpCalculator = () => {
  const [currentExp, setCurrentExp] = useState<number>(0);
  const [targetExp, setTargetExp] = useState<number>(0);
  const [exp, setExp] = useState<number[]>([0, 0]);

  return {
    currentExp,
    targetExp,
    exp,
    setCurrentExp,
    setTargetExp,
    setExp,
  };
};
