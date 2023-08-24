"use client";
import React from "react";
import { useState, useEffect } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  const rest = () => setValue(value - 1);
  const add = () => setValue(value + 1);

  // useEffect(()=>{

  //     if(value>20){
  //         alert("")
  //     }
  // },[])

  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <p>Cantidad</p>
        <div className="flex items-center text-center ml-12">
          <button
            onClick={rest}
            className={`w-14 h-7 bg-button-color text-white rounded-full justify-center ${
              value <= 0 ? "hidden" : "flex"
            }`}
          >
            <p>-</p>
          </button>
          <div className="w-10 h-10 bg-slate-300 mx-4">{value}</div>
          <button
            onClick={add}
            className={`w-14 h-7 bg-button-color text-white rounded-full justify-center ${
              value >= 20 ? "hidden" : "flex"
            }`}
          >
            <p>+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;