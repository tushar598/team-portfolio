'use client';

import { Suspense, lazy, useState, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Lazy-loaded for performance – excluded from SSR bundle
const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_SCENE = 'https://prod.spline.design/AJouL5pq91AhVUT0/scene.splinecode';

function SplineFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#8b7fbd] via-[#6e5fa0] to-[#4a3d7a] animate-pulse" />
  );
}

/** Static gradient shown on mobile instead of the heavy Spline runtime */
function MobileHero() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#8b7fbd] via-[#6e5fa0] to-[#4a3d7a]" />
  );
}

export function Hero() {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  // Mobile: skip Spline entirely to save ~2 MB transfer + GPU pressure
  if (isMobile) {
    return (
      <div id="home" className="absolute inset-0 z-0">
        <MobileHero />
      </div>
    );
  }

  return (
    <div id="home" className="absolute inset-0 z-0 gpu-layer">
      {/* Show fallback until Spline fires onLoad */}
      {!loaded && <SplineFallback />}

      <Suspense fallback={<SplineFallback />}>
        <Spline
          scene={SPLINE_SCENE}
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  );
}
