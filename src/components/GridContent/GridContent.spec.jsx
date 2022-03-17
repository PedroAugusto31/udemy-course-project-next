import { screen } from "@testing-library/react";
import { GridContent } from ".";
import { renderTheme } from "../../styles/render-theme";
import mockShow from "./mock";

describe("<GridContent />", () => {
  it("Should match snapshot", () => {
    const { container } = renderTheme(<GridContent {...mockShow} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render without background", () => {
    const { container } = renderTheme(
      <GridContent {...mockShow} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
