import { posts } from "./data.js";
import Link from "next/link.js";

export default function Page() {
  return (
    <main>
      <h1>Post Overview</h1>
      <ul className="list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
