import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getAllTags(posts: { data: { tags: string[] } }[]) {
  const tags = new Set(posts.flatMap((post) => post.data.tags));
  return Array.from(tags);
}
