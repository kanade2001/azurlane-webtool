import { NumberInput } from "@/components/field";

interface ExpFieldProps {
  label: string;
}

export default function ExpField({ label }: ExpFieldProps) {
  return (
    <div className="mb-5 rounded-lg border p-2">
      <h2 className="text-xl">{label}</h2>
      <div className="flex flex-col items-center gap-4">
        <h3>Level</h3>
        <NumberInput max_width="full" />
        <h3>Exp</h3>
        <NumberInput max_width="full" />{" "}
        <div className="flex w-full">
          <button
            type="button"
            className="h-11 flex-1 rounded-s-lg border border-gray-300 bg-gray-100 p-3 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            0
          </button>
          <button
            type="button"
            className="h-11 flex-1 border border-gray-300 bg-gray-100 p-3 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            1500K
          </button>
          <button
            type="button"
            className="h-11 flex-1 rounded-e-lg border border-gray-300 bg-gray-100 p-3 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            3000K
          </button>
        </div>
      </div>
    </div>
  );
}
