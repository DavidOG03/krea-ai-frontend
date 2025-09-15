"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  buttonText: string;
  gradient: string;
  textColor?: string;
  video?: boolean;
}

interface ModernCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const ModernCarousel: React.FC<ModernCarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlay && items.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
    }
  }, [autoPlay, autoPlayInterval, items.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Navigation functions
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    },
    [currentIndex, isAnimating]
  );

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % items.length;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    stopAutoPlay();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    startAutoPlay();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto ${className}`}
      ref={carouselRef}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Main carousel container */}
      <div
        className="relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Carousel slides */}
        <div
          className="flex transition-transform duration-500 ease-out h-full "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: "transform",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`min-w-4xl h-full relative overflow-hidden mr-[3rem] rounded-2xl ${item.gradient}`}
              style={{
                backgroundImage: `linear-gradient(135deg, ${item.gradient})`,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {item.video ? (
                  <video
                    preload="metadata"
                    className="object-cover w-full h-full transition-scale aspect-[1.618/1] rounded-sm object-center duration-300 ease-out sm:group-hover/button:scale-[1.02] sm:group-active/button:scale-100"
                  >
                    <source src={item.image} type="video/mp4"></source>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover h-full w-full"
                    priority={index === 0}
                    sizes="100vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-between">
                <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y font-inter ">
                      {item.badge && (
                        <div className="inline-flex items-center absolute top-4 left-4">
                          <span className="px-3 py-1 text-sm font-medium text-white/75 font-inter">
                            {item.badge}
                          </span>
                        </div>
                      )}

                      <div>
                        {/* <h1
                          className={`text-4xl md:text-6xl lg:text-7xl font-inter font-bold mb-4 ${
                            item.textColor || "text-white"
                          }`}
                        >
                          {item.title}
                        </h1> */}
                        <h2 className="text-xl md:text-2xl font-semibold font-inter-tight text-white/90 mb-4">
                          {item.subtitle}
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature Image/Illustration */}
                    {/* <div className="hidden lg:block relative">
                      <div className="relative w-full h-80">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain drop-shadow-2xl"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div> */}
                    <button className="group inline-flex items-center bg-primary-foreground dark:bg-primary-foreground text-black px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-[200px]">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <div className="absolute right-4 -bottom-full">
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className=" bg-primary-foreground dark:bg-primary-foreground backdrop-blur-sm border border-white/20 rounded-full p-3 text-primary hover:bg-white/20 transition-all duration-300 disabled:opacity-50 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Dot indicators */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress indicator (optional) */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <div className="w-full bg-white/20 rounded-full h-1">
          <div
            className="bg-white h-1 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModernCarousel;
