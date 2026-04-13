import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /** When true, use priority + fetchPriority high (hero / first carousel slide). */
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  objectFit?: CSSProperties["objectFit"];
  objectPosition?: string;
};

const defaultSizes =
  "(max-width: 640px) 100vw, (max-width: 900px) 90vw, min(1120px, 85vw)";

export function ExpRefImage({
  src,
  alt,
  className,
  style,
  priority,
  sizes = defaultSizes,
  width,
  height,
  fill,
  objectFit = "cover",
  objectPosition,
}: Props) {
  const combined: CSSProperties = {
    ...style,
    objectFit,
    ...(objectPosition ? { objectPosition } : {}),
  };

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        style={combined}
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      sizes={sizes}
      className={className}
      style={combined}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
    />
  );
}
