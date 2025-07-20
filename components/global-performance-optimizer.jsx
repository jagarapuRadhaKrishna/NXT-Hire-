"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const criticalRoutes = [
  '/dashboard',
  '/resume',
  '/resume-analyzer',
  '/interview',
  '/ai-cover-letter',
  '/job-portal',
  '/smart-job-matching'
];

export default function GlobalPerformanceOptimizer() {
  const router = useRouter();

  useEffect(() => {
    // Preload critical routes after initial load
    const preloadRoutes = () => {
      criticalRoutes.forEach(route => {
        router.prefetch(route);
      });
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadRoutes, { timeout: 2000 });
      } else {
        setTimeout(preloadRoutes, 1000);
      }
    }

    // Preload critical CSS and fonts
    const preloadResources = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/fonts/font.woff2'; // Adjust based on your font files
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    preloadResources();

    // Enable resource hints for faster navigation
    const addResourceHints = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'x-dns-prefetch-control';
      meta.content = 'on';
      document.head.appendChild(meta);
    };

    addResourceHints();
  }, [router]);

  return null;
}
