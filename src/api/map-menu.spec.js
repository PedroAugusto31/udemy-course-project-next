import { mapMenu, mapMenuLinks } from "./map-menu";

describe("map-menu", () => {
  it("should run a predefined object with no data", () => {
    const menuObj = mapMenu();
    expect(menuObj.newTab).toBe(false);
    expect(menuObj.text).toBe("");
    expect(menuObj.srcImg).toBe("");
    expect(menuObj.link).toBe("");
    // expect(menuObj.links).toEqual([]);
  });
  it("should run a predefined object with data", () => {
    const menuObj = mapMenu({
      open_in_new_tab: false,
      logo_text: "Landing Page",
      logo_link: "#home",
      menu: [
        {
          open_in_new_tab: false,
          link_text: "pricing",
          url: "#pricing",
        },
        {
          open_in_new_tab: false,
          link_text: "contact",
          url: "#contact",
        },
      ],
      logo: {
        url: "a.svg",
      },
    });
    expect(menuObj.newTab).toBe(false);
    expect(menuObj.text).toBe("Landing Page");
    expect(menuObj.srcImg).toBe("a.svg");
    expect(menuObj.link).toBe("#home");
    expect(menuObj.links[0].newTab).toBe(false);
    expect(menuObj.links[0].children).toBe("pricing");
    expect(menuObj.links[0].link).toBe("#pricing");
  });
  it("should return an empty array if no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it("should map links if there's data to map", () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: "pricing",
        url: "#pricing",
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe("pricing");
    expect(links[0].link).toBe("#pricing");
  });
});
