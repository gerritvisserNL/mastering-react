import posts from "@/data/posts.json";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Blog</h1>
      <hr />
      <ul className="list">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.slug}`} className="read-more">
              Lees meer
            </Link>
            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
}
