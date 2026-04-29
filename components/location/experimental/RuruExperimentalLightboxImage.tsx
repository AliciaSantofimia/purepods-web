"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useLightbox } from "@/components/ui/LightboxContext";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  /** Applied to the clickable surface (position relative for fill image). */
  buttonClassName?: string;
  /** Applied to the Next/Image element. */
  imageClassName?: string;
  imageStyle?: CSSProperties;
  priority?: boolean;
};

export function RuruExperimentalLightboxImage({
  src,
  alt,
  sizes,
  buttonClassName,
  imageClassName,
  imageStyle,
  priority,
}: Props) {
  const lightbox = useLightbox();

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => lightbox?.openLightbox(src, alt)}
      aria-label={`Open larger view: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 720px) 100vw, 50vw"}
        className={imageClassName}
        style={{ objectFit: "cover", ...imageStyle }}
        priority={priority}
      />
    </button>
  );
}
