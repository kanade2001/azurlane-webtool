interface ExpFieldProps {
  label: string;
}

export default function ExpField({ label }: ExpFieldProps) {
  return (
    <div>
      <h2 className="text-xl">{label}</h2>
    </div>
  );
}
