import { posts } from "./data";

export default async function PostPage({ params }) {
  const { id } = await params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <main>
        <h1>Post not found!</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
