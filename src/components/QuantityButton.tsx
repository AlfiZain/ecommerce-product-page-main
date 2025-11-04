import type React from 'react';

type QuantityButtonProps = {
  quantity: number;
  onQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReduceQuantity: () => void;
  onAddQuantity: () => void;
};

export default function QuantityButton({
  quantity,
  onQuantityChange,
  onReduceQuantity,
  onAddQuantity,
}: QuantityButtonProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-light-grayish-blue p-2 lg:max-w-1/3">
      <button
        onClick={onReduceQuantity}
        className="cursor-pointer p-4 text-orange transition duration-300 hover:text-pale-orange"
        aria-label="reduce quantity"
      >
        <svg
          width="12"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use fill="currentColor" fillRule="nonzero" xlinkHref="#a" />
        </svg>
      </button>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={onQuantityChange}
        className="no-spinner max-w-10 py-1 text-center font-bold"
      />
      <button
        onClick={onAddQuantity}
        className="cursor-pointer p-4 text-orange transition duration-300 hover:text-pale-orange"
        aria-label="reduce quantity"
      >
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use fill="currentColor" fillRule="nonzero" xlinkHref="#b" />
        </svg>
      </button>
    </div>
  );
}
