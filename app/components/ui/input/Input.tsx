export const Input = ({
  placeholder,
  value,
  onChange,
}: Readonly<{
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
}>) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-6 py-4 bg-[var(--component-grey)] border-none rounded-full focus:outline-none focus:ring-2 "
    />
  );
};
