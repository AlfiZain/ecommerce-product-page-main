import ImageSlideshow from './ImageSlideshow';
import imageProduct1 from '../assets/images/image-product-1.jpg';
import imageProduct2 from '../assets/images/image-product-2.jpg';
import imageProduct3 from '../assets/images/image-product-3.jpg';
import imageProduct4 from '../assets/images/image-product-4.jpg';
import thumbnailProduct1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnailProduct2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnailProduct3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnailProduct4 from '../assets/images/image-product-4-thumbnail.jpg';
import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import QuantityButton from './QuantityButton';
import Button from './Button';
import { useCart } from '../hooks/useCart';
import { addItem } from '../actions/cartAction';
import ImageGallery from './ImageGallery';
import Lightbox from './Lightbox';
import { toast } from 'react-toastify';

export default function ProductDetail() {
  {
    /* dummy data product */
  }
  const product = {
    id: 'product-1',
    title: 'Fall Limited Edition Sneakers',
    company: 'SNEAKER COMPANY',
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discountPercentage: 50,
    images: {
      image: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
      thumbnail: [
        thumbnailProduct1,
        thumbnailProduct2,
        thumbnailProduct3,
        thumbnailProduct4,
      ],
    },
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const { dispatch } = useCart();

  const handleNextClick = (): void => {
    setCurrentIndex((prev) => {
      let newIndex = prev + 1;
      if (newIndex > product.images.thumbnail.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const handlePreviousClick = (): void => {
    setCurrentIndex((prev) => {
      let newIndex = prev - 1;
      if (newIndex < 0) {
        newIndex = product.images.thumbnail.length - 1;
      }
      return newIndex;
    });
  };

  const handleThumbnailClick = (index: number): void => {
    setCurrentIndex(index);
  };

  const handleReduceClick = (): void => {
    if (quantity === 0) return;
    setQuantity((prev) => {
      return prev - 1;
    });
  };

  const handleAddClick = (): void => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const handleOpenLightbox = (): void => {
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = (): void => {
    setIsLightboxOpen(false);
  };

  const notifyAddToCart = (quantity: number): void => {
    if (!quantity || quantity <= 0) {
      toast.error('Please select a valid quantity before adding to cart');
      return;
    }

    const itemLabel = quantity === 1 ? 'item' : 'items';
    toast.success(`Successfully Added ${quantity} ${itemLabel} to your cart`);
  };

  const handleAddToCartClick = (): void => {
    notifyAddToCart(quantity);
    if (quantity > 0) {
      dispatch(
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          discountPercentage: product.discountPercentage,
          qty: quantity,
          thumbnail: product.images.thumbnail[0],
        }),
      );
    }
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const newValue = Number(event.target.value);
    if (newValue < 0) {
      return;
    }
    setQuantity(newValue);
  };

  return (
    <main className="relative grid min-h-[calc(100vh-82px)] grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
      <ImageSlideshow
        images={product.images.image}
        currentIndex={currentIndex}
        onNext={handleNextClick}
        onPrevious={handlePreviousClick}
        navButtonPosition="inside"
        className="w-full md:hidden"
      />
      <ImageGallery
        images={product.images.image}
        thumbnails={product.images.thumbnail}
        currentIndex={currentIndex}
        onImageClick={handleOpenLightbox}
        onThumbnailClick={handleThumbnailClick}
      />
      <div className="flex flex-col gap-y-4 p-4 lg:p-8">
        <ProductInfo {...product} />
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <QuantityButton
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onReduceQuantity={handleReduceClick}
            onAddQuantity={handleAddClick}
          />
          <Button onClick={handleAddToCartClick} variant="primary" width="100%">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </Button>
        </div>
      </div>
      <Lightbox
        currentIndex={currentIndex}
        images={product.images.image}
        thumbnails={product.images.thumbnail}
        isOpen={isLightboxOpen}
        onNext={handleNextClick}
        onPrevious={handlePreviousClick}
        onClose={handleCloseLightbox}
        onThumbnailClick={handleThumbnailClick}
      />
    </main>
  );
}
