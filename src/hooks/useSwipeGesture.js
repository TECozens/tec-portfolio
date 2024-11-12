import { useState, useEffect } from 'react';

export const useSwipeGesture = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > threshold;
      const isRightSwipe = distance < -threshold;

      if (isLeftSwipe) onSwipeLeft?.();
      if (isRightSwipe) onSwipeRight?.();
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, touchStart, touchEnd, threshold]);
}; 