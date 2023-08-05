import React from "react";

import Image from "next/image";
const JoinButton = () => {
  return (
    <button className="flex text-button-color border border-button-color rounded-full w-48 h-9 py-2.5 hover:text-black duration-500">
      <Image
        className="ml-5 mr-4"
        src="/icon-person.svg"
        width={20}
        height={20}
        alt="person"
      />
      ¡Unete a Foodie!
    </button>
  );
};

export default JoinButton;
