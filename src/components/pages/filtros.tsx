import { useState } from "react";
import Button from "../ui/Button";

const alergias = [
  "Maní", "Mariscos", "Leche", "Huevo", "Trigo", "Soja", "Frutos secos", "Gluten", "Pescado",
  "Maíz", "Sésamo / ajonjolí", "Mostaza", "Apio", "Tomate", "Frutas",
  "Cítricos", "Cacao", "Canela", "Vinagre", "Legumbres"
];

const intolerancias = [
  "Lactosa", "Gluten", "Histamina", "Fructosa", "Sorbitol", "Sacarosa / maltosa / otros azúcares",
  "Tiramina", "Cafeína", "Alcohol", "Sulfitos", "Glutamato monosódico",
  "Colorantes artificiales", "Conservantes", "Edulcorantes artificiales"
];

export default function Filtros() {
  const [tipo, setTipo] = useState("ninguna");
  const [selecciones, setSelecciones] = useState<string[]>([]);

  const opciones = tipo === "alergia"
    ? alergias
    : tipo === "intolerancia"
    ? intolerancias
    : [];

  const toggleSeleccion = (valor: string) => {
    setSelecciones((prev) =>
      prev.includes(valor)
        ? prev.filter((v) => v !== valor)
        : [...prev, valor]
    );
  };

  return (
    <div className="flex flex-col items-center px-6 pt-6 pb-10">
      <h2 className="text-[#5C5C5C] text-2xl font-semibold mb-6">
        ¿Tiene alguna alergia o intolerancia?
      </h2>

      <select
        value={tipo}
        onChange={(e) => {
          setTipo(e.target.value);
          setSelecciones([]);
        }}
        className="w-full max-w-xs bg-[#F5DCC7] text-[#4E1F00] px-4 py-2 rounded-full mb-6 outline-none"
      >
        <option value="ninguna">Ninguna</option>
        <option value="alergia">Alergia</option>
        <option value="intolerancia">Intolerancia</option>
      </select>

      {opciones.length > 0 && (
        <div className="w-full max-w-xs bg-[#fff4e7] p-4 rounded-2xl shadow-md mb-6">
          <h3 className="text-[#4E1F00] font-semibold mb-2">
            Selecciona {tipo === "alergia" ? "alergias" : "intolerancias"}:
          </h3>
          <ul className="flex flex-col gap-2">
            {opciones.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selecciones.includes(item)}
                  onChange={() => toggleSeleccion(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </ul>
        </div>
      )}

      <Button
        text="Siguiente"
        style="w-full h-[39px] bg-[#febe17] text-[#4e1f00] font-semibold text-[17px] rounded-full"
      />
    </div>
  );
}
