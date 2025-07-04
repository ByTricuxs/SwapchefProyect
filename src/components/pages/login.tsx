import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

import mostrar from "../imgs/Eye.png";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Correo electrónico no válido.");
      return;
    }

    console.log("Login:", formData);
    navigate({ to: "/profile" });
  };

  return (
    <div className="px-8 py-6">
      <h2 className="text-[30px] font-semibold text-[#7e7e7e] mb-6">
        Iniciar sesión
      </h2>

      <label className="block text-[#4E1F00] text-[16px] font-semibold mb-1">
        Correo electrónico
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full h-[38px] rounded-full bg-[#f0e2d4] px-4 mb-4 outline-none"
      />

      <label className="block text-[#4E1F00] text-[16px] font-semibold mb-1">
        Contraseña
      </label>
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full h-[38px] rounded-full bg-[#f0e2d4] px-4 pr-10 outline-none"
        />
        <img
          src={mostrar}
          alt="icono ojo"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </div>

      <p className="text-center text-[15px] font-semibold text-[#5C5C5C] mb-6 cursor-pointer">
        ¿Olvidaste la contraseña?
      </p>

      <Button
        text="Iniciar sesión"
        style="w-full h-[39px] bg-[#febe17] text-[#4e1f00] font-semibold text-[17px] rounded-full"
        onClick={handleLogin}
      />

      <p className="text-center text-[15px] font-semibold text-[#5C5C5C] mt-6">
        ¿Aún no tienes una cuenta?{" "}
        <span
          onClick={() => navigate({ to: "/register" })}
          className="text-[#4e1f00] underline cursor-pointer"
        >
          Registrarse
        </span>
      </p>
    </div>
  );
}
