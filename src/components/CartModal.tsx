import clsx from 'clsx';
import { useCart } from '../hooks/useCart';
import Button from './Button';
import { removeItem } from '../actions/cartAction';
import Overlay from './Overlay';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, dispatch } = useCart();

  return (
    <>
      <div
        className={clsx(
          'absolute top-24 right-1/2 z-50 min-h-68 w-full max-w-[95%] translate-x-1/2 flex-col rounded-lg bg-white shadow-xl xs:right-4 xs:max-w-sm xs:translate-x-0 lg:top-28',
          isOpen ? 'flex' : 'hidden',
        )}
      >
        <h2 className="p-4 font-bold">Cart</h2>
        <hr className="w-full border-t-2 border-t-light-grayish-blue" />
        {state.cart.length > 0 ? (
          <div className="flex grow flex-col items-center justify-center gap-y-6 p-4 text-dark-grayish-blue">
            {state.cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between gap-x-4"
                >
                  <div className="flex gap-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.thumbnail}
                      className="h-12 w-12 rounded-md"
                    />
                    <div>
                      <h3>{item.title}</h3>
                      <p>
                        $
                        {(item.price * (item.discountPercentage / 100)).toFixed(
                          2,
                        )}{' '}
                        X {item.qty}{' '}
                        <span className="font-bold text-black">
                          $
                          {(
                            item.price *
                            (item.discountPercentage / 100) *
                            item.qty
                          ).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer text-grayish-blue transition duration-300 hover:text-pale-orange"
                    onClick={() => dispatch(removeItem(item.id))}
                    aria-label={`remove ${item.title}`}
                  >
                    <svg
                      width="14"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                          d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                          id="a"
                        />
                      </defs>
                      <use
                        fill="currentColor"
                        fillRule="nonzero"
                        xlinkHref="#a"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
            <Button variant="primary" width="100%">
              Checkout
            </Button>
          </div>
        ) : (
          <div className="flex grow items-center justify-center font-bold text-dark-grayish-blue">
            Your cart is empty.
          </div>
        )}
      </div>

      <Overlay isOpen={isOpen} onClose={onClose} />
    </>
  );
}
