import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setIsOpen, isOpen, cartCount } = useContext(CartContext);

  console.log();

  const toggleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleDropdownOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
