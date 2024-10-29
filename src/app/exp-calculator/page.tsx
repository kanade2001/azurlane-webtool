"use client";

import { ExpField, PreferenceField, ResultField } from "./_components";

import { useExpCalculator } from "./hooks";

export default function ExpCalculatorPage() {
  const { currentExp, targetExp, exp, setCurrentExp, setTargetExp, setExp } =
    useExpCalculator();

  return (
    <div className="px-5">
      <div className="mx-auto min-h-screen max-w-lg">
        <h1 className="my-10 text-4xl">周回経験値計算機</h1>
        <ExpField
          id="current_exp"
          label="現在経験値"
          defualtLevel={110}
          setExp={(exp) => setCurrentExp(exp)}
        />
        <ExpField
          id="target_exp"
          label="目標経験値"
          defualtLevel={120}
          setExp={(exp) => setTargetExp(exp)}
        />
        <PreferenceField label="周回設定" setExp={(exp) => setExp(exp)} />
        <ResultField
          label="計算結果"
          current_exp={currentExp}
          target_exp={targetExp}
          exp={exp}
        />
        <div className="mb-5 rounded-lg border p-2">
          <h2 className="text-xl">計算結果</h2>
          必要経験値
          {targetExp - currentExp}
          {targetExp - currentExp / exp[0]}
          {targetExp - currentExp / exp[1]}
        </div>
      </div>
    </div>
  );
}
