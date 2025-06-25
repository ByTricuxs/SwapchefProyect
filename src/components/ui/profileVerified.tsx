import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

interface ProfileVerifiedProps {
  icon: string;
}

export default function ProfileVerified({ icon }: ProfileVerifiedProps) {
const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate({ to: "/postRecipe" }); // Cambia '/upload' por la ruta que uses
  };

  const handleForumClick = () => {
    navigate({ to: "/forum" });
  };


  return (
    <div>
      
      <section className="flex flex-col items-center py-4">
        <div className="relative">
          <img src="imagenPerfil.png" alt="Foto de perfil" className="w-50 h-50 rounded-full border-1 object-cover" />
          <button className="absolute bottom-0 right-0 bg-[#990F0F] text-white w-12 h-12 rounded-full text-3xl">
            +
          </button>
        </div>
        <h2 className="text-2xl font-bold mt-2">Kristen.V</h2>
        <p className="text-sm text-gray-600 mb-4">Kristen@gmail.com</p>

        <div
          onClick={handleForumClick}
          className="mt-4 flex flex-col items-center mb-4 cursor-pointer"
        >
          <img src={icon} alt="Icono Foros" className="w-12 h-12 mb-1" />
          <span className="text-sm font-medium">Foros</span>
        </div>
      </section>

      <section className="bg-[#f3e5dc] rounded-t-3xl px-6 pt-6 pb-24 mt-4 flex flex-col">
        <h3 className="text-base font-semibold mb-6 text-[#4E1F00]">Mis recetas:</h3>

        <div className="flex gap-4">
          <div className="bg-white border-2 border-[#FEBA17] rounded-xl w-full">
            <img src="pasta.png" alt="Spaghetti" className="w-full h-28 object-cover rounded-t-xl" />
            <div className="px-2 py-2">
              <p className="text-center text-sm font-medium mt-1">Spaghetti</p>
              <div className="flex items-center text-xs mt-1">
                <img src="corazones.png" alt="Like" className="w-4 h-4 mr-1" /> 75
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#FEBA17] rounded-xl w-full">
            <img src="Pancakes.png" alt="Pancakes" className="w-full h-28 object-cover rounded-t-xl" />
            <div className="px-2 py-2 mb-4">
              <p className="text-center text-sm font-medium mt-1">Pancakes</p>
              <div className="flex items-center text-xs mt-1">
                <img src="corazones.png" alt="Like" className="w-4 h-4 mr-1" /> 105
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
        <Button
                  text="+"
                  style="bg-[#3b1902af] text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl"
                  onClick={handleUploadClick}
                />
        </div>
      </section>
    </div>
  );
}
