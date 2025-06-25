interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-10 mt-3">
      <div className="flex items-center bg-[#f3e7d5] rounded-full px-3 py-2 mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none w-full text-sm placeholder:text-gray-600"
        />
      </div>
    </div>
  );
}
