"use client";

import { useState, useEffect } from "react";

import {
  AreaExpData,
  AreaExpDataType,
  InitialAreaExpData,
} from "@/data/area-exp-data";

type FleetType = {
  formation: number[];
  conditionBonus: string;
  mvpBonus: string;
  otherBonus: number;
};

export const usePreferences = () => {
  const [category, setCategory] = useState<string>("Normal");
  const [selected, setSelected] = useState<string>("12-4");
  const [area, setArea] = useState<AreaExpDataType>(InitialAreaExpData);
  const [fleet, setFleet] = useState<FleetType[]>([
    {
      formation: [0, 0, 0, 0, 0, 0],
      conditionBonus: "1",
      mvpBonus: "0",
      otherBonus: 0,
    },
    {
      formation: [0, 0, 0, 0, 0, 0],
      conditionBonus: "1",
      mvpBonus: "0",
      otherBonus: 0,
    },
  ]);

  const [formation, setFormation] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

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
      setArea(
        AreaExpData.find((data) => data.id === selected) || InitialAreaExpData,
      );
    }
  };

  const handleSelected = (area: string) => {
    setSelected(area);
    setArea(AreaExpData.find((data) => data.id === area) || InitialAreaExpData);
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

  const handleFleet = (fleet_index: number, new_fleet: FleetType) => {
    const newFleet = [...fleet];
    newFleet[fleet_index] = new_fleet;
    setFleet(newFleet);
  };

  const handleFormation = (
    fleet_index: number,
    index: number,
    value: number,
  ) => {
    const newFormation = [...fleet[fleet_index].formation];
    newFormation[index] = value;
    handleFleet(fleet_index, {
      ...fleet[fleet_index],
      formation: newFormation,
    });
  };

  return {
    category,
    selected,
    area,
    fleet,

    handleCategory,
    handleSelected,
    handleCustomExp,
    handleCustomBattle,
    handleFleet,
    handleFormation,
  };
};
