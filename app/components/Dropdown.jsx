import React from "react";
import { BiChevronDown } from "react-icons/bi";

import useState from "react";

const Dropdown = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
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
    <div className="w-40 h-11">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-button-color"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
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
              category?.name?.toLowerCase().startWith(inputValue)
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
