import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://storgecare.com.br";
const siteHost = new URL(siteUrl).host;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteHost,
    };
}