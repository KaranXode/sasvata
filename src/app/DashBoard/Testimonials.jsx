import React from "react";
import ClientCard from "../Components/ClientCard/Page";
import p1 from "../Assets/Images/people2.jpg";
import Heading from "../Components/Heading/Page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <div className="bg-[#F2F2F2] px-6 py-12">
      <div className="mb-6">
        <Heading title="Our Awesome Team" className="text-center mb-6" />
      </div>
      <div className="flex justify-center">
        <Carousel
          className="w-[90%]"
          opts={{
            align: "center",
            loop: true,
          }}
          autoplay
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="px-3 basis-auto">
                <ClientCard
                  image={p1}
                  title="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
