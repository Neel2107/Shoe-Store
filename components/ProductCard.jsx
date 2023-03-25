import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProductCard = () => {
  return (
    <a href="/product/1">
      <Image
        width={500}
        height={500}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        src="/p1.png"
        alt=".."
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Nameee</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;12900</p>
          <p className="text-base  font-medium line-through">&#8377;15000</p>
          <p className="ml-auto text-base font-medium text-green-500">
            25 % off
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;