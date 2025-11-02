import clsx from 'clsx';

type ImageSlideshowProps = {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  navButtonPosition?: 'inside' | 'onEdge';
  navButtonSize?: 'small' | 'medium';
  className?: string;
};

export default function ImageSlideshow({
  images,
  currentIndex = 0,
  onNext,
  onPrevious,
  navButtonPosition = 'inside',
  navButtonSize = 'small',
  className = '',
}: ImageSlideshowProps) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={images[currentIndex]}
        alt="product image"
        className="h-full w-full lg:rounded-xl"
      />
      <button
        onClick={onPrevious}
        className={clsx(
          'absolute flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition duration-300 hover:text-orange',
          {
            'top-1/2 left-4 h-10 w-10':
              navButtonPosition === 'inside' && navButtonSize === 'small',
            'top-1/2 -left-4 h-10 w-10':
              navButtonPosition === 'onEdge' && navButtonSize === 'small',
            'top-1/2 left-6 h-13 w-13':
              navButtonPosition === 'inside' && navButtonSize === 'medium',
            'top-1/2 -left-6 h-13 w-13':
              navButtonPosition === 'onEdge' && navButtonSize === 'medium',
          },
        )}
        aria-label="previous image"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className={clsx(
          'absolute flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition duration-300 hover:text-orange',
          {
            'top-1/2 right-4 h-10 w-10':
              navButtonPosition === 'inside' && navButtonSize === 'small',
            'top-1/2 -right-4 h-10 w-10':
              navButtonPosition === 'onEdge' && navButtonSize === 'small',
            'top-1/2 right-6 h-13 w-13':
              navButtonPosition === 'inside' && navButtonSize === 'medium',
            'top-1/2 -right-6 h-13 w-13':
              navButtonPosition === 'onEdge' && navButtonSize === 'medium',
          },
        )}
        aria-label="next image"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
