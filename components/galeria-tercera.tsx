"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function GaleriaTercera() {
  const images = [
    { src: "/images/3-galeria-1.jpg", alt: "Imagen 1" },
    { src: "/images/3-galeria-2.jpg", alt: "Imagen 2" },
    { src: "/images/3-galeria-3.jpg", alt: "Imagen 3" },
    { src: "/images/3-galeria-4.jpg", alt: "Imagen 4" },
    { src: "/images/3-galeria-5.jpg", alt: "Imagen 5" },
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="relative aspect-square">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover rounded-lg" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
