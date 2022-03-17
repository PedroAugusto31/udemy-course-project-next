import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";
import { Heading } from ".";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  it("should render Heading with default values", () => {
    renderTheme(<Heading>olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });
  });
  it("should render Heading on white theme", () => {
    const { debug } = renderTheme(<Heading isLight>olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  it("should render Heading correctly wher small", () => {
    renderTheme(<Heading size="small">olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({ "font-size": theme.font.sizes.medium });
  });
  it("should render Heading correctly wher medium", () => {
    renderTheme(<Heading size="medium">olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({ "font-size": theme.font.sizes.large });
  });
  it("should render Heading correctly wher big", () => {
    renderTheme(<Heading size="big">olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({ "font-size": theme.font.sizes.xlarge });
  });
  it("should render Heading correctly wher using mobile", () => {
    renderTheme(<Heading size="huge">olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyleRule("font-size", theme.font.sizes.xlarge, {
      media: theme.media.medium,
    });
  });
  it("should render Heading correctly wher using mobile", () => {
    renderTheme(<Heading uppercase>olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({ "text-transform": "uppercase" });
  });
  it("should render correct heading element", () => {
    const { container } = renderTheme(<Heading as="h2">olá</Heading>);
    const heading = screen.getByRole("heading", { name: "olá" });

    const h6 = container.querySelector("h2");
    expect(h6.tagName.toLocaleLowerCase()).toBe("h2");
  });
  it("should match snapshot", () => {
    const { container } = renderTheme(<Heading as="h2">olá</Heading>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #0A1128;
        font-size: 6.4rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4.0rem;
        }
      }

      <h2
        class="c0"
      >
        olá
      </h2>
    `);
  });
});
