import { FC , memo} from "react";
import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
} from "./cart-item.styles";

import {CartItem as TCartItem} from "../../store/cart/cart.types"

export type CartItemProps = {
cartItem: TCartItem
}

const CartItem : FC<CartItemProps>= memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
