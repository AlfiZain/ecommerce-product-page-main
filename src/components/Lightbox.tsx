import clsx from 'clsx';
import Overlay from './Overlay';
import ImageSlideshow from './ImageSlideshow';

type LightboxProps = {
  isOpen: boolean;
  images: string[];
  thumbnails: string[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
  onThumbnailClick: (index: number) => void;
};

export default function Lightbox({
  isOpen,
  images,
  thumbnails,
  currentIndex,
  onNext,
  onPrevious,
  onClose,
  onThumbnailClick,
}: LightboxProps) {
  return (
    <>
      <Overlay
        isOpen={isOpen}
        onClose={onClose}
        backgroundColor="rgba(0,0,0,0.80)"
      />
      <div
        className={clsx(
          'absolute top-1/2 left-1/2 z-50 -translate-1/2 flex-col gap-y-6',
          isOpen ? 'flex' : 'hidden',
        )}
      >
        <button
          onClick={onClose}
          className="w-fit cursor-pointer self-end text-light-grayish-blue hover:text-orange focus:text-orange"
          aria-label="close lightbox"
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <ImageSlideshow
          currentIndex={currentIndex}
          images={images}
          onNext={onNext}
          onPrevious={onPrevious}
          navButtonPosition="onEdge"
          navButtonSize="small"
          className="max-w-sm"
        />

        <div className="flex items-center justify-center gap-x-6">
          {thumbnails.map((item: string, index: number) => (
            <button
              className={clsx(
                'relative max-w-16 cursor-pointer overflow-hidden rounded-lg ring-3 transition duration-300 outline-none after:absolute after:inset-0 after:bg-white/50 after:transition after:duration-300 hover:after:opacity-100 focus:after:opacity-100',
                currentIndex === index
                  ? 'ring-orange after:opacity-100'
                  : 'ring-transparent after:opacity-0',
              )}
              onClick={() => onThumbnailClick(index)}
              key={index}
            >
              <img src={item} alt={item} className="w-full" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
