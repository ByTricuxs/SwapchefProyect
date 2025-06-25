import Header from "./Header";
import Card from "./recipeCard";
import CategoryNav from "./categoryNav";
import SearchBar from "./searchBar"; //
import { useState } from "react";

interface HeaderProps {
  title: string;
  img?: string;
}

interface recipeCardProps {
  image: string;
  category: "Desayuno" | "Comidas" | "Reposteria" | "Vegetariano";
  name: string;
  autor: string;
  button?: React.ReactNode;
  ingredients: string[];
  steps: string[];
}

interface ContainerProps {
  header?: HeaderProps;
  cards?: recipeCardProps[];
}

const categories = [
  "Todas",
  "Desayuno",
  "Comidas",
  "Reposteria",
  "Vegetariano",
];

export default function Container(props: ContainerProps) {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  if (!props.header) return null;
  if (!props.cards) return null;

  const filteredRecipes = props.cards
  .filter((r) => activeCategory === "Todas" || r.category === activeCategory)
  .filter((r) => r.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section>
      <Header {...props.header} />

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

       <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        
      <div className="gap-4 px-4 pb-12">
        {filteredRecipes.map((r, i) => (
          <Card key={i} {...r} />
        ))}
      </div>
    </section>
  );
}
