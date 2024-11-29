import { createContext, useState } from "react";

export const DropDownContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
