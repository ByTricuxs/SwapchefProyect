interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

export default function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  return (
    <div className="py-3 bg-[#74512D] overflow-x-scroll">
      <div className="flex space-x-3 px-4 w-max overflow-hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryClick(cat)}
            className={`text-white px-3 py-1 rounded-full ${activeCategory === cat ? "bg-[#A35E18]" : "hover:bg-[#A35E18]"}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}