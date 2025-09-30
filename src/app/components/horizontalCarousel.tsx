/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import Image from "next/image";
import { useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    src: "/images/wan-2-2.webp",
    alt: "WAN 2.2",
    badge: "NEW IMAGE MODEL",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 2,
    src: "/images/ai-image-gen.webp",
    alt: "Open Source Model",
    badge: "OPEN SOURCE MODEL",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical report or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
  },
  {
    id: 3,
    src: "/images/ai-image.webp",
    alt: "AI Studio",
    badge: "NEW RELEASE",
    subtitle: "Creative AI Platform",
    description:
      "Unleash your creativity with our comprehensive AI studio. Generate, edit, and enhance your content with cutting-edge AI models.",
    buttonText: "Explore Studio",
  },
  {
    id: 4,
    src: "/images/wan-2-2.webp",
    alt: "WAN 2.2",
    badge: "NEW IMAGE MODEL",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 5,
    src: "/images/ai-image-gen.webp",
    alt: "Open Source Model",
    badge: "OPEN SOURCE MODEL",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical report or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
  },
  {
    id: 6,
    src: "/images/ai-image.webp",
    alt: "AI Studio",
    badge: "NEW RELEASE",
    subtitle: "Creative AI Platform",
    description:
      "Unleash your creativity with our comprehensive AI studio. Generate, edit, and enhance your content with cutting-edge AI models.",
    buttonText: "Explore Studio",
  },
];

export default function Carousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  useEffect(() => {
    // When refs and swiper instance are ready, attach navigation elements and initialize/update
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (prevRef.current && nextRef.current) {
      // @ts-expect-error - swiper types are from swiper package
      swiper.params.navigation.prevEl = prevRef.current;
      // @ts-expect-error
      swiper.params.navigation.nextEl = nextRef.current;
      // initialize navigation
      if (swiper.navigation) {
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  return (
    <div className="relative w-full mx-auto px-4 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={24}
        slidesPerView={1.5}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `
      <span class="${className} w-3 h-3 mx-1 rounded-full
        bg-gray 
        [&.swiper-pagination-active]:bg-accent
        transition-colors duration-300
      " aria-label="Go to slide ${index + 1}"></span>
    `;
          },
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        // capture the swiper instance so we can initialize navigation once refs mount
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="!overflow-visible"
      >
        {slides.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center"
          >
            <div className="relative w-full h-[350px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={item.id === 1}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40">
                <div className="relative z-10 w-full h-full flex items-center justify-between">
                  <div className="w-full mt-auto mb-6 md:mb-12 px-6 md:px-12">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                      {/* Text Content */}
                      <div className=" font-inter">
                        {item.badge && (
                          <div className="inline-flex items-center absolute top-4 left-4">
                            <span className="px-3 py-1 text-sm font-medium text-white/75 font-inter">
                              {item.badge}
                            </span>
                          </div>
                        )}
                        <div>
                          <h2 className="text-xl md:text-3xl font-semibold font-inter-tight text-white mb-4">
                            {item.subtitle}
                          </h2>
                          <p className="text-base text-white/80 leading-relaxed max-w-3xl">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <button className="group inline-flex ml-auto items-center bg-primary-foreground text-foreground px-8 py-4 rounded-4xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-[200px] cursor-pointer">
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center mt-4">
        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center flex-1 "></div>

        {/* Navigation Arrows */}
        <div className="flex gap-2 ml-4">
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="bg-gray/25 border border-white/20 rounded-full p-2 text-foreground hover:bg-white/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="bg-gray/25 border border-white/20 rounded-full p-2 text-foreground hover:bg-white/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
