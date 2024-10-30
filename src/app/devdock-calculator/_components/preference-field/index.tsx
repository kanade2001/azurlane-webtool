"use client";

import { ToggleButton } from "@/components/button";
import { NumberInput, SelectInput, SlideInput } from "@/components/field";

const PreferenceField = () => {
  return (
    <div className="mb-5 rounded-lg border border-l border-gray-500 p-2">
      <h2 className="text-xl">設定</h2>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex w-full items-center justify-between gap-2">
          <SelectInput
            id="area"
            value="Normal"
            setValue={() => {}}
            options={[
              { value: "1", label: "戦術データ収集 1" },
              { value: "2", label: "戦術データ収集 2" },
            ]}
          />
          <div className="flex">
            <p>DR</p>
            <ToggleButton id="dr" value={true} setValue={() => {}} />
          </div>
        </div>
        <SlideInput
          value={50}
          onChange={() => {}}
          min_value={0}
          max_value={100}
          show_label
        />
        <div className="grid w-full grid-cols-2 items-center gap-2">
          <p>現在経験値</p>
          <NumberInput id="exp" value={1000000} setValue={() => {}} />
          <p>残り経験値</p>
          <NumberInput id="exp" value={1000000} setValue={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PreferenceField;
