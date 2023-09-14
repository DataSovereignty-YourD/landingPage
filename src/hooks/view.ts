import { useEffect, useState } from "react";

export function useIsVisible(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      }
      );
      console.log(ref.current);

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return isIntersecting;
}