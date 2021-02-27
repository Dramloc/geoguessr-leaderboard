import { useState } from "react";

/**
 * @typedef UseDiscosureResult
 * @property {boolean} isOpen
 * @property {React.Dispatch<React.SetStateAction<boolean>} setIsOpen
 * @property {() => void} onOpen
 * @property {() => void} onClose
 * @property {() => void} onToggle
 */

/** @typedef {(defaultState: boolean | () => boolean) => UseDiscosureResult} UseDisclosure */

/** @type {UseDisclosure} */
export const useDisclosure = (defaultState) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((isOpen) => !isOpen);
  return { isOpen, setIsOpen, onOpen, onClose, onToggle };
};
