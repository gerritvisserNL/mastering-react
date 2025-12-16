import { posts } from "./data.js";

export default function Page() {
  return (
    <main>
      <h1>Post Overview</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}: {post.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
