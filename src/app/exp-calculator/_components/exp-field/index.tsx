import { NumberInput } from "@/components/field";
import { LineButton } from "@/components/button";

interface ExpFieldProps {
  label: string;
  level: number;
  setLevel: (level: number) => void;
  exp: number;
  setExp: (exp: number) => void;
  maxexp: number;
}

export default function ExpField({ label }: ExpFieldProps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3>Level</h3>
        <NumberInput
          max_width="full"
          value={100}
          setValue={(value) => console.log(value)}
        />
        <LineButton
          buttons={[
            { label: "100", onClick: () => console.log("100") },
            { label: "110", onClick: () => console.log("300") },
            { label: "120", onClick: () => console.log("200") },
            { label: "125", onClick: () => console.log("300") },
          ]}
        />
        <h3>Exp</h3>
        <NumberInput
          max_width="full"
          value={0}
          setValue={(value) => console.log(value)}
        />
        <LineButton
          buttons={[
            { label: "0", onClick: () => console.log("0") },
            { label: "1450K", onClick: () => console.log("1450K") },
            { label: "3000K", onClick: () => console.log("3000K") },
          ]}
        />
      </div>
    </div>
  );
}
