'use client';

import { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const mediaQueryHighContrast = window.matchMedia('(prefers-contrast: high)');
    const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsHighContrast(mediaQueryHighContrast.matches);
    setIsReducedMotion(mediaQueryReducedMotion.matches);

    // Listen for changes
    const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

    mediaQueryHighContrast.addEventListener('change', handleHighContrastChange);
    mediaQueryReducedMotion.addEventListener('change', handleReducedMotionChange);

    return () => {
      mediaQueryHighContrast.removeEventListener('change', handleHighContrastChange);
      mediaQueryReducedMotion.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Apply accessibility classes to body
  useEffect(() => {
    const body = document.body;
    
    if (isHighContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      body.classList.add('reduced-motion');
    } else {
      body.classList.remove('reduced-motion');
    }

    body.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  return <>{children}</>;
}

// Skip Link Component
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-semibold z-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
    >
      Skip to main content
    </a>
  );
}

// Focus Trap Component
export function FocusTrap({ children, isActive }: { children: React.ReactNode; isActive: boolean }) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = document.querySelector(focusableElements) as HTMLElement;
    const focusableContent = document.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstFocusableElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive]);

  return <>{children}</>;
}

// Screen Reader Only Component
export function SrOnly({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

// Visually Hidden Component
export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
      {children}
    </span>
  );
}

// Live Region Component for Dynamic Content
export function LiveRegion({ 
  children, 
  ariaLive = 'polite',
  ariaAtomic = false 
}: { 
  children: React.ReactNode;
  ariaLive?: 'polite' | 'assertive' | 'off';
  ariaAtomic?: boolean;
}) {
  return (
    <div
      aria-live={ariaLive}
      aria-atomic={ariaAtomic}
      className="sr-only"
    >
      {children}
    </div>
  );
}

// Keyboard Navigation Hook
export function useKeyboardNavigation() {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (
    event: KeyboardEvent,
    itemCount: number,
    onSelect?: (index: number) => void
  ) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % itemCount);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + itemCount) % itemCount);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        onSelect?.(focusedIndex);
        break;
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusedIndex(itemCount - 1);
        break;
    }
  };

  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown,
  };
}

// Announcement Component for Screen Readers
export function Announcement({ 
  message, 
  priority = 'polite' 
}: { 
  message: string; 
  priority?: 'polite' | 'assertive' 
}) {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    if (message) {
      setAnnouncements(prev => [...prev, message]);
      
      // Remove announcement after it's been read
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(announcement => announcement !== message));
      }, 1000);
    }
  }, [message]);

  return (
    <div
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {announcements.map((announcement, index) => (
        <div key={index}>{announcement}</div>
      ))}
    </div>
  );
} 