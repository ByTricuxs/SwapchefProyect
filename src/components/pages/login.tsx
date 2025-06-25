import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validación simple de correo (opcional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Correo electrónico no válido.");
      return;
    }

    console.log("Login:", formData);
    // Aquí puedes hacer fetch/post al backend
    navigate({ to: "/profile" }); // Ir al perfil después del login
  };

  return (
    <div className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Iniciar sesión</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
          />
        </div>

        <Button
          text="Iniciar sesión"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer"
          onClick={handleLogin}
        />
      </div>

      <p className="text-center text-sm text-gray-700 mt-2">
        ¿Aún no tienes una cuenta?{" "}
        <span
          onClick={() => navigate({ to: "/register" })}
          className="text-[#FEBA17] font-medium cursor-pointer"
        >
          Registrarse
        </span>
      </p>
    </div>
  );
}
