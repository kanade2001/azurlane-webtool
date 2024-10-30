"use client";

import { useState, useEffect } from "react";

import { ToggleButton } from "@/components/button";
import { NumberInput, SelectInput, SlideInput } from "@/components/field";
import { usePreferences } from "./hooks";

interface PreferenceFieldProps {
  setTargetExp: (exp: number) => void;
}

const PreferenceField = (props: PreferenceFieldProps) => {
  const [exp, setExp] = useState<number[]>([0, 0, 0]); //total, current, remaining
  const { stage, isDR, progress, setStage, setIsDR, setProgress } =
    usePreferences();

  useEffect(() => {
    const totalExp = 1000000 * (isDR ? 1.2 : 1) * +stage;
    setExp([
      totalExp,
      (progress * totalExp) / 100,
      ((100 - progress) * totalExp) / 100,
    ]);
    props.setTargetExp(((100 - progress) * totalExp) / 100);
  }, [exp, stage, isDR, progress]);
  return (
    <div className="mb-5 flex flex-col gap-4 rounded-lg border border-l border-gray-500 p-2">
      <h2 className="text-xl">設定</h2>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex w-full items-center justify-between gap-2">
          <SelectInput
            id="area"
            value={stage}
            setValue={(_s) => {
              setStage(_s);
            }}
            options={[
              { value: "1", label: "戦術データ収集 1" },
              { value: "2", label: "戦術データ収集 2" },
            ]}
          />
          <div className="flex">
            <p>DR</p>
            <ToggleButton
              id="dr"
              value={isDR}
              setValue={() => {
                setIsDR(!isDR);
              }}
            />
          </div>
        </div>
        <SlideInput
          value={progress}
          onChange={(_p) => {
            setProgress(_p);
          }}
          min_value={0}
          max_value={100}
          show_label
        />
        <div className="grid w-full grid-cols-2 items-center gap-2">
          <p>現在経験値</p>
          <NumberInput id="exp" value={exp[1]} disabled />
          <p>残り経験値</p>
          <NumberInput id="exp" value={exp[2]} disabled />
        </div>
      </div>
    </div>
  );
};

export default PreferenceField;
