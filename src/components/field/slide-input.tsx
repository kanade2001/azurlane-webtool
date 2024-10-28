interface SlideInputProps {
  value: number;
  onChange: (value: number) => void;
  min_value: number;
  max_value: number;
  span_value?: number;
  show_label: boolean;
}

const CalcRatio = (value: number, min: number, max: number) => {
  return Math.round(((value - min) / (max - min)) * 100);
};

const CalcValue = (
  ratio: number,
  min: number,
  max: number,
  span: number = 1,
) => {
  return Math.min(
    min + Math.round(((max - min) * (ratio / 100)) / span) * span,
    max,
  );
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
      {props.show_label && (
        <div className="flex w-full justify-between text-sm text-gray-500">
          <span className="text-left">{props.min_value}</span>
          <span className="text-right">{props.max_value}</span>
        </div>
      )}
    </div>
  );
};

export default SlideInput;
