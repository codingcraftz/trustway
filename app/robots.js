export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/office", "/office/", "/api/"],
      },
    ],
    sitemap: "https://www.trustway.kr/sitemap.xml",
    host: "https://www.trustway.kr",
  };
}
