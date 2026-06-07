import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
