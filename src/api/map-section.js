export function mapSection(sections = []) {
  return sections.map((section) => {
    if (section.__component === "section.section-two-columns") {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === "section.section-content") {
      return mapSectionContent(section);
    }
    if (section.__component === "section.section-grid") {
      const { text_grid: textGrid = [], image_grid: imageGrid = [] } = section;

      if (textGrid.length > 0) {
        return mapTextGrid(section);
      }
      if (imageGrid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
  });
}

export const mapSectionTwoColumns = (twoColumns = {}) => {
  const {
    __component: component = "",
    title = "",
    description: text = "",
    image: { url: srcImg = "" } = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = twoColumns;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};
export const mapSectionContent = (sectionContent = {}) => {
  const {
    __component: component = "",
    title = "",
    content: html = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = sectionContent;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (sectionGrid = {}) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
    text_grid: grid = [],
  } = sectionGrid;
  return {
    component: "section.section-grid-text",
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = "", description = "" } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (sectionGrid = {}) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
    image_grid: grid = [],
  } = sectionGrid;
  return {
    component: "section.section-grid-image",
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = "", alternativeText: altText = "" } = "",
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
