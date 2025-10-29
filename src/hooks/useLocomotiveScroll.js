import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      lerp: 0.05, // Smoothness ke liye important
      touchMultiplier: 2,
      smoothMobile: true
    });

    // Resize pe update
    window.addEventListener('load', () => {
      scroll.update();
    });

    // Cleanup
    return () => {
      scroll.destroy();
    };
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;