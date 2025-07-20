"use client";

import { useEffect } from "react";

export default function PerformanceMonitor({ pageName }) {
  useEffect(() => {
    // Monitor navigation timing
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          if (loadTime > 0) {
            console.log(`${pageName} Performance:`, {
              loadTime: `${loadTime.toFixed(2)}ms`,
              domContentLoaded: `${domContentLoaded.toFixed(2)}ms`,
              totalTime: `${(navigation.loadEventEnd - navigation.fetchStart).toFixed(2)}ms`
            });
          }
        }
      }
    };

    // Measure after a short delay to ensure all timing data is available
    const timer = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timer);
  }, [pageName]);

  return null;
}
