export const FilterItem = ({
  label,
  onClick,
  isSelected,
}: {
  label: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <label
      className={`px-4 py-2 bg-[var(--component-grey)] rounded-full text-sm cursor-pointer hover:bg-gray-300 transition-colors duration-200 ${isSelected ? "text-gray-200 bg-gray-700" : ""}`}
    >
      <input onChange={onClick} type="checkbox" className="sr-only" />
      {label}
    </label>
  );
};
