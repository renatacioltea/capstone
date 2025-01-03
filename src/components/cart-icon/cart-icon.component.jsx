import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";

import { setIsOpen } from "../../store/cart/cart.action.js";

import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleDropdownOpen = () => dispatch(setIsOpen(!isOpen));

  return (
    <CartIconContainer onClick={toggleDropdownOpen}>
      <StyledShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
