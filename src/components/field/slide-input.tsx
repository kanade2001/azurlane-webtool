interface SlideInputProps {
  value: number;
  onChange: (value: number) => void;
  min_value: number;
  max_value: number;
}

const CalcRatio = (value: number, min: number, max: number) => {
  return Math.round(((value - min) / (max - min)) * 100);
};

const CalcValue = (ratio: number, min: number, max: number) => {
  return min + (max - min) * (ratio / 100);
};

const SlideInput: React.FC<SlideInputProps> = (props: SlideInputProps) => {
  return (
    <div className="w-full">
      <input
        id="slide-input"
        type="range"
        value={CalcRatio(props.value, props.min_value, props.max_value)}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        onChange={(e) =>
          props.onChange(
            CalcValue(+e.target.value, props.min_value, props.max_value),
          )
        }
      />
    </div>
  );
};

export default SlideInput;
