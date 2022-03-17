import { screen } from "@testing-library/react";
import { Navlinks } from ".";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../styles/render-theme";
import mockMaluco from "./mock";

describe("<Navlinks />", () => {
  it("Should render all links", () => {
    renderTheme(<Navlinks links={mockMaluco} />);
    expect(screen.getAllByRole("link")).toHaveLength(mockMaluco.length);
  });
  it("Should not render links", () => {
    renderTheme(<Navlinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  it("Should not render links", () => {
    const { container } = renderTheme(<Navlinks links={mockMaluco} />);
    expect(container.firstChild).toHaveStyleRule("flex-flow", "column wrap", {
      media: theme.media.medium,
    });
  });
  it("Should match snapshot", () => {
    const { container } = renderTheme(<Navlinks links={mockMaluco} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
