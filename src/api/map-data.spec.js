import { mapData } from "./map-data";

describe("map-data", () => {
  it("should return data even if there's no data", () => {
    const pageData = mapData()[0];
    expect(pageData.footerHtml).toBe("");
    expect(pageData.slug).toBe("");
    expect(pageData.title).toBe("");
    // expect(pageData.sections).toEqual([]);
    // expect(pageData.menu).toEqual({});
  });

  it("should return data with real data", () => {
    const pageData = mapData([
      {
        footer_text: "<p>Hey there</p>",
        slug: "slug",
        title: "title",
        // sections: [1, 2, 3, 4],
        // menu: { a: "b" },
      },
    ])[0];
    expect(pageData.footerHtml).toBe("<p>Hey there</p>");
    expect(pageData.slug).toBe("slug");
    expect(pageData.title).toBe("title");
    // expect(pageData.sections).toEqual([1, 2, 3, 4]);
    // expect(pageData.menu).toEqual({ a: "b" });
  });
});
