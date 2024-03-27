import {  MetadataRoute } from "next";

const BASE_URL = "https://codenuity.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{

    return [
      {
        url: `${BASE_URL}`,
        priority:1
      },
    ];

}