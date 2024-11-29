import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { useContext } from "react";
import { DropDownContext } from "../../contexts/dropdown.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setIsOpen, isOpen } = useContext(DropDownContext);

  const toggleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleDropdownOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
