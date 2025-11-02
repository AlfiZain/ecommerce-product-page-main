import clsx from 'clsx';
import type React from 'react';

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  backgroundColor?: string;
};

export default function Overlay({
  isOpen,
  onClose,
  backgroundColor = 'transparent',
}: OverlayProps) {
  const close = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div
      className={clsx(
        'fixed inset-0 z-10 transition duration-300',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      )}
      onClick={close}
      style={{ backgroundColor }}
    />
  );
}
