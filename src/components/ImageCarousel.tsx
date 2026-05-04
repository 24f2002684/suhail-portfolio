import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../utils";

type ImageCarouselProps = {
  images?: string[];
  alt: string;
  className?: string;
  compact?: boolean;
};

export default function ImageCarousel({ images, alt, className, compact = false }: ImageCarouselProps) {
  const slides = useMemo(() => images?.filter(Boolean) ?? [], [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasSlides = slides.length > 0;
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [slides.length]);

  useEffect(() => {
    if (!hasMultipleSlides) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, compact ? 2600 : 3400);

    return () => window.clearInterval(timer);
  }, [compact, hasMultipleSlides, slides.length]);

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div className={cn("image-carousel", compact && "image-carousel-compact", className)}>
      {hasSlides ? (
        <>
          {slides.map((image, index) => (
            <img
              className={cn("carousel-image", index === activeIndex && "carousel-image-active")}
              src={image}
              alt={`${alt} ${index + 1}`}
              key={`${image}-${index}`}
            />
          ))}
          {hasMultipleSlides && (
            <>
              <button
                className="carousel-control carousel-control-left"
                type="button"
                aria-label="Previous image"
                onClick={() => move(-1)}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="carousel-control carousel-control-right"
                type="button"
                aria-label="Next image"
                onClick={() => move(1)}
              >
                <ChevronRight size={16} />
              </button>
              <div className="carousel-dots" aria-hidden="true">
                {slides.map((image, index) => (
                  <span className={cn(index === activeIndex && "carousel-dot-active")} key={`${image}-dot-${index}`} />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="carousel-placeholder">
          <ImageIcon size={compact ? 22 : 30} />
        </div>
      )}
    </div>
  );
}
