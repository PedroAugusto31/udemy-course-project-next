import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  it("Should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="olá, mundo" />);
    expect(
      screen.getByRole("heading", { name: "olá, mundo" }).firstChild,
    ).toHaveAttribute("href", "#target");
  });
  it("Should render image logo", () => {
    renderTheme(
      <LogoLink link="#target" text="olá, mundo" srcImg="image.png" />,
    );
    const logoLink = screen.getByRole("heading", { name: "olá, mundo" });
    expect(screen.getByRole("img", { name: "olá, mundo" })).toHaveAttribute(
      "src",
      "image.png",
    );
  });
  it("Should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="olá, mundo" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
