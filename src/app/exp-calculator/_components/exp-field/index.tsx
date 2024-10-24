import { NumberInput } from "@/components/field";

interface ExpFieldProps {
  label: string;
}

export default function ExpField({ label }: ExpFieldProps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{label}</h2>
      <h3>Level:</h3>

      <NumberInput />

      <h3>Exp:</h3>
    </div>
  );
}
