"use client";
import React from "react";

import Image from "next/image";
import { useState } from "react";

const Dropdown = ({ selected, setSelected }) => {
  const [inputValue, setInputValue] = useState("");

  const [open, setOpen] = useState(false);

  const categories = [
    { name: "Botana" },
    { name: "Bebidas" },
    { name: "Frutas y Verduras" },
    { name: "Carnes" },
    { name: "Especies" },
    { name: "Postres" },
  ];
  return (

  
    <div className="w-48 h-11 border border-2 rounded-full">

      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-full ${
          !selected && "text-button-color"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Seleccionar"}
        <Image
          src={"/chevron-icon.svg"}
          width={20}
          height={20}
          className={`${open && "rotate-180"}`}
        />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        {categories.map((category) => (
          <li
            key={category.name}
            className={`p-2 text-sm hover:bg-button-color hover:text-white ${
              category?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-button-color "
            } ${
              category?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (category?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(category?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {category?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
