import React from "react";

const detailButton = ({ name, onClick }) => {
  return (
    <div>
      <button className="text-white text-lg bg-button-color w-description-h h-12 rounded-full mt-7 drop-shadow-xl">
        {name}
      </button>
    </div>
  );
};

export default detailButton;
