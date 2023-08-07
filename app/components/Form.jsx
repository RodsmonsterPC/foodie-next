import React from "react";

const Form = () => {
  const dataForm = [
    { name: "Email", placeholder: "Ingrese su correo" },
    { name: "Contraseña", placeholder: "Contraseña" },
    { name: "Confirmar contraseña", placeholder: "Confirmar contraseña" },
  ];
  return (
    <div>
      <form className="flex flex-col w-72 items-center mt-11 mx-auto">
        {dataForm.map((form) => (
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            type="text"
            name={form.name}
            placeholder={form.placeholder}
          />
        ))}
      </form>
    </div>
  );
};

export default Form;
