interface NumberInputProps {
  id: string;
  value: number;
  setValue?: (value: number) => void;
  disabled?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = (props: NumberInputProps) => {
  const handleChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.setValue) {
      props.setValue(+e.target.value);
    }
  };

  return (
    <input
      id={props.id}
      type="number"
      className="block h-11 w-full rounded-lg border-gray-300 bg-gray-50 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      value={isNaN(props.value) ? "" : props.value}
      onChange={handleChenge}
      disabled={props.disabled}
    />
  );
};

export default NumberInput;
