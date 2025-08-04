'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface LightweightCarouselProps {
  items: CarouselItem[];
  className?: string;
  autoplay?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
}

export default function LightweightCarousel({
  items,
  className = '',
  autoplay = true,
  showNavigation = true,
  showPagination = true,
}: LightweightCarouselProps) {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        loop={true}
        className="h-full"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                  {item.description}
                </p>
                
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    Learn More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #1e40af;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-pagination-bullet {
          background: #1e40af;
        }
        
        .swiper-pagination-bullet-active {
          background: #1e40af;
        }
      `}</style>
    </div>
  );
} 