import iconMenu from '../assets/images/icon-menu.svg';
import iconCart from '../assets/images/icon-cart.svg';
import logo from '../assets/images/logo.svg';
import imgAvatar from '../assets/images/image-avatar.png';
import Sidebar from './Sidebar';
import { useState } from 'react';
import CartModal from './CartModal';
import { useCart } from '../hooks/useCart';

export default function HeaderApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { state } = useCart();

  const handleCloseSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  const handleOpenSidebar = (): void => {
    setIsSidebarOpen(true);
  };

  const toggleCartModal = (): void => {
    setIsCartOpen((prev) => {
      return prev === true ? false : true;
    });
  };

  const handleCloseCart = (): void => {
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="relative flex justify-between border-b-4 border-b-light-grayish-blue px-6 py-6 lg:py-0">
        <div className="flex items-center gap-x-4 lg:gap-x-10">
          <button
            className="cursor-pointer lg:hidden"
            onClick={handleOpenSidebar}
            aria-label="open sidebar menu"
          >
            <img src={iconMenu} />
          </button>
          <img src={logo} alt="sneakers" />

          {/* Desktop Screen */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-4 lg:gap-x-10">
              <li>
                <a
                  href="#"
                  className="block border-b-4 border-b-transparent py-8 text-dark-grayish-blue transition duration-300 outline-none hover:border-b-orange focus:border-b-orange"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-4 border-b-transparent py-8 text-dark-grayish-blue transition duration-300 outline-none hover:border-b-orange focus:border-b-orange"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-4 border-b-transparent py-8 text-dark-grayish-blue transition duration-300 outline-none hover:border-b-orange focus:border-b-orange"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-4 border-b-transparent py-8 text-dark-grayish-blue transition duration-300 outline-none hover:border-b-orange focus:border-b-orange"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-4 border-b-transparent py-8 text-dark-grayish-blue transition duration-300 outline-none hover:border-b-orange focus:border-b-orange"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-10">
          <button
            onClick={toggleCartModal}
            className="relative cursor-pointer"
            aria-label="open cart"
          >
            <img src={iconCart} />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-orange px-2 text-xs text-white">
              {state.cart.length > 0
                ? state.cart.reduce((total, item) => total + item.qty, 0)
                : null}
            </span>
          </button>
          <img
            src={imgAvatar}
            alt="avatar image"
            className="h-8 w-8 cursor-pointer rounded-full border border-grayish-blue hover:border-orange"
          />
        </div>
        <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}
