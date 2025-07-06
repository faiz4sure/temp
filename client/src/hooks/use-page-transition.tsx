import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export const usePageTransition = () => {
  const [location] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return { isTransitioning };
};
