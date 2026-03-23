import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://storgecare.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}