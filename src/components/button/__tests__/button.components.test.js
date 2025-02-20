import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveStyleRule("background-color", "black");
  });

  test("should render google button, when google is passed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("background-color", "#4285f4");
  });

  test("should render inverted button, when inverted  is passed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const button = screen.getByRole("button");
    expect(button).toHaveStyleRule("background-color", "white");
  });

  test("button should be disable when loading is true", () => {
    render(<Button isLoading={true} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
