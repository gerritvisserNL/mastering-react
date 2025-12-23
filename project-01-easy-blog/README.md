# Next.js Server Component Example: Blog

This is a simple Next.js application created to practice **server components, dynamic routing, and rendering data from a JSON file** in the App Router. The goal of this challenge was to understand how to display a list of blog posts, create dynamic post pages, and handle routing using slugs.

## Challenge Overview

The challenge required:

- Importing a data array from a `posts.json` file
- Creating a server component page (`page.js`) to display a list of blog posts
- Creating dynamic routes for individual posts (`[slug]/page.js`)
- Using `params` to fetch the correct post
- Handling 404s with `notFound()`

---

## Project Structure

app/
├─ page.js
├─ posts/
│ └─ `[slug]`/
│ └─ page.js
components/
├─ Header.js
├─ Footer.js
├─ Home.js
data/
└─ posts.json

---

- `app/page.js` is the main server component that renders the homepage and displays a list of posts.
- `components/Home.js` is a child component that maps over posts and renders them with links to their detail pages.
- `app/posts/[slug]/page.js` is a dynamic route that renders the detail page of a single post using the slug from `params`.
- `data/posts.json` contains the array of blog post objects.

---

## Key Next.js Concepts Practiced

- Using server components to render data
- Dynamic routing with `[slug]` in the App Router. (slug is id)
- Passing props from a server component to a child component
- Mapping arrays to JSX elements with key props
- Handling 404 pages with notFound()
- Organizing project structure with components and data folders

## Possible Improvements

- Add more fields to posts (date, author, images)
- Style posts with CSS or Tailwind for better readability
- Add a PostCard component for the homepage
- Convert the post list to a client component for interactive features
- Eventually implement a form or CMS integration to add posts dynamically

---

This challenge helped me understand dynamic routing, server components, and JSON data rendering in Next.js, forming a solid foundation for building blogs or other data-driven pages.
