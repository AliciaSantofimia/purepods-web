"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import { Lightbox } from "./Lightbox";

type LightboxSrc = string | StaticImageData | null;

interface LightboxState {
  src: LightboxSrc;
  alt: string;
}

interface LightboxContextValue {
  openLightbox: (src: string | StaticImageData, alt: string) => void;
  closeLightbox: () => void;
}

const Context = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(Context);
  if (!ctx) return null;
  return ctx;
}

interface LightboxProviderProps {
  children: ReactNode;
}

export function LightboxProvider({ children }: LightboxProviderProps) {
  const [state, setState] = useState<LightboxState>({
    src: null,
    alt: "",
  });

  const openLightbox = useCallback(
    (src: string | StaticImageData, alt: string) => {
      setState({ src, alt });
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setState({ src: null, alt: "" });
  }, []);

  const value: LightboxContextValue = { openLightbox, closeLightbox };

  return (
    <Context.Provider value={value}>
      {children}
      <Lightbox
        isOpen={!!state.src}
        src={state.src}
        alt={state.alt}
        onClose={closeLightbox}
      />
    </Context.Provider>
  );
}
