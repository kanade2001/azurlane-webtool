import { useState } from "react";

import { NumberInput, SelectInput } from "@/components/field";
import { ToggleButton } from "@/components/button";
import { ExpData, ExpDataType, InitialExpData } from "../_data/exp-data";

interface PreferenceFieldProps {
  label: string;
}

// 周回設定フィールド
export default function PreferenceField(props: PreferenceFieldProps) {
  const [areaCategory, setAreaCategory] = useState<string>("Normal");
  const [selectedArea, setSelectedArea] = useState<string>("12-4");
  const [area, setArea] = useState<ExpDataType>(InitialExpData);
  const [battle, setBattle] = useState<[boolean, boolean]>([true, false]);

  const handleSelectCategory = (category: string) => {
    setAreaCategory(category);
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
        ExpData.find((data) => data.id === selectedArea) || InitialExpData,
      );
    }
  };

  const handleSelectedArea = (area: string) => {
    setSelectedArea(area);
    setArea(ExpData.find((data) => data.id === area) || InitialExpData);
  };

  const handleCustomExp = (index: number, exp: number) => {
    // カスタム海域の経験値を更新
    const newExp = [...area.exp];
    newExp[index] = exp;
    setArea({ ...area, exp: newExp });
  };
  const handleCustomBattle = (index: number, num: number) => {
    // カスタム海域の戦闘回数を更新
    if (index === 0) {
      setArea({ ...area, num_battles: num });
    } else {
      setArea({ ...area, num_battles_b: num });
    }
  };

  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{props.label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3>海域</h3>
        <div className="grid w-full grid-cols-2 gap-2">
          <SelectInput
            id="area"
            value={areaCategory}
            setValue={(area) => {
              handleSelectCategory(area);
            }}
            options={[
              {
                value: "Normal",
                label: "ノーマル",
              },
              {
                value: "Custom",
                label: "カスタム",
              },
            ]}
          />
          <SelectInput
            id="area"
            value={selectedArea}
            setValue={(area) => {
              handleSelectedArea(area);
            }}
            options={ExpData.map((data) => ({
              value: data.id,
              label: data.label,
            }))}
            disabled={areaCategory === "Custom"}
          />
        </div>
        {areaCategory === "Custom" ? (
          <div className="grid w-full grid-cols-2 items-center gap-2 text-center">
            <p>経験値</p>
            <NumberInput
              id="custom-exp"
              value={area.exp[0]}
              setValue={(exp) => handleCustomExp(0, exp)}
            />
            <p>ボス経験値</p>
            <NumberInput
              id="custom-exp-boss"
              value={area.exp[3]}
              setValue={(exp) => handleCustomExp(3, exp)}
            />
          </div>
        ) : (
          <div className="grid w-full grid-cols-4 items-center gap-2 text-center">
            <p>小型</p>
            <NumberInput
              id="exp-s"
              value={area.exp[0]}
              setValue={() => {}}
              disabled
            />
            <p>中型</p>
            <NumberInput
              id="exp-m"
              value={area.exp[1]}
              setValue={() => {}}
              disabled
            />
            <p>大型</p>
            <NumberInput
              id="exp-l"
              value={area.exp[2]}
              setValue={() => {}}
              disabled
            />
            <p>ボス</p>
            <NumberInput
              id="exp-b"
              value={area.exp[3]}
              setValue={() => {}}
              disabled
            />
          </div>
        )}

        <div className="grid w-full grid-cols-2 items-center gap-2 text-center">
          <div className="flex items-center justify-between">
            <p className="grow">道中</p>
            <ToggleButton
              id="toggle"
              value={battle[0]}
              setValue={() => setBattle([!battle[0], battle[1]])}
            />
          </div>
          <NumberInput
            id="num_battles"
            value={area.num_battles}
            setValue={() => {}}
            disabled
          />
          <div className="flex items-center justify-between">
            <p className="grow">ボス</p>
            <ToggleButton
              id="toggle"
              value={battle[1]}
              setValue={() => setBattle([battle[0], !battle[1]])}
            />
          </div>
          <NumberInput
            id="num_battles_b"
            value={area.num_battles_b || 1}
            setValue={() => {}}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
