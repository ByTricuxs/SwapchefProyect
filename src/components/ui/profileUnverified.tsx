import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

interface ProfileUnverifiedProps {
  icon: string;
}

export default function ProfileUnverified({ icon }: ProfileUnverifiedProps) {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate({ to: "/verifyAccount" }); // ← ruta de verificación
  };

  const handleForumClick = () => {
    navigate({ to: "/forum" });
  };

  return (
    <div>
      <section className="flex-grow flex flex-col items-center py-6 px-4">
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

      <h1 className="text-[24px] font-semibold text-[#7e7e7e] mb-6 text-center">Verifica tu cuenta</h1>

      <div className="px-6">
        <Button
          text="Verificar Cuenta"
          style="w-full h-[40px] bg-[#FEBA17] text-[#4E1F00] font-semibold text-[17px] rounded-full"
          onClick={handleUploadClick}
        />
      </div>
    </div>
  );
}
