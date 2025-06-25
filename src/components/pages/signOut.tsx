import React from "react";
import Button from "../ui/Button";

interface DeleteAccountFormData {
  confirmed: boolean;
}

export default function DeleteAccount() {
  const handleDelete = () => {
    const confirmed = confirm("¿Estás segura de que quieres borrar tu cuenta?");
    if (confirmed) {
      const data: DeleteAccountFormData = { confirmed: true };
      console.log("Cuenta borrada:", data);
      // Aquí va la lógica de eliminación real
    }
  };

  const handleCancel = () => {
    console.log("Cancelado");
  };

  return (
    <div className="w-full md:w-1/2 bg-zinc-800/50 p-10 rounded-2xl text-center">
      <h2 className="text-2xl font-semibold text-[#7e7e7e] mb-6">Salir de la cuenta</h2>

      <p className="text-[15px] font-semibold text-[#4E1F00] mb-10">
        ¿Estás segura de querer salir de tu cuenta?
      </p>

      <div className="space-y-4">
        <Button
          text="Salir"
          style="w-full h-[39px] bg-[#FEBA17] text-[#4E1F00] font-semibold text-[17px] rounded-full"
          //onClick={handleDelete}
        />
        <Button
          text="Cancelar"
          style="w-full h-[39px] bg-[#F0E2D5] text-[#4E1F00] font-semibold text-[17px] rounded-full"
          //onClick={handleCancel}
        />
      </div>
    </div>
  );
}
