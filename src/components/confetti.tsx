"use client";

import Script from "next/script";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const ConfettiContext = createContext<{
  loaded: boolean;
  setLoaded: (state: boolean) => void;
}>({
  loaded: false,
  setLoaded: () => {},
});

const useConfettiContext = () => {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error(
      "useConfettiContext must be used within a ConfettiProvider",
    );
  }

  return context;
};

export const useConfetti = ({
  duration = 3000,
}: { duration?: number } = {}) => {
  const { loaded } = useConfettiContext();
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (loaded && startAnimation) {
      // @ts-expect-error - this library is not typed
      window.confetti.start();
      timeout = setTimeout(() => {
        // @ts-expect-error - this library is not typed
        window.confetti.stop();
        setStartAnimation(false);
      }, duration);
    }

    return () => {
      if (loaded) {
        // @ts-expect-error - This library is not typed
        window.confetti.stop();
      }
      clearTimeout(timeout);
    };
  }, [loaded, startAnimation, duration]);

  const runAnimation = () => setStartAnimation(true);

  return { runAnimation };
};

export function Confetti({ children }: PropsWithChildren) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ConfettiContext.Provider value={{ loaded, setLoaded }}>
      {children}
      <Script src="/js/confetti.js" onLoad={() => setLoaded(true)} />
    </ConfettiContext.Provider>
  );
}
