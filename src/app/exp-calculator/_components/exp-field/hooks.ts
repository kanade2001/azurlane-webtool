"use client";

import { useState } from "react";
import { ExpData } from "@/data/exp-data";

export const useExp = (defaultLevel: number) => {
  const [level, setLevel] = useState<number>(defaultLevel);
  const [exp, setExp] = useState<number>(0);
  const [maxExp, setMaxExp] = useState<number>(ExpData[level - 1].exp);

  const handleLevel = (level: number) => {
    const newLevel = Math.max(1, Math.min(level, 125));
    setLevel(newLevel);
    setMaxExp(ExpData[newLevel - 1].exp);
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
