# Next.js Dynamic Routes App

This is a simple Next.js application created to practice **dynamic routing with the App Router**, focusing on understanding how `[id]` works and how URL parameters are passed to pages.

## Challenge Overview

The goal of this challenge was to understand **dynamic routes** in Next.js.
You should create:

- `/posts/1`
- `/posts/2`
- A dynamic route using `[id]`
- Display the `id` from the URL on the page

---

## How I Solved the Challenge

1. **Project Setup**

   - Created a new Next.js project using the App Router.
   - Used the `app` directory structure with `page.js`, `layout.js`, and `globals.css`.

2. **Creating the Dynamic Route**

   - Created a `posts` folder inside `app`.
   - Added a dynamic route folder called `[id]`.

   Folder structure:

   ```
   app
    └─ posts
       └─ [id]
          └─ page.js
   ```

   The name `[id]` tells Next.js to treat this part of the URL as a dynamic parameter.

3. **Using `params` from the URL**

   - The value inside `[id]` is automatically provided by Next.js through the `params` object.
   - Because App Router pages are server components, `params` must be awaited.

   ```jsx
   export default async function PostPage({ params }) {
     const { id } = await params;

     return (
       <main>
         <h1>Post pagina</h1>
         <p>Post id: {id}</p>
       </main>
     );
   }
   ```

   Visiting `/posts/1` results in `id` being `"1"`, and `/posts/2` results in `"2"`.

4. **Adding Simple Post Data**

   - Created a small data file with fake posts.
   - Used the `id` from the URL to find and display the correct post.

   ```js
   export const posts = [
     { id: "1", title: "First post", content: "This is the first post" },
     { id: "2", title: "Second post", content: "This is the second post" },
     { id: "3", title: "Third post", content: "This is the third post" },
   ];
   ```

   ```jsx
   const post = posts.find((post) => post.id === id);
   ```

   If no post is found, a fallback message is shown.

---

## Key Next.js Concepts Practiced

- Dynamic routes with `[id]`
- URL parameters using `params`
- Async server components in the App Router
- Destructuring values from `params`
- Conditional rendering when data is not found

---

## Possible Improvements

- Add a `/posts` overview page with links to each post
- Use `<Link>` from `next/link` for navigation
- Replace static data with real data fetching
- Use `notFound()` for proper 404 handling

---

This challenge helped me **understand how dynamic routing works in the Next.js App Router and how URL parameters are passed and used inside server components**, which is essential for building blogs, product pages, and detail views.
