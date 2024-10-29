"use client";

import { ExpField, PreferenceField } from "./_components";

export default function ExpCalculatorPage() {
  return (
    <div className="px-5">
      <div className="mx-auto min-h-screen max-w-lg">
        <h1 className="my-10 text-4xl">周回経験値計算機</h1>
        <ExpField id="current_exp" label="現在経験値" defualtLevel={110} />
        <ExpField id="target_exp" label="目標経験値" defualtLevel={120} />
        <PreferenceField label="周回設定" />
        <div className="mb-5 rounded-lg border p-2">
          <h2 className="text-xl">計算結果</h2>
        </div>
      </div>
    </div>
  );
}
