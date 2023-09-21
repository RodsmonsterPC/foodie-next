import React from "react";
import Link from "next/link";

const SmallCardProduct = ({ title, price, description, img, id }) => {
  return (
    <Link href={`/detailProduct/${id}`}>
      <div className="flex w-full h-[150px] bg-slate-100 rounded-xl ">
        <img
          className="w-24 h-24 my-auto mx-4 object-contain"
          src={img}
          alt="Product item"
        />
        <div className="w-[60%]">
          <div className="flex justify-start">
            <div className="w-full">
              <h3 className="mt-2 w-[90%] font-popins font-normal text-sm">
                {title}
              </h3>
              <p className="font-bold text-xs mt-2 font-Montserrat">
                ${price}/Kg
              </p>
            </div>
            <div className="mt-4 mr-2">
              <Link href={`/detailProduct/${id}`}>
                <img
                  className="w-10 h-10"
                  src="/shopping-cart.svg"
                  alt="Add to Cart"
                />
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 truncate mt-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallCardProduct;
