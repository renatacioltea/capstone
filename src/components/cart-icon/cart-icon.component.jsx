import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { setIsOpen, isOpen, cartCount } = useContext(CartContext);

  const toggleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CartIconContainer onClick={toggleDropdownOpen}>
      <StyledShoppingIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
