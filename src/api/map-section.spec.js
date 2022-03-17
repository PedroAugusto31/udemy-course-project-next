import {
  mapImageGrid,
  mapSection,
  mapSectionContent,
  mapSectionTwoColumns,
  mapTextGrid,
} from "./map-section";
import fakePagesData from "./dados.json";

describe("map-section", () => {
  it("should render predefined section with no data", () => {
    const data = mapSection();
    expect(data).toEqual([]);
  });
  it("should render section with correct data", () => {
    const data = mapSection(fakePagesData[0].sections);
    expect(data[0].component).toBe("section.section-two-columns");
  });
  it("should render section with invalid data", () => {
    const data = mapSection([
      {
        __component: "section.section-grid",
      },
    ]);
    const withoutComponent = mapSection([{}]);
    expect(data).toEqual([{ __component: "section.section-grid" }]);
    expect(withoutComponent).toEqual([{}]);
  });

  it("should map a section two columns with no data", () => {
    const sectionObj = mapSectionTwoColumns();
    expect(sectionObj.background).toBe(false);
    expect(sectionObj.component).toBe("");
    expect(sectionObj.sectionId).toBe("");
    expect(sectionObj.srcImg).toBe("");
    expect(sectionObj.text).toBe("");
    expect(sectionObj.title).toBe("");
  });

  it("should map a section two columns", () => {
    const sectionObj = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      title: "title",
      description: "abc",
      metadata: {
        background: true,
        section_id: "contact",
      },
      image: {
        url: "a.svg",
      },
    });
    expect(sectionObj.background).toBe(true);
    expect(sectionObj.component).toBe("section.section-two-columns");
    expect(sectionObj.sectionId).toBe("contact");
    expect(sectionObj.srcImg).toBe("a.svg");
    expect(sectionObj.text).toBe("abc");
    expect(sectionObj.title).toBe("title");
  });

  it("should map a section content with no data", () => {
    const sectionContObj = mapSectionContent();

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("");
    expect(sectionContObj.sectionId).toBe("");
    expect(sectionContObj.html).toBe("");
    expect(sectionContObj.title).toBe("");
  });
  it("should map a section content", () => {
    const sectionContObj = mapSectionContent({
      __component: "section.section-content",
      title: "Pricing",
      content: "abc",
      metadata: {
        background: false,
        section_id: "pricing",
      },
    });

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-content");
    expect(sectionContObj.sectionId).toBe("pricing");
    expect(sectionContObj.html).toBe("abc");
    expect(sectionContObj.title).toBe("Pricing");
  });
  it("should map a text grid with no data", () => {
    const sectionContObj = mapTextGrid();

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-grid-text");
    expect(sectionContObj.sectionId).toBe("");
    expect(sectionContObj.description).toBe("");
    expect(sectionContObj.title).toBe("");
    expect(sectionContObj.grid).toEqual([]);
  });
  it("should map a text grid with invalid data", () => {
    const withoutComponent = mapTextGrid({ text_grid: [{}] });
    expect(withoutComponent).not.toEqual({});
  });
  it("should map a text grid", () => {
    const sectionContObj = mapTextGrid({
      __component: "section.section-grid",
      description: "abc",
      title: "My Grid",
      text_grid: [
        {
          title: "Teste 1",
          description: "Coisa",
        },
        {
          title: "Teste 2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
        },
        {
          title: "Teste 3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
        },
      ],
      image_grid: [],
      metadata: {
        background: true,

        section_id: "grid-one",
      },
    });

    expect(sectionContObj.background).toBe(true);
    expect(sectionContObj.component).toBe("section.section-grid-text");
    expect(sectionContObj.sectionId).toBe("grid-one");
    expect(sectionContObj.description).toBe("abc");
    expect(sectionContObj.title).toBe("My Grid");
    expect(sectionContObj.grid[0].title).toBe("Teste 1");
    expect(sectionContObj.grid[0].description).toBe("Coisa");
  });

  it("should map a image grid with no data", () => {
    const sectionContObj = mapImageGrid(undefined);

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-grid-image");
    expect(sectionContObj.sectionId).toBe("");
    expect(sectionContObj.description).toBe("");
    expect(sectionContObj.title).toBe("");
  });
  it("should map a image grid with invalid data", () => {
    const sectionContObj = mapImageGrid({ image_grid: [{}] });
  });
  it("should map a image grid with data", () => {
    const sectionContObj = mapImageGrid({
      __component: "section.section-grid",
      description: "abc",
      title: "Gallery",
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: "abc",
            url: "a.svg",
          },
        },
        {
          image: {
            alternativeText: "Imagem do topo de uma cidade grande",
            url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg",
          },
        },
        {
          image: {
            alternativeText: "Filme Kodak para câmeras antigas",
            url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg",
          },
        },
      ],
      metadata: {
        background: false,

        section_id: "gallery",
      },
    });

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-grid-image");
    expect(sectionContObj.sectionId).toBe("gallery");
    expect(sectionContObj.description).toBe("abc");
    expect(sectionContObj.title).toBe("Gallery");
    expect(sectionContObj.grid[0].srcImg).toBe("a.svg");
    expect(sectionContObj.grid[0].altText).toBe("abc");
  });
});
