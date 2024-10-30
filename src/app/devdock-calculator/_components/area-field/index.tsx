import { ToggleButton, OnOffButton } from "@/components/button";
import {
  NumberInput,
  SelectInput,
  NumberInputWithButton,
} from "@/components/field";

import { usePreferences } from "./hooks";

import { AreaExpData } from "@/data/area-exp-data";

export default function AreaField() {
  const {
    category,
    selected,
    area,
    expBonus,
    conditionBonus,
    mvpBonus,
    otherBonus,
    handleCategory, // ノーマル or カスタム
    handleSelected, // 海域選択
    handleCustomExp, // カスタムの経験値
    handleCustomBattle, // カスタムの戦闘回数
    handleExpBonus,
    setConditionBonus,
    setMvpBonus,
    setOtherBonus,
  } = usePreferences();

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
        <h3 className="text-xl">道中戦闘編成</h3>
        <>
          <div className="flex w-full flex-col gap-2">
            <div className="grid w-full grid-cols-2 items-center gap-2 text-center">
              <p>戦闘数</p>
              {category === "Custom" ? (
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
                  disabled
                />
              )}
            </div>
            <div className="w-ful grid grid-cols-4 items-center gap-2 text-center">
              <p>主力</p>
              <OnOffButton
                id="m1"
                label="僚艦"
                value={false}
                onChange={() => {}}
              />
              <OnOffButton
                id="m2"
                label="旗艦"
                value={false}
                onChange={() => {}}
              />
              <OnOffButton
                id="m3"
                label="僚艦"
                value={false}
                onChange={() => {}}
              />
              <p>前衛</p>
              <OnOffButton
                id="v1"
                label="前衛"
                value={false}
                onChange={() => {}}
              />
              <OnOffButton
                id="v2"
                label="前衛"
                value={false}
                onChange={() => {}}
              />
              <OnOffButton
                id="v3"
                label="前衛"
                value={false}
                onChange={() => {}}
              />
            </div>
            <div className="grid w-full grid-cols-[2fr_1fr] items-center gap-2 text-center">
              <div className="flex items-center justify-between">
                <p className="grow">コンディション</p>
                <ToggleButton
                  id="condition_bonus_toggle"
                  value={conditionBonus[0]}
                  setValue={() =>
                    setConditionBonus([!conditionBonus[0], conditionBonus[1]])
                  }
                />
              </div>
              <NumberInput id="condition_bonus" value={expBonus[0]} disabled />
              <div className="flex items-center justify-between">
                <p className="grow">MVP</p>
                <ToggleButton
                  id="condition_bonus_toggle"
                  value={+mvpBonus[0] > 0}
                  setValue={() =>
                    setMvpBonus([+mvpBonus[0] > 0 ? "0" : "1", mvpBonus[1]])
                  }
                />
              </div>
              <SelectInput
                id="mvp_b"
                value={mvpBonus[0]}
                setValue={(_b) => {
                  setMvpBonus([_b, mvpBonus[1]]);
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
              <div className="flex items-center justify-between">
                <p className="grow">その他(累計)</p>
                <ToggleButton
                  id="condition_bonus_toggle"
                  value={otherBonus[0] > 0}
                  setValue={() =>
                    setOtherBonus([otherBonus[0] > 0 ? 0 : 20, otherBonus[1]])
                  }
                />
              </div>
              <NumberInput
                id="condition_bonus"
                value={otherBonus[0]}
                setValue={(bonus) => setOtherBonus([bonus, otherBonus[1]])}
              />
            </div>
          </div>
        </>
        <h3 className="text-xl">中枢戦闘編成</h3>
        <>
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
            <p>主力</p>
            <OnOffButton
              id="m1"
              label="僚艦"
              value={false}
              onChange={() => {}}
            />
            <OnOffButton
              id="m2"
              label="旗艦"
              value={false}
              onChange={() => {}}
            />
            <OnOffButton
              id="m3"
              label="僚艦"
              value={false}
              onChange={() => {}}
            />
            <p>前衛</p>
            <OnOffButton
              id="v1"
              label="前衛"
              value={false}
              onChange={() => {}}
            />
            <OnOffButton
              id="v2"
              label="前衛"
              value={false}
              onChange={() => {}}
            />
            <OnOffButton
              id="v3"
              label="前衛"
              value={false}
              onChange={() => {}}
            />
          </div>
          <div className="grid w-full grid-cols-[2fr_1fr] items-center gap-2 text-center">
            <div className="flex items-center justify-between">
              <p className="grow">コンディション</p>
              <ToggleButton
                id="condition_bonus_toggle"
                value={conditionBonus[1]}
                setValue={() =>
                  setConditionBonus([conditionBonus[0], !conditionBonus[1]])
                }
              />
            </div>
            <NumberInput id="condition_bonus" value={expBonus[0]} disabled />
            <div className="flex items-center justify-between">
              <p className="grow">MVP</p>
              <ToggleButton
                id="condition_bonus_toggle"
                value={+mvpBonus[1] > 0}
                setValue={() =>
                  setMvpBonus([mvpBonus[0], +mvpBonus[1] > 0 ? "0" : "1"])
                }
              />
            </div>
            <SelectInput
              id="mvp_b"
              value={mvpBonus[1]}
              setValue={(_b) => {
                setMvpBonus([mvpBonus[0], _b]);
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
            <div className="flex items-center justify-between">
              <p className="grow">その他(累計)</p>
              <ToggleButton
                id="condition_bonus_toggle"
                value={otherBonus[1] > 0}
                setValue={() =>
                  setOtherBonus([otherBonus[0], otherBonus[1] > 0 ? 0 : 20])
                }
              />
            </div>
            <NumberInput
              id="condition_bonus"
              value={otherBonus[1]}
              setValue={(bonus) => setOtherBonus([otherBonus[0], bonus])}
            />
          </div>
        </>
      </div>
    </div>
  );
}
