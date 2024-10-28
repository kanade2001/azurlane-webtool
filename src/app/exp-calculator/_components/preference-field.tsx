import { SelectInput } from "@/components/field";
import { ExpData } from "../_data/exp-data";

interface PreferenceFieldProps {
  label: string;
  area: string;
  setArea: (area: string) => void;
}

// 周回設定フィールド
export default function PreferenceField(props: PreferenceFieldProps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{props.label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3>海域</h3>
        <div className="grid w-full grid-cols-2 gap-2">
          <SelectInput
            id="area"
            value={"Normal"}
            setValue={() => {}}
            options={[{ value: "Normal", label: "ノーマル" }]}
          />
          <SelectInput
            id="area"
            value={props.area}
            setValue={props.setArea}
            options={ExpData.map((data) => ({
              value: data.id,
              label: data.label,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
