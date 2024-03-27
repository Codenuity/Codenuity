type SectionButtonProps = {
  title: string;
  setSelected: any;
  selected: any;
};

export const SectionButton = ({
    title,
    setSelected,
    selected,
}: SectionButtonProps) => {
    const isSelected = selected.includes(title);
    const buttonClass = isSelected
        ? "button-animation"
        : "border border-neutral-800 bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 ease-in-out bg-neutral-600  backdrop-filter backdrop-blur-lg";

    const handleClick = () => {
        setSelected(title);
    };

    return (
      <button
        onClick={handleClick}
        className={`px-5 py-3 border border-neutral-800 text-neutral-50 md:w-fit w-full rounded-lg ${buttonClass}`}
      >
        {title}
      </button>
    );
};
