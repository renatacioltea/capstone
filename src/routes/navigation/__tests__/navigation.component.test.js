import * as reactRedux from "react-redux";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";

import { signOutStart } from "../../../store/user/user.action";

import Navigation from "../navigation.component";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("Navigation tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("It should render sign in link if there is no current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const singInLink = screen.getByText(/sign in/i);
    expect(singInLink).toBeInTheDocument();
    const signOutLink = screen.queryByText(/sign out/i);
    expect(signOutLink).toBeNull();
  });

  test("It should render sign out link if there is a current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const singOutLink = screen.getByText(/sign ou/i);
    expect(singOutLink).toBeInTheDocument();
    const signInLink = screen.queryByText(/sign in/i);
    expect(signInLink).toBeNull();
  });

  test("should display cart dropdown when isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          cartItems: [],
          isCartOpen: true,
        },
      },
    });

    const dropdown = screen.getByText(/Your cart is empty/i);
    expect(dropdown).toBeInTheDocument();
  });

  test("should dispatch signOutStart action when clicking on the Sign Out link", async () => {
    const mockDispatch = jest.fn();
    reactRedux.useDispatch.mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    expect(screen.getByText("SIGN OUT")).toBeInTheDocument();

    await fireEvent.click(screen.getByText("SIGN OUT"));

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

    mockDispatch.mockClear();
  });
});
