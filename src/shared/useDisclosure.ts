import { useState } from "react";

export const useDisclosure = (defaultState: boolean | (() => boolean)) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((isOpen) => !isOpen);
  return { isOpen, setIsOpen, onOpen, onClose, onToggle };
};
