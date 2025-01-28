import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Sliders } from "@/types";
import Image from "next/image";

interface SliderProps {
  sliderList: Sliders[];
}
export const Slider = ({ sliderList }: SliderProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => (
          <CarouselItem key={index}>
            <Image
              width={1000}
              height={200}
              unoptimized={true}
              alt="slider"
              className="w-full h-[300px] object-cover"
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                slider?.url?.formats?.thumbnail?.url.substring(1)
              }
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
