interface SelectInputProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  disabled?: boolean;
}

const SelectInput = (props: SelectInputProps) => {
  return (
    <div id={props.id} className="w-full">
      <select
        className="h-11 w-full rounded-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        disabled={props.disabled}
      >
        {props.disabled ? (
          <option value="Custom"></option>
        ) : (
          props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default SelectInput;
