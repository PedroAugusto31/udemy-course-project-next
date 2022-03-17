import { screen } from "@testing-library/react";
import { MenuLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<MenuLink />", () => {
  it("Should render correctly", () => {
    renderTheme(
      <MenuLink link={"https://www.google.com.br/"}>Children</MenuLink>,
    );
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_self",
    );
  });
  it("Should render and open new tab", () => {
    renderTheme(
      <MenuLink link={"https://www.google.com.br/"} newTab>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_blank",
    );
  });
  it("Should render and open new tab", () => {
    const { container } = renderTheme(
      <MenuLink link={"https://www.google.com.br/"} newTab>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        position: relative;
      }

      .c0::after {
        content: "";
        position: absolute;
        bottom: 0.8rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        -webkit-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://www.google.com.br/"
        target="_blank"
      >
        Children
      </a>
    `);
  });
});
