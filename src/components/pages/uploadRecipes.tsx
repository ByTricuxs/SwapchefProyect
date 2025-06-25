import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

interface RecipeFormData {
  title: string;
  image: File | null;
  ingredients: string;
  preparation: string;
}

export default function UploadRecipeForm() {
  const [formData, setFormData] = useState<RecipeFormData>({
    title: "",
    image: null,
    ingredients: "",
    preparation: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  const handleUpload = () => {
    if (!formData.title || !formData.ingredients || !formData.preparation || !formData.image) {
      alert("Por favor, completa todos los campos y sube una imagen.");
      return;
    }

    console.log("Receta subida:", formData);
    // Aquí iría el POST al backend

    navigate({ to: "/" }); // Redirigir al foro después de subir receta
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#FBEBD6] p-6 rounded-2xl">
      <h1 className="text-3xl font-cursive text-center text-[#4E1F00] mb-6">Swapchef</h1>

      <div className="space-y-6">
        {/* Título */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 rounded-full outline-none"
            required
          />
        </div>

        {/* Imagen */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Insertar la imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 bg-gray-100 rounded-xl"
            required
          />
        </div>

        {/* Ingredientes */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Ingrese los ingredientes:</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 rounded-xl h-28 resize-none"
            required
          ></textarea>
        </div>

        {/* Preparación */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Describa la Preparación:</label>
          <textarea
            name="preparation"
            value={formData.preparation}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 rounded-xl h-28 resize-none"
            required
          ></textarea>
        </div>

        {/* Botón para enviar */}
        <Button
          text="Subir Receta"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-4 cursor-pointer"
          onClick={handleUpload}
        />
      </div>
    </div>
  );
}
