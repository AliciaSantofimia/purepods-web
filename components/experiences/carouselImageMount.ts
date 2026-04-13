/** Montar imagen solo en la slide activa y vecinos (anterior/siguiente) para no disparar N descargas a la vez. */
export function shouldMountCarouselImage(
  activeIndex: number,
  slideIndex: number,
  slideCount: number
): boolean {
  if (slideCount <= 1) return true;
  const next = (activeIndex + 1) % slideCount;
  const prev = (activeIndex - 1 + slideCount) % slideCount;
  return (
    slideIndex === activeIndex ||
    slideIndex === next ||
    slideIndex === prev
  );
}
