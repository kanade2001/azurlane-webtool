import { ExpData } from "@/data/exp-data";

export const calcExp = (level: number, exp: number) => {
  return ExpData[level - 1].total_exp + exp;
};
