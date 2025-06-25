import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

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
    // Aquí puedes hacer un fetch/post al backend

    navigate({ to: "/profile" });
  };

  return (
    <div className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recuperar contraseña</h2>

      <form className="space-y-6">
        <div className="relative">
          <label className="block text-sm text-[#4E1F00] mb-1">Nueva contraseña</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
            required
          />
          <img src="Eye.png" alt="ojo" className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
        </div>

        <div className="relative">
          <label className="block text-sm text-[#4E1F00] mb-1">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
            required
          />
          <img src="Eye.png" alt="ojo" className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
        </div>

        <Button
          text="Cambiar contraseña"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer hover:bg-[#4E1F00] hover:text-[#FEBA17]"
          onClick={handlePasswordChange}
        />
      </form>
    </div>
  );
}