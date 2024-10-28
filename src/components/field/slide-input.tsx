interface SlideInputProps {
  value: number;
  min_value?: string | number;
  max_value?: string | number;
}

const SlideInput: React.FC<SlideInputProps> = (props: SlideInputProps) => {
  return (
    <div className="w-full">
      <input
        id="slide-input"
        type="range"
        value={props.value}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      />
    </div>
  );
};

export default SlideInput;
