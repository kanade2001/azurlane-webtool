interface OnOffButtonProps {
  id: string;
  label: string;
  value: boolean;
  onClick: () => void;
}

const OnOffButton = (props: OnOffButtonProps) => {
  return (
    <button
      className={[
        "flex h-11 items-center justify-center rounded-lg",
        props.value
          ? "bg-blue-500 text-white"
          : "border border-gray-500 text-gray-500",
      ].join(" ")}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default OnOffButton;
