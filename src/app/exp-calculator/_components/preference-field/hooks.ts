"use client";

import { useState, useEffect } from "react";

import { ExpData, ExpDataType, InitialExpData } from "@/data/exp-data";

export const usePreferences = () => {
  const [category, setCategory] = useState<string>("Normal");
  const [selected, setSelected] = useState<string>("12-4");
  const [area, setArea] = useState<ExpDataType>(InitialExpData);
  const [battle, setBattle] = useState<[boolean, boolean]>([true, false]);
  const [expBonus, setExpBonus] = useState<number[]>([20, 0, 0, 0]);
  const [exp, setExp] = useState<number[]>([0, 0]);

  const handleCategory = (category: string) => {
    setCategory(category);
    if (category === "Custom") {
      setArea({
        id: "custom",
        label: "カスタム",
        exp: [0, 0, 0, 0],
        num_battles: 5,
        num_battles_b: 1,
      });
    } else {
      setArea(ExpData.find((data) => data.id === selected) || InitialExpData);
    }
  };

  const handleSelected = (area: string) => {
    setSelected(area);
    setArea(ExpData.find((data) => data.id === area) || InitialExpData);
  };

  const handleCustomExp = (index: number, exp: number) => {
    const newExp = [...area.exp];
    newExp[index] = exp;
    setArea({ ...area, exp: newExp });
  };

  const handleCustomBattle = (index: number, num: number) => {
    const _num = num < 1 ? 1 : num;
    if (index === 0) {
      setArea({ ...area, num_battles: _num });
    } else {
      setArea({ ...area, num_battles_b: _num });
    }
  };

  const handleSwitchBattle = (is_boss: boolean) => {
    if (is_boss) {
      setBattle([battle[0], !battle[1]]);
    } else {
      setBattle([!battle[0], battle[1]]);
    }
  };

  const handleExpBonus = (index: number, bonus: number) => {
    const newBonus = [...expBonus];
    newBonus[index] = bonus;
    setExpBonus(newBonus);
  };

  useEffect(() => {
    const exp_a_min = area.exp[0] * area.num_battles * (battle[0] ? 1 : 0); // 道中の最小経験値
    const exp_a_max = area.exp[2] * area.num_battles * (battle[0] ? 1 : 0); // 道中の最大経験値
    const exp_b = area.exp[3] * (area.num_battles_b || 1) * (battle[1] ? 1 : 0); // ボスの経験値
    const bonus = expBonus.reduce((acc, cur) => (acc * (cur + 100)) / 100, 1.0);

    setExp([
      Math.round(((exp_a_min + exp_b) * bonus) / 1.2),
      Math.round(((exp_a_max + exp_b) * bonus) / 1.2),
    ]);
  }, [area, battle, expBonus]);

  return {
    category,
    selected,
    area,
    battle,
    expBonus,
    exp,
    handleCategory,
    handleSelected,
    handleCustomExp,
    handleCustomBattle,
    handleSwitchBattle,
    handleExpBonus,
  };
};
