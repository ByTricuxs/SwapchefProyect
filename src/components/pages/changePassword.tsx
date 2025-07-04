import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

import mostrar from "../imgs/Eye.png"; 

interface ChangePasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePasswordForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ChangePasswordFormData>({
    newPassword: "",
    confirmPassword: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Nueva contraseña:", formData.newPassword);
    navigate({ to: "/profile" });
  };

  return (
    <div className="flex-1 flex flex-col items-center px-10 pt-3">
      <h2 className="text-[#5C5C5C] text-2xl font-semibold mb-8">
        Recuperar contraseña
      </h2>

      <form className="w-full max-w-sm space-y-6">
        {/* Nueva contraseña */}
        <div className="relative">
          <label className="block text-sm text-[#4E1F00] mb-1">Nueva contraseña</label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
              required
            />
            <img
              src={mostrar}
              alt="Mostrar/Ocultar"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setShowNewPassword((prev) => !prev)}
            />
          </div>
        </div>

        {/* Confirmar contraseña */}
        <div className="relative">
          <label className="block text-sm text-[#4E1F00] mb-1">Confirmar contraseña</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
              required
            />
            <img
              src={mostrar}
              alt="Mostrar/Ocultar"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            />
          </div>
        </div>

        <Button
          text="Cambiar contraseña"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 mb-15"
          onClick={handlePasswordChange}
        />
      </form>
    </div>
  );
}
