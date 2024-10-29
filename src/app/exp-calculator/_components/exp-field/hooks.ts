"use client";

import { useState } from "react";

export const useExp = (defaultLevel: number) => {
  const [level, setLevel] = useState<number>(defaultLevel);
  const [exp, setExp] = useState<number>(0);
  const [maxExp, setMaxExp] = useState<number>(0);

  const handleLevel = (level: number) => {
    setLevel(level);
    setMaxExp(level * 10000);
    console.log(maxExp);
  };

  return {
    level,
    exp,
    maxExp,
    handleLevel,
    setExp,
  };
};
