import clsx from 'clsx';

type ImageGalleryProps = {
  images: string[];
  thumbnails: string[];
  currentIndex: number;
  onImageClick: () => void;
  onThumbnailClick: (index: number) => void;
};

export default function ImageGallery({
  images,
  thumbnails,
  currentIndex,
  onImageClick,
  onThumbnailClick,
}: ImageGalleryProps) {
  return (
    <div className="hidden flex-col gap-y-8 px-8 py-4 md:flex lg:px-16 lg:py-8">
      <img
        className="cursor-pointer rounded-xl"
        src={images[currentIndex]}
        alt={images[currentIndex]}
        onClick={onImageClick}
      />
      <div className="flex gap-x-4">
        {thumbnails.map((item: string, index: number) => (
          <button
            className={clsx(
              'relative cursor-pointer overflow-hidden rounded-lg ring-3 transition duration-300 outline-none after:absolute after:inset-0 after:bg-white/50 after:transition after:duration-300 hover:after:opacity-100 focus:after:opacity-100',
              currentIndex === index
                ? 'ring-orange after:opacity-100'
                : 'ring-transparent after:opacity-0',
            )}
            onClick={() => onThumbnailClick(index)}
            key={index}
          >
            <img src={item} alt={item} />
          </button>
        ))}
      </div>
    </div>
  );
}
