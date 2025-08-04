
'use client';

import { useState, useRef, useEffect } from 'react';

interface ProjectGalleryProps {
  project: {
    title: string;
    gallery: Array<{
      image: string;
      title: string;
    }>;
  };
  onImageClick: (image: string, index: number) => void;
}

export default function ProjectGallery({ project, onImageClick }: ProjectGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<{ [key: number]: HTMLImageElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(imageRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imageRefs.current[index] = el;
  };

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-8 font-poppins">
        Project Gallery
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.gallery.map((item, index) => (
          <div
            key={index}
            className={`group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
              visibleImages.has(index) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            onClick={() => onImageClick(item.image, index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title} in lightbox`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onImageClick(item.image, index);
              }
            }}
          >
            <div className="relative overflow-hidden aspect-video">
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <i className="ri-image-line text-slate-500 text-2xl"></i>
                  </div>
                </div>
              )}
              
              <img
                ref={setImageRef(index)}
                data-index={index}
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-500 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-amber-500 rounded-full p-4">
                  <i className="ri-zoom-in-line text-slate-900 text-2xl"></i>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">
                  {index + 1} / {project.gallery.length}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 font-poppins">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-inter">
                Click to view in full size
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-slate-400 font-inter">
          <i className="ri-information-line mr-2"></i>
          Use arrow keys to navigate through images in lightbox mode
        </p>
      </div>
    </section>
  );
}
