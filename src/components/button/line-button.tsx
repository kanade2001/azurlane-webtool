interface LineButtonProps {
  buttons: {
    label: string;
    onClick: () => void;
  }[];
}

const LineButton = ({ buttons }: LineButtonProps) => {
  return (
    <div className="flex w-full">
      {buttons.map((button, index) => (
        <button
          key={index}
          type="button"
          onClick={button.onClick}
          className={`h-11 flex-1 ${
            index === 0
              ? "rounded-s-lg"
              : index === buttons.length - 1
                ? "rounded-e-lg"
                : ""
          } border border-gray-300 bg-gray-100 p-3 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default LineButton;
