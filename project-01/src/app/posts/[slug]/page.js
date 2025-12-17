import posts from "@/data/posts.json";
import { notFound } from "next/navigation";

export default function PostPage({ params }) {
  console.log(params);
  return <h1>Test</h1>;
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) return notFound();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </main>
  );
}
