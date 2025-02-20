import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";

import ProductCard from "../product-card.component";

describe("Product card tests", () => {
  test("should add cart item to cart dropdown when add to cart is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      price: 100,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButton = screen.getByRole("button");
    await fireEvent.click(addToCartButton);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
