import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderElements,
  CheckoutTotal,
} from "./checkout.styles.jsx";

const CheckoutComponent = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderElements>
          <span>Product</span>
        </CheckoutHeaderElements>
        <CheckoutHeaderElements>
          <span>Description</span>
        </CheckoutHeaderElements>
        <CheckoutHeaderElements>
          <span>Quantity</span>
        </CheckoutHeaderElements>
        <CheckoutHeaderElements>
          <span>Price</span>
        </CheckoutHeaderElements>
        <CheckoutHeaderElements>
          <span>Remove</span>
        </CheckoutHeaderElements>
      </CheckoutHeaderContainer>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
