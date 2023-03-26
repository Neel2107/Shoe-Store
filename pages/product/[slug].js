import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column START  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column END  */}
          {/* right column START */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan Air 1 Max
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Best Jordan in the world
            </div>
            {/* PRODUCT PRICE */}
            <div className="flex items-center">Price : $ 15000</div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>

            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
         

          {/* PRODUCT SIZE RANGE START */}
          <div className="mb-10">
            {/* HEADING START */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">Select Size</div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Select Guide
              </div>
            </div>
            </div>  
            {/* HEADING END */}
          </div>

          {/* right column END  */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
