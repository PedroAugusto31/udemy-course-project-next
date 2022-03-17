import { screen } from "@testing-library/react";
import { SectionBackground } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<SectionBackground />", () => {
  it("Should render with correct background dark", () => {
    const { container } = renderTheme(
      <SectionBackground background>Children</SectionBackground>,
    );
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Should render with background light", () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
