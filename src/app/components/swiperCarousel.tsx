// components/SwiperCarousel.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  buttonText: string;
  gradient: string;
}

interface SwiperCarouselProps {
  slides: CarouselSlide[];
  autoplay?: boolean;
  speed?: number;
  className?: string;
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  slides,
  autoplay = false,
  speed = 6000,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        autoplay={
          autoplay
            ? {
                delay: speed,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={slides.length > 1}
        speed={500}
        className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative w-full h-full ${slide.gradient}`}
              style={{
                background: `linear-gradient(135deg, ${slide.gradient})`,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover opacity-30"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                      {slide.badge && (
                        <div className="inline-flex items-center">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white border border-white/20">
                            {slide.badge}
                          </span>
                        </div>
                      )}

                      <div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                          {slide.title}
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
                          {slide.subtitle}
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                          {slide.description}
                        </p>
                      </div>

                      <button className="group inline-flex items-center bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        {slide.buttonText}
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Feature Image */}
                    <div className="hidden lg:block relative">
                      <div className="relative w-full h-80">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-contain drop-shadow-2xl"
                          sizes="50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgb(209, 213, 219);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgb(156, 163, 175);
          transform: scale(1.1);
        }

        .swiper-pagination-bullet-active-custom {
          background: rgb(59, 130, 246);
          transform: scale(1.25);
        }

        .swiper-wrapper {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default SwiperCarousel;
