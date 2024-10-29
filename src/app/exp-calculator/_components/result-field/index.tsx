import { NumberInput } from "@/components/field";

interface ResultFieldPrps {
  label: string;
  current_exp: number;
  target_exp: number;
  exp: number[];
}

export default function ResultField(props: ResultFieldPrps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{props.label}</h2>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-2 text-center">
        <p>必要経験値</p>
        <NumberInput
          id="necessary_exp"
          value={props.target_exp - props.current_exp}
        />
        <p>最小周回数</p>
        <NumberInput
          id="minimum_round"
          value={Math.ceil(
            (props.target_exp - props.current_exp) / props.exp[1],
          )}
        />
        <p>最大周回数</p>
        <NumberInput
          id="maximum_round"
          value={Math.ceil(
            (props.target_exp - props.current_exp) / props.exp[0],
          )}
        />
      </div>
    </div>
  );
}
