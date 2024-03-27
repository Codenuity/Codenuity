import { MetadataRoute } from "next";

const BASE_URL = "https://codenuity.com"

export default function robots(): MetadataRoute.Robots {

    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/privacy"],
        },
      ],
      sitemap: `${BASE_URL}/sitemap.xml`,
    };
}