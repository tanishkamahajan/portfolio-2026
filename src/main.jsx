import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLenis, useLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import App from './App.jsx'
import StravaCaseStudy from './components/StravaCaseStudy.jsx'
import ZooCaseStudy from './components/ZooCaseStudy.jsx'
import ReloomCaseStudy from './components/ReloomCaseStudy.jsx'
import CreditCardCaseStudy from './components/CreditCardCaseStudy.jsx'
import AboutPage from './components/AboutPage.jsx'
import './index.css'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function PageScrollReset({ currentPath }) {
  const lenis = useLenis();

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollToHash = () => {
        const el = document.querySelector(hash);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { immediate: true });
          } else {
            el.scrollIntoView();
          }
        }
      };
      
      scrollToHash();
      const timer = setTimeout(scrollToHash, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [currentPath, lenis]);

  return null;
}

function SmoothScrollWrapper({ children }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis 
      root 
      options={{
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

function RootRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  let content;
  if (currentPath === '/strava' || currentPath.startsWith('/strava')) {
    content = <StravaCaseStudy key="strava" />;
  } else if (currentPath === '/zoo' || currentPath.startsWith('/zoo')) {
    content = <ZooCaseStudy key="zoo" />;
  } else if (currentPath === '/reloom' || currentPath.startsWith('/reloom') || currentPath === '/sustainable-fashion' || currentPath.startsWith('/sustainable-fashion')) {
    content = <ReloomCaseStudy key="reloom" />;
  } else if (currentPath === '/finora' || currentPath.startsWith('/finora') || currentPath === '/credit-card' || currentPath.startsWith('/credit-card') || currentPath === '/creditcard' || currentPath.startsWith('/creditcard')) {
    content = <CreditCardCaseStudy key="creditcard" />;
  } else if (currentPath === '/about' || currentPath.startsWith('/about')) {
    content = <AboutPage key="about" />;
  } else {
    content = <App key="home" />;
  }

  return (
    <SmoothScrollWrapper>
      <PageScrollReset currentPath={currentPath} />
      {content}
    </SmoothScrollWrapper>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
)
