'use client';

import { useState, useEffect } from 'react';

interface StickyShareSidebarProps {
  title: string;
  url: string;
  isLiked: boolean;
  likes: number;
  onLike: () => void;
}

export default function StickyShareSidebar({ title, url, isLiked, likes, onLike }: StickyShareSidebarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white rounded-2xl shadow-lg p-4 space-y-4 border border-slate-200">
        {/* Like Button */}
        <button
          onClick={onLike}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group ${
            isLiked 
              ? 'bg-amber-500 text-white' 
              : 'bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-600'
          }`}
          title="Like this article"
        >
          <i className={`ri-heart-${isLiked ? 'fill' : 'line'} text-lg`}></i>
        </button>
        <div className="text-center text-sm text-slate-500 font-medium">{likes}</div>

        {/* Share Buttons */}
        <div className="w-full h-px bg-slate-200"></div>
        
        <button
          onClick={() => handleShare('twitter')}
          className="w-12 h-12 rounded-full bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200"
          title="Share on Twitter/X"
        >
          <i className="ri-twitter-x-line text-lg"></i>
        </button>

        <button
          onClick={() => handleShare('linkedin')}
          className="w-12 h-12 rounded-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200"
          title="Share on LinkedIn"
        >
          <i className="ri-linkedin-line text-lg"></i>
        </button>

        <button
          onClick={() => handleShare('facebook')}
          className="w-12 h-12 rounded-full bg-slate-50 hover:bg-blue-700 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200"
          title="Share on Facebook"
        >
          <i className="ri-facebook-line text-lg"></i>
        </button>

        <button
          onClick={() => handleShare('copy')}
          className="w-12 h-12 rounded-full bg-slate-50 hover:bg-slate-600 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200"
          title="Copy link"
        >
          <i className="ri-links-line text-lg"></i>
        </button>

        {/* Comments Button */}
        <div className="w-full h-px bg-slate-200"></div>
        
        <button
          onClick={scrollToComments}
          className="w-12 h-12 rounded-full bg-slate-50 hover:bg-amber-500 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200"
          title="Jump to comments"
        >
          <i className="ri-chat-3-line text-lg"></i>
        </button>
      </div>
    </div>
  );
}