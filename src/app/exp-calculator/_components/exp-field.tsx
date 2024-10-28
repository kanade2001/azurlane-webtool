import { NumberInput, SlideInput } from "@/components/field";
import { LineButton } from "@/components/button";

interface ExpFieldProps {
  label: string;
  level: number;
  setLevel: (level: number) => void;
  exp: number;
  setExp: (exp: number) => void;
  max_exp: number;
}

export default function ExpField(props: ExpFieldProps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{props.label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3>Level</h3>
        <NumberInput
          max_width="full"
          value={props.level}
          setValue={(value) => props.setLevel(value)}
        />
        <LineButton
          buttons={[
            { label: "100", onClick: () => props.setLevel(100) },
            { label: "110", onClick: () => props.setLevel(110) },
            { label: "120", onClick: () => props.setLevel(120) },
            { label: "125", onClick: () => props.setLevel(125) },
          ]}
        />
        <h3>Exp</h3>
        <NumberInput
          max_width="full"
          value={props.exp}
          setValue={(value) => props.setExp(value)}
        />
        <SlideInput
          min_value={0}
          max_value={props.max_exp}
          value={props.exp}
          onChange={(exp) => props.setExp(exp)}
          show_label
        />
        <LineButton
          buttons={[
            { label: "0", onClick: () => props.setExp(0) },
            { label: "1450K", onClick: () => props.setExp(1450000) },
            { label: "3000K", onClick: () => props.setExp(3000000) },
          ]}
        />
      </div>
    </div>
  );
}
