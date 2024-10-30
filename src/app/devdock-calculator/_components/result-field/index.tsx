import { NumberInput } from "@/components/field";

interface ResultFieldProps {
  count: number[];
}

export default function ResultField(props: ResultFieldProps) {
  return (
    <div className="mb-5 flex flex-col gap-4 rounded-lg border border-l border-gray-500 p-2">
      <h2 className="text-xl">計算結果</h2>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-2 text-center">
        <p>最小周回数</p>
        <NumberInput id="count-min" value={props.count[0]} disabled />
        <p>最大周回数</p>
        <NumberInput id="count-max" value={props.count[1]} disabled />
      </div>
    </div>
  );
}
