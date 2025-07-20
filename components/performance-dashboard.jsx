"use client";

import { useEffect, useState } from "react";

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        setMetrics({
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          fcp: fcp ? Math.round(fcp.startTime) : null,
          lcp: lcp ? Math.round(lcp.startTime) : null,
          networkTime: Math.round(navigation.responseEnd - navigation.fetchStart),
        });
      }
    };

    const timer = setTimeout(collectMetrics, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!metrics) return null;

  const getScoreColor = (value, thresholds) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needs_improvement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const thresholds = {
    lcp: { good: 2500, needs_improvement: 4000 },
    fcp: { good: 1800, needs_improvement: 3000 },
    total: { good: 1000, needs_improvement: 3000 }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-[60] bg-primary text-primary-foreground px-3 py-2 rounded-md text-xs font-mono"
      >
        Perf
      </button>

      {/* Performance Dashboard */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-[60] bg-black/90 backdrop-blur-sm border border-gray-700 rounded-md p-4 text-xs font-mono text-white max-w-xs">
          <div className="font-bold mb-2">Performance Metrics</div>
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Total Load:</span>
              <span className={getScoreColor(metrics.totalTime, thresholds.total)}>
                {metrics.totalTime}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>DOM Ready:</span>
              <span className="text-blue-400">{metrics.domContentLoaded}ms</span>
            </div>
            
            <div className="flex justify-between">
              <span>Network:</span>
              <span className="text-gray-400">{metrics.networkTime}ms</span>
            </div>
            
            {metrics.fcp && (
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className={getScoreColor(metrics.fcp, thresholds.fcp)}>
                  {metrics.fcp}ms
                </span>
              </div>
            )}
            
            {metrics.lcp && (
              <div className="flex justify-between">
                <span>LCP:</span>
                <span className={getScoreColor(metrics.lcp, thresholds.lcp)}>
                  {metrics.lcp}ms
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-2 pt-2 border-t border-gray-700 text-[10px] text-gray-400">
            Target: &lt;1s total load time
          </div>
        </div>
      )}
    </>
  );
}
