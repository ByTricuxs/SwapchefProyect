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
    <div className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Verifica tu cuenta</h2>

      <div className="space-y-6">
        <div className="text-[#4E1F00] text-center text-[16px] font-semibold mb-4">
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

        <div className="text-[#4E1F00] text-center text-[16px] font-semibold mb-4">
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

        <div className="relative mt-6">
          <label className="block text-sm text-[#4E1F00] mb-1">Confirma tu contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
            required
          />
          <img
            src="/src/assets/Eye.png"
            alt="ojo"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
        </div>

        <input type="hidden" name="hidden" value={formData.hidden} />

        <Button
          text="Verificar"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>

      <p className="text-center text-sm text-gray-700 mt-6">¿No deseas verificar tu cuenta?</p>
      <p
        onClick={() => navigate({ to: "/profile" })}
        className="text-center text-[#FEBA17] font-medium cursor-pointer"
      >
        Volver
      </p>
    </div>
  );
}
