import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderElements,
  CheckoutTotal,
} from "./checkout.styles.jsx";

const CheckoutComponent = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
