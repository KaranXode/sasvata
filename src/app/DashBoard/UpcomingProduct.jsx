import React from "react";
import ProductCard from "../Components/ProductCard/Page";
import Heading from "../Components/Heading/Page";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function UpcomingProduct({ title, slider = true, ...props }) {
  const fruitImages = [
    {
      title: "Bunch of Mangoes",
      url: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg",
    },
    {
      title: "Apple",
      url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Banana",
      url: "https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Pineapple",
      url: "https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Orange",
      url: "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Watermelon",
      url: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
    },
    {
      title: "Apple",
      url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Banana",
      url: "https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Pineapple",
      url: "https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Orange",
      url: "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Watermelon",
      url: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
    },
    {
      title: "Apple",
      url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Banana",
      url: "https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Pineapple",
      url: "https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Orange",
      url: "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <div className="px-6 py-10 bg-[#EAEAEA]">
        <Heading title={title} className="text-center mb-6" />
        <div className="flex items-center justify-center">
          {slider ? (
            <Carousel
              className="w-[90%]"
              opts={{
                align: "center",
                loop: true,
                autoplay: true, // Autoplay when slider is true
              }}
            >
              <CarouselContent className="-ml-1">
                {fruitImages.map((item, index) => (
                  <CarouselItem key={index} className="px-3 basis-auto">
                    <Link
                      href={{
                        pathname: `/products/${item.title}`,
                        query: { url: item.url },
                      }}
                      target="_blank"
                      key={item.title}
                    >
                      <ProductCard
                        key={item.title}
                        title={item.title}
                        imageUrl={item.url}
                        imageSrc={item.url}
                        showStar={props.shareOnWhatsApp}
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            // Display a fallback when slider is disabled
            <div className="flex flex-wrap justify-center">
              {fruitImages.map((item, index) => (
                <div key={index} className="p-4">
                  <Link
                    href={{
                      pathname: `/products/${item.title}`,
                      query: { url: item.url },
                    }}
                    target="_blank"
                    key={item.title}
                  >
                    <ProductCard
                      key={item.title}
                      title={item.title}
                      imageUrl={item.url}
                      imageSrc={item.url}
                      showStar={props.shareOnWhatsApp}
                    />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
