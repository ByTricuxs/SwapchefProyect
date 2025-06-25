import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

export default function ProfileGuest() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate({ to: "/login" });
    console.log("Redireccionando a /login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-full px-6 py-10 bg-[#FFF7EC]">
      <h1 className="text-2xl font-bold text-[#4E1F00] mb-6 text-center">
        Inicia sesión para acceder a tu perfil
      </h1>

      <Button
        text="Iniciar sesión"
        style="w-full max-w-xs h-[40px] bg-[#FEBA17] text-[#4E1F00] font-semibold text-[17px] rounded-full hover:bg-[#4E1F00] hover:text-[#FEBA17]"
        onClick={handleLoginRedirect}
      />
    </div>
  );
}
