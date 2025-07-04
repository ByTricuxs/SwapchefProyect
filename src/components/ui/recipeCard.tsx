import React from "react";

interface RecipeCardProps {
  image: string;
  category: "Desayuno" | "Comidas" | "Reposteria" | "Vegetariano";
  name: string;
  autor: string;
  button?: React.ReactNode;
  ingredients: string[];
  steps: string[];
}

export default function RecipeCard(props: RecipeCardProps) {
  return (
    <details className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 open:pb-4 mb-10">
      <summary className="cursor-pointer list-none">
        <img src={props.image} alt={props.name} className="w-full h-48 object-cover" />
        <div className="p-3">
          <p className="text-sm text-gray-500 font-semibold">{props.category}</p>
          <p className="text-lg font-medium text-gray-800">{props.name}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-600">{props.autor}</p>
          </div>
          {props.button ? props.button : ''}
        </div>
      </summary>

      <div className="px-4 text-sm text-gray-700">
        <h3 className="font-semibold mt-2">Ingredientes:</h3>
        <ul className="list-disc pl-4 mt-1 space-y-1">
          {props.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold mt-4">Preparación:</h3>
        <ol className="list-decimal pl-4 mt-1 space-y-1">
          {props.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </details>
  );
}

