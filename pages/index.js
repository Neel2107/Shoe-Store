import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { React } from "react";
import { fetchDataFromApi } from "./../utils/api";






export default function Home({products}) {
 



  return (
    <main>
      <HeroBanner />
 
      <Wrapper>
        {/* Heading and Paragraph START  */}

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* Heading and Paragraph END  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
          {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps (){
  const products = await fetchDataFromApi("/api/products?populate=*");

  return{
    props: {products }
  }

}