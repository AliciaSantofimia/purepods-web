"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import type { StaticImageData } from "next/image";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  isOpen: boolean;
  src: string | StaticImageData | null;
  alt: string;
  onClose: () => void;
}

/** Max width requested from Next image optimizer for full-screen gallery view. */
const LIGHTBOX_IMAGE_WIDTH = 2400;

export function Lightbox({ isOpen, src, alt, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const imageSrc = src
    ? typeof src === "string"
      ? src
      : (src as StaticImageData).src
    : "";

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="View image"
      aria-hidden={!isOpen}
    >
      <div
        className={styles.backdrop}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close"
      />
      <div className={styles.panel}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={styles.img}
            sizes={`(max-width: ${LIGHTBOX_IMAGE_WIDTH}px) 92vw, ${LIGHTBOX_IMAGE_WIDTH}px`}
            quality={85}
            priority
            onClick={(e) => e.stopPropagation()}
          />
        ) : null}
      </div>
    </div>
  );
}
