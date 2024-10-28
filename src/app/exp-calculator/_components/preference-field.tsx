import { SelectInput } from "@/components/field";

interface PreferenceFieldProps {
  label: string;
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
            options={[
              { value: "Normal", label: "ノーマル" },
              { value: "Hard", label: "ハード" },
            ]}
          />
          <SelectInput
            id="area"
            options={[
              { value: "1", label: "1-1" },
              { value: "2", label: "1-2" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
