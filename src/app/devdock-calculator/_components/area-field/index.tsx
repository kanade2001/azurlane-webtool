import { ToggleButton, OnOffButton } from "@/components/button";
import React from "react";
import {
  NumberInput,
  SelectInput,
  NumberInputWithButton,
} from "@/components/field";

import { usePreferences } from "./hooks";

import { AreaExpData } from "@/data/area-exp-data";
import { format } from "path";

export default function AreaField() {
  const {
    category,
    selected,
    area,
    fleet,

    handleCategory, // ノーマル or カスタム
    handleSelected, // 海域選択
    handleCustomExp, // カスタムの経験値
    handleCustomBattle, // カスタムの戦闘回数
    handleFleet,
    handleFormation, // 編成
  } = usePreferences();

  const labels = ["道中戦闘", "中枢戦闘"];
  const formLabel = [
    { label: "主力", buttons: ["僚艦", "旗艦", "僚艦"] },
    { label: "前衛", buttons: ["前衛", "前衛", "前衛"] },
  ];

  return (
    <div className="mb-5 flex flex-col gap-4 rounded-lg border border-l border-gray-500 p-2">
      <h2 className="text-xl">海域設定</h2>
      <div className="flex w-full flex-col items-center gap-4">
        <h3 className="text-xl">海域</h3>
        <>
          <div className="grid w-full grid-cols-2 gap-2">
            <SelectInput
              id="area"
              value={category}
              setValue={(area) => {
                handleCategory(area);
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
              value={selected}
              setValue={(area) => {
                handleSelected(area);
              }}
              options={AreaExpData.map((data) => ({
                value: data.id,
                label: data.label,
              }))}
              disabled={category === "Custom"}
            />
          </div>
          {category === "Custom" ? (
            <div className="grid w-full grid-cols-2 items-center gap-2 text-center">
              <p>道中経験値</p>
              <NumberInput
                id="custom-exp"
                value={area.exp[0]}
                setValue={(exp) => handleCustomExp(0, exp)}
              />
              <p>中枢経験値</p>
              <NumberInput
                id="custom-exp-boss"
                value={area.exp[3]}
                setValue={(exp) => handleCustomExp(3, exp)}
              />
            </div>
          ) : (
            <div className="grid w-full grid-cols-4 items-center gap-2 text-center">
              <p>小型</p>
              <NumberInput id="exp-s" value={area.exp[0]} disabled />
              <p>中型</p>
              <NumberInput id="exp-m" value={area.exp[1]} disabled />
              <p>大型</p>
              <NumberInput id="exp-l" value={area.exp[2]} disabled />
              <p>ボス</p>
              <NumberInput id="exp-b" value={area.exp[3]} disabled />
            </div>
          )}
        </>
        {labels.map((label, index) => (
          <>
            <h3 className="text-xl">{label}</h3>
            <div className="grid w-full grid-cols-2 items-center gap-2 text-center">
              <p>戦闘数</p>
              {category === "Custom" ? (
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
                  disabled
                />
              )}
            </div>
            <div className="grid w-full grid-cols-4 items-center gap-2 text-center">
              {formLabel.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  <p>{group.label}</p>
                  {group.buttons.map((buttonLabel, buttonIndex) => (
                    <OnOffButton
                      key={`${index}-${groupIndex * 3 + buttonIndex}`}
                      id={`${index}-${groupIndex * 3 + buttonIndex}`}
                      label={buttonLabel}
                      value={
                        fleet[index].formation[groupIndex * 3 + buttonIndex] > 0
                      }
                      onClick={() => {
                        handleFormation(
                          index,
                          groupIndex * 3 + buttonIndex,
                          fleet[index].formation[groupIndex * 3 + buttonIndex] >
                            0
                            ? 0
                            : buttonLabel === "旗艦"
                              ? 1.5
                              : 1,
                        );
                      }}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="grid w-full grid-cols-[2fr_1fr] items-center gap-2 text-center">
              <p>コンディション</p>
              <SelectInput
                id="condition_bonus"
                value={fleet[index].conditionBonus}
                setValue={(bonus) => {
                  handleFleet(index, {
                    ...fleet[index],
                    conditionBonus: bonus,
                  });
                }}
                options={[
                  {
                    value: "0",
                    label: "なし",
                  },
                  {
                    value: "1",
                    label: "20%",
                  },
                ]}
              />
              <p>MVP</p>
              <SelectInput
                id="mvp_b"
                value={fleet[index].mvpBonus}
                setValue={(bonus) => {
                  handleFleet(index, {
                    ...fleet[index],
                    mvpBonus: bonus,
                  });
                }}
                options={[
                  {
                    value: "0",
                    label: "なし",
                  },
                  {
                    value: "1",
                    label: "前衛/僚艦",
                  },
                  {
                    value: "1.5",
                    label: "旗艦",
                  },
                ]}
              />
              <p>その他(累計)</p>
              <NumberInput
                id="condition_bonus"
                value={fleet[index].otherBonus}
                setValue={(bonus) => {
                  handleFleet(index, { ...fleet[index], otherBonus: bonus });
                }}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
