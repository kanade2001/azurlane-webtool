interface ExpFieldProps {
  label: string;
}

export default function ExpField({ label }: ExpFieldProps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{label}</h2>
    </div>
  );
}
