import Navbar from "@/app/Components/Navbar/Page";
import Image from "next/image";
import React from "react";
import WhatsAppShareButton from "./../../Components/WhatsAppShare/Page";
import ProductPage from "@/app/DashBoard/ProductPage";
import ProductBar from "@/app/Layout/ProductBar/Pages";
import OurCertificatePage from "@/app/DashBoard/OurCertificatePage";

// Use getServerSideProps to fetch data or render based on parameters
async function getServerSideProps({ params, query }) {
  const title = params.title; // Access title from the URL
  const imageUrl = query.url; // Access URL from query parameters

  // You can also perform data fetching here if needed
  return {
    props: {
      title,
      imageUrl: decodeURIComponent(imageUrl) || "", // Decode the URL to get the actual string
    },
  };
}

export default function ProductInfo({ params }) {
  const { productid, image } = params;
  const img =
    "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg";

  return (
    <>
      <Navbar navStyle="text-black" hamburgerIconStyle="!bg-[#000]"/>
      <ProductBar title={productid} />

      <div className="p-4 md:p-8 flex gap-8  justify-center flex-col md:flex-row">
        <div className="max-w-[788px] h-[50vh] lg:h-[75vh] w-full flex-[1_1_50%] overflow-hidden">
          <Image
            src={img}
            alt="Product"
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="p-3 w-full sm:w-auto md:p-6 flex flex-col  gap-3 md:gap-4 lg:gap-6 xl:gap-8 ">
          <h2 className="text-xl lg:text-3xl xl:text-5xl font-semibold">
            {" "}
            {params.productid}
          </h2>
          <p className="text-xl lg:text-3xl xl:text-5xl">
            $0.00 <span>18% OFF</span>
          </p>
          <p className="text-[#8D8A8A] text-xl lg:text-2xl xl:text-4xl">
            inclusive of all taxes{" "}
          </p>
          <p className="text-[#8D8A8A] text-xl lg:text-2xl xl:text-4xl">Size</p>
          <p className="text-[#8D8A8A] text-xl lg:text-2xl xl:text-4xl">
            1Kg 10Kgs 20Kgs and more
          </p>
          <WhatsAppShareButton imageSrc={""} title={""} />
          <div className="flex gap-2 flex-row ">
            <div className="max-w-[280px] w-full p-3 rounded-lg flex justify-center items-center flex-col text-center border border-[#8D8A8A]">
              <p className="text-xl md:text-2xl whitespace-nowrap">100% Quality Tested: </p>
              <p className="text-[14px] md:text-[16px] text-[#8D8A8A]">
                {" "}
                we test each batch with FSSAI standards
              </p>
            </div>
            <div className="max-w-[280px] w-full p-3 rounded-lg flex justify-center items-center flex-col text-center border border-[#8D8A8A]">
              <p className=" text-xl md:text-2xl whitespace-nowrap">100% Natural </p>
              <p className="text-[14px] md:text-[16px] text-[#8D8A8A]">
                No Colors No Preservatives added
              </p>
            </div>
            <div className="max-w-[280px] w-full p-3 rounded-lg flex justify-center items-center flex-col border text-center border-[#8D8A8A]">
              <p className=" text-xl md:text-2xl whitespace-nowrap">24/7</p>
              <p className="text-[14px] md:text-[16px] text-[#8D8A8A]"> Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      <OurCertificatePage />
      <ProductPage />
    </>
  );
}
