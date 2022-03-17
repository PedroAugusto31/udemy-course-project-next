import { fireEvent, screen } from "@testing-library/react";
import { Menu } from ".";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../utils/renderTheme";

import linkMock from "../Navlinks/mock";
const logoData = {
  text: "logo",
  link: "#target",
};

describe("<Menu />", () => {
  it("Should render logo and links", () => {
    renderTheme(<Menu links={linkMock} logoData={logoData} />);
    expect(screen.getByRole("heading", { name: "logo" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", {
        name: "Main menu",
      }),
    ).toBeInTheDocument();
  });
  it("Should render menu mobile and button", () => {
    renderTheme(<Menu links={linkMock} logoData={logoData} />);
    const button = screen.getByLabelText("Open/Close menu");
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule("display", "none");
    expect(button).toHaveStyleRule("display", "flex", {
      media: theme.media.medium,
    });
    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule("opacity", "1", {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });
  it("Should not render links", () => {
    renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.getByRole("navigation", {
        name: "Main menu",
      }).firstChild,
    ).not.toBeInTheDocument();
  });
  it("Should match snapshot", () => {
    const { container } = renderTheme(
      <Menu links={linkMock} logoData={logoData} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
