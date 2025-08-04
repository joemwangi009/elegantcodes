'use client';

import { useState, useRef, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

interface OptimizedVideoProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  width?: number;
  height?: number;
}

export default function OptimizedVideo({
  src,
  poster,
  alt,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  width = 1920,
  height = 1080,
}: OptimizedVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsVideoLoaded(true);
    const handleError = () => setShowFallback(true);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  if (showFallback) {
    return (
      <OptimizedImage
        src={poster}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={true}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isVideoLoaded && (
        <OptimizedImage
          src={poster}
          alt={alt}
          width={width}
          height={height}
          className="absolute inset-0"
          priority={true}
        />
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <OptimizedImage
          src={poster}
          alt={alt}
          width={width}
          height={height}
          priority={true}
        />
      </video>
    </div>
  );
} 