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

  const [coefficient, setCoefficient] = useState<number[]>([0, 0]);
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

  useEffect(() => {
    const exp_a_coefficient =
      fleet[0].formation.reduce((acc, cur) => acc + cur, 0) +
      +fleet[0].mvpBonus +
      fleet[0].otherBonus / 100;
    const exp_b_coefficient =
      fleet[1].formation.reduce((acc, cur) => acc + cur, 0) +
      +fleet[1].mvpBonus +
      fleet[1].otherBonus / 100;

    setCoefficient([exp_a_coefficient, exp_b_coefficient]);
  }, [fleet, setCoefficient]);

  useEffect(() => {
    const exp_a_coefficient =
      fleet[0].formation.reduce((acc, cur) => acc + cur, 0) +
      +fleet[0].mvpBonus +
      fleet[0].otherBonus / 100;
    const exp_b_coefficient =
      fleet[1].formation.reduce((acc, cur) => acc + cur, 0) +
      +fleet[1].mvpBonus +
      fleet[1].otherBonus / 100;

    const exp_a_min = Math.round(
      (area.exp[0] * area.num_battles * exp_a_coefficient) /
        (fleet[0].conditionBonus === "0" ? 1.2 : 1),
    );
    const exp_a_max = Math.round(
      (area.exp[2] * area.num_battles * exp_a_coefficient) /
        (fleet[0].conditionBonus === "0" ? 1.2 : 1),
    );
    const exp_b = Math.round(
      (area.exp[3] * (area.num_battles_b || 1) * exp_b_coefficient) /
        (fleet[1].conditionBonus === "0" ? 1.2 : 1),
    );

    setExp([exp_a_min + exp_b, exp_a_max + exp_b]);
  }, [area, fleet]);

  return {
    category,
    selected,
    area,
    fleet,
    coefficient,
    exp,

    handleCategory,
    handleSelected,
    handleCustomExp,
    handleCustomBattle,
    handleFleet,
    handleFormation,
  };
};
