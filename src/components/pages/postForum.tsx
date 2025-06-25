import React, { useState } from "react";
import Button from "../ui/Button";

interface ForumPostData {
  title: string;
  content: string;
  author: string;
  hidden: string;
}

export default function ForumPost() {
  const [formData, setFormData] = useState<ForumPostData>({
    title: "",
    content: "",
    author: "",
    hidden: "imagenPerfil.png", // puede ser ID, imagen o lo que necesites
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nueva publicación enviada:", formData);
    // Aquí podrías hacer un POST a tu backend
  };

  return (
    <div className="w-full md:w-2/3 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Publicar en el foro</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Título */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            required
          />
        </div>

        {/* Contenido */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Contenido</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-xl outline-none resize-none"
            required
          />
        </div>

        {/* Autor */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Tu nombre</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            required
          />
        </div>

        {/* Oculto */}
        <input type="hidden" name="hidden" value={formData.hidden} />

        {/* Botón */}
        <Button
          text="Publicar"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer"
        />
      </form>
    </div>
  );
}
