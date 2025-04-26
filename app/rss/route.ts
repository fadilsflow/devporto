import { BASE_URL, NAME, BIO, JOB } from "@/app/data";
import { getBlogPosts } from "@/app/blog/utils";

export async function GET() {
  const allBlogs = await getBlogPosts();

  // Format the current date according to RFC 822
  const pubDate = new Date().toUTCString();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title><![CDATA[${post.metadata.title}]]></title>
          <link>${BASE_URL}/blog/${post.slug}</link>
          <guid>${BASE_URL}/blog/${post.slug}</guid>
          <description><![CDATA[${post.metadata.summary || ""}]]></description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
          <author>${NAME}</author>
          ${
            post.metadata.image
              ? `<enclosure url="${BASE_URL}${post.metadata.image}" type="image/jpeg" />`
              : ""
          }
        </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${NAME}'s Blog</title>
        <link>${BASE_URL}</link>
        <description><![CDATA[${BIO}]]></description>
        <language>en-us</language>
        <lastBuildDate>${pubDate}</lastBuildDate>
        <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
        <webMaster>${NAME} (${JOB})</webMaster>
        <image>
          <url>${BASE_URL}/favicon.ico</url>
          <title>${NAME}'s Blog</title>
          <link>${BASE_URL}</link>
        </image>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600",
    },
  });
}
