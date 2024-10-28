import { useState, useEffect } from "react";

import {
  NumberInput,
  NumberInputWithButton,
  SelectInput,
} from "@/components/field";
import { ToggleButton } from "@/components/button";
import { ExpData, ExpDataType, InitialExpData } from "../_data/exp-data";

interface PreferenceFieldProps {
  label: string;
}

// 周回設定フィールド
export default function PreferenceField(props: PreferenceFieldProps) {
  const [areaCategory, setAreaCategory] = useState<string>("Normal"); // Normal or Custom
  const [selectedArea, setSelectedArea] = useState<string>("12-4"); // 選択された海域
  const [area, setArea] = useState<ExpDataType>(InitialExpData); // 選択された海域の経験値データ
  const [battle, setBattle] = useState<[boolean, boolean]>([true, false]); // 道中とボスの戦闘有無
  const [expBonus, setExpBonus] = useState<number[]>([20, 0, 0, 0]); // 経験値ボーナス
  const [exp, setExp] = useState<number[]>([0, 0]); // 経験値

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
    // 選択された海域の経験値データを取得
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
    const _num = num < 1 ? 1 : num;
    // カスタム海域の戦闘回数を更新
    if (index === 0) {
      setArea({ ...area, num_battles: _num });
    } else {
      setArea({ ...area, num_battles_b: _num });
    }
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

  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{props.label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl">海域</h3>
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
          {areaCategory === "Custom" ? (
            <NumberInputWithButton
              id="num_battles_custom"
              value={area.num_battles}
              setValue={(num) => handleCustomBattle(0, num)}
              disabled={true}
            />
          ) : (
            <NumberInput
              id="num_battles"
              value={area.num_battles}
              setValue={() => {}}
              disabled
            />
          )}
          <div className="flex items-center justify-between">
            <p className="grow">ボス</p>
            <ToggleButton
              id="toggle"
              value={battle[1]}
              setValue={() => setBattle([battle[0], !battle[1]])}
            />
          </div>
          {areaCategory === "Custom" ? (
            <NumberInputWithButton
              id="num_battles_custom_b"
              value={area.num_battles_b!}
              setValue={(num) => handleCustomBattle(1, num)}
              disabled={true}
            />
          ) : (
            <NumberInput
              id="num_battles_b"
              value={area.num_battles_b || 1}
              setValue={() => {}}
              disabled
            />
          )}
        </div>

        <h3 className="text-xl">経験値ボーナス</h3>
        <div className="grid w-full grid-cols-[2fr_1fr] items-center gap-2 text-center">
          <div className="flex items-center justify-between">
            <p>コンディション</p>{" "}
            <ToggleButton
              id="condition_bonus"
              value={expBonus[0] > 0}
              setValue={() =>
                setExpBonus([
                  expBonus[0] > 0 ? 0 : 20,
                  expBonus[1],
                  expBonus[2],
                  expBonus[3],
                ])
              }
            />
          </div>
          <NumberInput
            id="num_battles_b"
            value={expBonus[0]}
            setValue={() => {}}
            disabled
          />
          <div className="flex items-center justify-between">
            <p>MVP</p>
            <ToggleButton
              id="condition_bonus"
              value={expBonus[1] > 0}
              setValue={() =>
                setExpBonus([
                  expBonus[0],
                  expBonus[1] > 0 ? 0 : 100,
                  expBonus[2],
                  expBonus[3],
                ])
              }
            />
          </div>
          <NumberInput
            id="num_battles_b"
            value={expBonus[1]}
            setValue={() => {}}
            disabled
          />
          <div className="flex items-center justify-between">
            <p>旗艦</p>{" "}
            <ToggleButton
              id="condition_bonus"
              value={expBonus[2] > 0}
              setValue={() =>
                setExpBonus([
                  expBonus[0],
                  expBonus[1],
                  expBonus[2] > 0 ? 0 : 50,
                  expBonus[3],
                ])
              }
            />
          </div>
          <NumberInput
            id="num_battles_b"
            value={expBonus[2]}
            setValue={() => {}}
            disabled
          />
          <div className="flex items-center justify-between">
            <p>その他</p>
          </div>
          <NumberInput
            id="num_battles_b"
            value={expBonus[3]}
            setValue={(value) => {
              setExpBonus([expBonus[0], expBonus[1], expBonus[2], value]);
            }}
          />
        </div>

        <h3 className="text-xl">周回情報</h3>
        <div className="grid w-full grid-cols-2 items-center gap-2 text-center">
          <p>最小経験値</p>
          <NumberInput
            id="exp-min"
            value={exp[0]}
            setValue={() => {}}
            disabled
          />
          <p>最大経験値</p>
          <NumberInput
            id="exp-max"
            value={exp[1]}
            setValue={() => {}}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
