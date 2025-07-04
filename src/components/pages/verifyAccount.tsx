import React, { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";

interface VerifyAccountFormData {
  password: string;
  hidden: string;
}

export default function VerifyAccountForm({ onVerify }: { onVerify: () => void }) {
  const [formData, setFormData] = useState<VerifyAccountFormData>({
    password: "",
    hidden: "user123",
  });

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!check1 || !check2) {
      alert("Debes aceptar ambas condiciones para continuar.");
      return;
    }

    console.log("Verificado:", formData);
    onVerify();
    navigate({ to: "/profile" });
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#f8f4e1] p-8 rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Verifica tu cuenta</h2>

      <div className="text-[#4E1F00] text-center text-[16px] font-semibold mb-4 max-w-[340px]">
        <p>¿Eres consciente de que tu receta será para todo público?</p>
      </div>
      <div className="flex justify-center mb-6">
        <input
          type="checkbox"
          checked={check1}
          onChange={(e) => setCheck1(e.target.checked)}
          className="w-[38px] h-[38px] bg-[#F0E2D5] rounded-full accent-[#A35E18]"
        />
      </div>

      <div className="text-[#4E1F00] text-center text-[16px] font-semibold mb-4 max-w-[340px]">
        <p>Tu receta será revisada por los moderadores cuando la publiques</p>
      </div>
      <div className="flex justify-center mb-6">
        <input
          type="checkbox"
          checked={check2}
          onChange={(e) => setCheck2(e.target.checked)}
          className="w-[38px] h-[38px] bg-[#F0E2D5] rounded-full accent-[#A35E18]"
        />
      </div>

      <div className="relative mb-6 w-[340px]">
        <label className="block text-[#4E1F00] text-[16px] font-semibold mb-1 text-left">
          Confirma tu contraseña
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
          required
        />
        <img
          src="public/Eye.png"
          alt="icono ojo"
          className="absolute top-[70%] right-4 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
        />
      </div>

      <Button
        text="Verificar"
        style="w-[340px] h-[39px] bg-[#febe17] text-[#4e1f00] font-semibold text-[17px] rounded-full cursor-pointer"
        onClick={handleSubmit}
      />

      <p className="text-center text-[15px] font-semibold text-[#5C5C5C] mt-6 max-w-[340px]">
        ¿No deseas verificar tu cuenta?
      </p>
      <p
        onClick={() => navigate({ to: "/profile" })}
        className="mb-20 text-center text-[#FEBA17] font-medium cursor-pointer max-w-[340px]"
      >
        Volver
      </p>
    </div>
  );
}
