"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function GaleriaPerfil() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        <CarouselItem>
          <div className="relative aspect-square">
            <Image src="/images/1-perfil.jpg" alt="Foto de perfil 1" fill className="object-cover rounded-lg" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-square">
            <Image src="/images/2-perfil.jpg" alt="Foto de perfil 2" fill className="object-cover rounded-lg" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-square">
            <Image src="/images/3-perfil.jpg" alt="Foto de perfil 3" fill className="object-cover rounded-lg" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-square">
            <Image src="/images/4-perfil.jpg" alt="Foto de perfil 4" fill className="object-cover rounded-lg" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
