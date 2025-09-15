import Navbar from "@/app/components/navbar";
import ModernCarousel from "@/app/components/modernCarousel";
// import SwiperCarousel from "./components/swiperCarousel";
// import { video } from "framer-motion/client";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const carouselItems = [
    {
      id: "1",
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional banner generation and fine...",
      image: "/images/wan-2-2.webp", // Replace with your actual image paths
      badge: "NEW IMAGE MODEL",
      buttonText: "Try WAN 2.2",
      gradient: "from-blue-900 via-purple-900 to-indigo-900",
      textColor: "text-white",
      video: false,
    },
    {
      id: "2",
      title: "Open Source model",
      subtitle: "FLUX.1 Krea",
      description:
        "With meta-level voyagers to our FLUX Krea model batch. Slices. Download and run our model tailored. Visit the technical report of...",
      image: "/images/flux-video.mp4",
      badge: "OPEN SOURCE MODEL",
      buttonText: "Try FLUX.1",
      gradient: "from-amber-800 via-orange-700 to-yellow-600",
      textColor: "text-white",
      video: true,
    },
    {
      id: "3",
      title: "AI Studio",
      subtitle: "Creative AI Platform",
      description:
        "Unleash your creativity with our comprehensive AI studio. Generate, edit, and enhance your content with cutting-edge AI models.",
      image: "/images/ai-studio.jpg",
      badge: "NEW RELEASE",
      buttonText: "Explore Studio",
      gradient: "from-emerald-900 via-teal-800 to-cyan-700",
      textColor: "text-white",
      video: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 mt-[50px]">
        {/* Hero Section with Carousel */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <ModernCarousel
              items={carouselItems}
              autoPlay={true}
              autoPlayInterval={6000}
              showDots={true}
              showArrows={true}
              className="mb-12"
            />
            {/* <SwiperCarousel
              slides={carouselItems}
              autoplay={false}
              speed={6000}
              className="mb-12"
            /> */}
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="header flex justify-between items-center">
              <h1 className="text-2xl">Generate</h1>
              <span className="text-blue-600 font-inter">
                show more <ChevronDown color="#155dfc" />
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature cards */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex justify-between items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="mr-auto">
                  <h3 className="text-lg font-semibold mb-2">Images</h3>
                  <p className="text-gray-600 text-sm">
                    Generate images with custom styles in Flux and Ideogram.
                  </p>
                </div>
                <button type="button" className="bg-transparent border-0">
                  Open
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">High Quality</h3>
                <p className="text-gray-600 text-sm">
                  Professional-grade results with incredible detail and
                  accuracy.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600 text-sm">
                  Intuitive interface designed for both beginners and
                  professionals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
                <p className="text-gray-600 text-sm">
                  Join thousands of creators using our platform daily.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
