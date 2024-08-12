

// src/components/Counter.jsx
// src/sections/Counter.jsx
import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startValue = 0;
      const stepTime = Math.abs(Math.floor(duration / endValue));
      const interval = setInterval(() => {
        startValue += 1;
        setCount(startValue);
        if (startValue >= endValue) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible, endValue, duration]);

  return <span ref={counterRef}>{count}</span>;
};

export default Counter;