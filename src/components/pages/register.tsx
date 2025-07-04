import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

import mostrar from "../imgs/Eye.png"; 

interface OrderFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  hidden: string;
}

export default function OrderFormData() {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    hidden: "ruta/de/la/imagen.jpg",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    console.log("Formulario enviado:", formData);
    navigate({ to: "/profile" });
  };

  return (
    <div className="bg-[#f8f4e1] flex justify-center items-center min-h-screen">
      <div className="w-[380px] mx-auto min-h-screen flex flex-col justify-between bg-[#FFF7EC]">
        <div className="px-6 py-4 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Crear una cuenta</h2>

          <div>
            <label className="block text-sm text-[#4E1F00] mb-1">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            />
          </div>

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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
              />
              <img
                src={mostrar}
                alt="ojo"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
          </div>

         
          <div>
            <label className="block text-sm text-[#4E1F00] mb-1">Confirmar contraseña</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
              />
              <img
                src={mostrar}
                alt="ojo"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              />
            </div>
          </div>

          <Button
            text="Registrarse"
            style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer"
            onClick={handleRegister}
          />

          <p className="text-center text-sm text-gray-700 mt-2">
            ¿Ya tienes una cuenta?{" "}
            <span
              onClick={() => navigate({ to: "/login" })}
              className="text-[#FEBA17] font-medium cursor-pointer"
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
