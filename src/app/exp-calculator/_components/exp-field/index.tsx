import { NumberInputWithButton, SlideInput } from "@/components/field";
import { LineButton } from "@/components/button";
import { useExp } from "./hooks";
import { calcExp } from "./utils";

import { useEffect } from "react";

interface ExpFieldProps {
  id: string;
  label: string;
  defualtLevel: number;
  setExp: (exp: number) => void;
}

export default function ExpField(props: ExpFieldProps) {
  const { level, exp, maxExp, handleLevel, setExp } = useExp(
    props.defualtLevel,
  );

  useEffect(() => {
    props.setExp(calcExp(level, exp));
  }, [level, exp, props, props.setExp]);

  return (
    <div className="mb-5 rounded-lg border border-l border-gray-500 p-2">
      <h2 className="text-xl">{props.label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl">Level</h3>
        <NumberInputWithButton
          id="level"
          max_width="full"
          value={level}
          setValue={(value) => handleLevel(value)}
        />
        <LineButton
          buttons={[
            { label: "100", onClick: () => handleLevel(100) },
            { label: "110", onClick: () => handleLevel(110) },
            { label: "120", onClick: () => handleLevel(120) },
            { label: "125", onClick: () => handleLevel(125) },
          ]}
        />
        <h3 className="text-xl">Exp</h3>
        <NumberInputWithButton
          id="exp"
          max_width="full"
          value={exp}
          setValue={(value) => setExp(value)}
        />
        <SlideInput
          value={exp}
          onChange={(exp) => setExp(exp)}
          min_value={0}
          max_value={maxExp}
          show_label
        />
        <LineButton
          buttons={[
            { label: "0", onClick: () => setExp(0) },
            { label: "1450K", onClick: () => setExp(1450000) },
            { label: "3000K", onClick: () => setExp(3000000) },
          ]}
        />
      </div>
    </div>
  );
}
