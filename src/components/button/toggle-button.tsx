interface ToggleButtonProps {
  id: string;
  label_l?: string;
  label_r?: string;
  value: boolean;
  setValue: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = (
  props: ToggleButtonProps,
) => {
  return (
    <label className="flex cursor-pointer items-center">
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {props.label_l}
      </span>
      <input
        type="checkbox"
        checked={props.value}
        onChange={props.setValue}
        className="peer sr-only"
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {props.label_r}
      </span>
    </label>
  );
};

export default ToggleButton;
