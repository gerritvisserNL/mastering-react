import posts from "@/data/posts.json";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </main>
  );
}
