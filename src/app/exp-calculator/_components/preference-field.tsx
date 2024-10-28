import { useState } from "react";

import { NumberInput, SelectInput } from "@/components/field";
import { ExpData, ExpDataType, InitialExpData } from "../_data/exp-data";
import exp from "constants";

interface PreferenceFieldProps {
  label: string;
}

// 周回設定フィールド
export default function PreferenceField(props: PreferenceFieldProps) {
  const [areaCategory, setAreaCategory] = useState("Normal");
  const [customExp, setCustomExp] = useState(0); // 道中経験値
  const [customExpBoss, setCustomExpBoss] = useState(0); // 中枢経験値
  const [selectedArea, setSelectedArea] = useState(InitialExpData);

  const handleSelectedArea = (area: string) => {
    setSelectedArea(ExpData.find((data) => data.id === area) || InitialExpData);
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
              setAreaCategory(area);
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
            value={selectedArea.id}
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
          <div className="grid w-full grid-cols-4 items-center gap-2">
            <p>経験値</p>
            <NumberInput
              id="custom-exp"
              value={customExp}
              setValue={(exp) => setCustomExp(exp)}
            />
            <p>ボス経験値</p>
            <NumberInput
              id="custom-exp-boss"
              value={customExpBoss}
              setValue={(exp) => setCustomExpBoss(exp)}
            />
          </div>
        ) : (
          <div className="grid w-full grid-cols-8 items-center gap-2 text-center">
            <p>小型</p>
            <NumberInput
              id="exp-s"
              value={selectedArea.exp[0]}
              setValue={() => {}}
              disabled
            />
            <p>中型</p>
            <NumberInput
              id="exp-m"
              value={selectedArea.exp[1]}
              setValue={() => {}}
              disabled
            />
            <p>大型</p>
            <NumberInput
              id="exp-l"
              value={selectedArea.exp[2]}
              setValue={() => {}}
              disabled
            />
            <p>ボス</p>
            <NumberInput
              id="exp-b"
              value={selectedArea.exp[3]}
              setValue={() => {}}
              disabled
            />
          </div>
        )}
        {areaCategory === "Custom" ? (
          <div></div>
        ) : (
          <div className="grid w-full grid-cols-[1fr_2fr_1fr_1fr_2fr_1fr] items-center gap-2 text-center">
            <p>道中</p>
            <p>トグル</p>
            <NumberInput
              id="num_battles"
              value={selectedArea.num_battles}
              setValue={() => {}}
              disabled
            />
            <p>ボス</p>
            <p>トグル</p>
            <NumberInput
              id="num_battles_b"
              value={selectedArea.num_battles_b || 1}
              setValue={() => {}}
              disabled
            />
          </div>
        )}
      </div>
    </div>
  );
}
