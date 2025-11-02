import clsx from 'clsx';
import Overlay from './Overlay';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 z-100 flex h-full w-3/5 transition duration-300',
          isOpen
            ? 'pointer-events-auto translate-x-0 opacity-100'
            : 'pointer-events-none -translate-x-full opacity-0',
        )}
        inert={!isOpen}
      >
        <ul className="w-full space-y-2 bg-white p-2 text-lg font-bold text-black">
          <li>
            <button
              onClick={onClose}
              className="mb-4 cursor-pointer p-2 text-dark-grayish-blue transition duration-300 hover:text-orange"
              aria-label="close sidebar"
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 transition duration-300 hover:text-orange"
            >
              Collections
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 transition duration-300 hover:text-orange"
            >
              Men
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 transition duration-300 hover:text-orange"
            >
              Women
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 transition duration-300 hover:text-orange"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 transition duration-300 hover:text-orange"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <Overlay
        isOpen={isOpen}
        onClose={onClose}
        backgroundColor="rgba(0,0,0,0.75)"
      />
    </>
  );
}
