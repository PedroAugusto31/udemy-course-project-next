import { mapData } from "./map-data";
import config from "../config";

export const loadPages = async (slug = "") => {
  const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, "")}` : "";
  const url = `${config.url}/pages/${cleanSlug}`;
  // const url = `${config.url}`;

  const rawData = await fetch(url);
  const json = rawData.json();
  const data = mapData(json);

  return data;
};
