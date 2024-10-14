import React from "react";
import ProductCard from "../Components/ProductCard/Page";
import apple from "../Assets/Images/apple.jpg";
import veg from "../Assets/Images/veg1.png";
import Heading from "../Components/Heading/Page";
import Button from "../Components/Button/Page";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductPage() {
  const fruitImages = [
    { title: "Dehydrated Dehydrated Apple ", url: apple },
    { title: " Dehydrated Banana", url: veg },
    { title: "Dehydrated Dehydrated Orange", url: apple },
    { title: "Dehydrated Dehydrated Grapes", url: veg },
    { title: "Dehydrated Dehydrated Pineapple", url: apple },
    { title: "Dehydrated Dehydrated Apple ", url: apple },
    { title: " Dehydrated Banana", url: veg },
    { title: "Dehydrated Dehydrated Orange", url: apple },
    { title: "Dehydrated Dehydrated Grapes", url: veg },
    { title: "Dehydrated Dehydrated Pineapple", url: apple },
  ];

  return (
    <div className="px-6 py-10 bg-[#EAEAEA]">
      <Heading title="Our Products" className="text-center mb-6" />
      <div className="flex justify-center items-center">
      <Carousel
        className="w-[90%]"
        opts={{
          align: "center",
          loop:true,
          
        }}
        autoplay
      >
        <CarouselContent className="-ml-1">
          {fruitImages.map((item, index) => (
            <CarouselItem key={index} className="px-3 basis-auto ">
              <ProductCard
                key={item.title}
                title={item.title}
                imageUrl={item.url}
                cardImgStyle="scale-[1.8]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      <div className="text-center my-8">
        <Link href="/pages/product">
          <Button
            size="large"
            variant="primary"
            label="Check More"
            icon={<FaArrowRightLong />}
          />
        </Link>
      </div>
    </div>
  );
}
