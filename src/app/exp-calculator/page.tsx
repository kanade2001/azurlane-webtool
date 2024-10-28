"use client";

import { useReducer } from "react";
import { ExpCalculatorReducer } from "./_types/reducer";
import { ExpField } from "./_components";

export default function ExpCalculatorPage() {
  const [state, dispatch] = useReducer(ExpCalculatorReducer, {
    current_level: 120,
    current_exp: 0,
    current_max_exp: 3000000,
    target_level: 125,
    target_exp: 0,
    target_max_exp: 3000000,
  });

  const setCurrentLevel = (level: number) => {
    dispatch({ type: "SET_LEVEL", payload: { field: "current", level } });
  };
  const setCurrentExp = (exp: number) => {
    dispatch({ type: "SET_EXP", payload: { field: "current", exp } });
  };
  const setTargetLevel = (level: number) => {
    dispatch({ type: "SET_LEVEL", payload: { field: "target", level } });
  };
  const setTargetExp = (exp: number) => {
    dispatch({ type: "SET_EXP", payload: { field: "target", exp } });
  };

  return (
    <div className="px-5">
      <div className="mx-auto min-h-screen max-w-lg">
        <h1 className="my-10 text-4xl">周回経験値計算機</h1>
        <ExpField
          label="現在経験値"
          level={state.current_level}
          exp={state.current_exp}
          max_exp={state.current_max_exp}
          setLevel={setCurrentLevel}
          setExp={setCurrentExp}
        />
        <ExpField
          label="目標経験値"
          level={state.target_level}
          exp={state.target_exp}
          max_exp={state.target_max_exp}
          setLevel={setTargetLevel}
          setExp={setTargetExp}
        />
        <div className="mb-5 rounded-lg border p-2">
          <h2 className="text-xl">周回設定</h2>
        </div>
        <div className="mb-5 rounded-lg border p-2">
          <h2 className="text-xl">計算結果</h2>
        </div>
      </div>
    </div>
  );
}
