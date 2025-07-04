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
    }
  };

  const handleCancel = () => {
    console.log("Cancelado");
  };

  return (
    
      <div className="w-[380px] mx-auto min-h-screen flex flex-col justify-between bg-[#FFF7EC]">
       

        <main className="flex-1 overflow-y-auto px-8 py-6">
          <h1 className="text-[30px] font-semibold text-[#7e7e7e] mb-6 text-center">
            Cerrar sesión
          </h1>

          <p className="text-center text-[15px] font-semibold text-[#4E1F00] mb-10">
            ¿Estás segura de querer cerrar tu sesión actual?
          </p>

          <Button
            text="Cerrar sesión"
            style="w-full h-[39px] bg-[#FEBA17] text-[#4E1F00] font-semibold text-[17px] rounded-full mb-4"
            //onClick={handleDelete}
          />
          <Button
            text="Cancelar"
            style="w-full h-[39px] bg-[#F0E2D5] text-[#4E1F00] font-semibold text-[17px] rounded-full"
            //onClick={handleCancel}
          />
        </main>
      </div>
  );
}
