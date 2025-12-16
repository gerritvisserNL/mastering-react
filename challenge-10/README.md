# Next.js Server Component Example: Book List

This is a simple Next.js application created to practice **server components and passing data to child components** in the App Router. The goal of this challenge was to understand how to render data in a server component and pass it to a child component for display.

## Challenge Overview

The challenge required:

- Importing a data array from a separate `data.js` file
- Creating a server component page (`page.js`) to pass data to a child component
- Creating a child component (`BookList`) to display the data in a table

---

## Project Structure

src/
├─ app/
│ ├─ page.js
│ └─ components/
│ └─ BookList.js
└─ data/
└─ data.js

- `app/page.js` is the main server component that imports the book data and renders the `BookList` component.
- `components/BookList.js` is a child component that receives the book array as props and displays it in a table.
- `data/data.js` contains the array of book objects.

---

## Implementation Details

**data.js:**

```js
export const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "Moby Dick", author: "Herman Melville" },
];
```

**Page Component (page.js)**

```js
import BookList from "./components/BookList";
import { books } from "../data/data";

export default function Page() {
  return (
    <main>
      <h1>Book List</h1>
      <BookList books={books} />
    </main>
  );
}
```

**Child Component (BookList.js)**

```js
export default function BookList({ books }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

# Notes

- The extra semicolon inside JSX has been removed to avoid syntax errors.
- No fragment (`<> </>`) is needed since the component only returns one element (`<table>`).
- `.js` is sufficient for components; `.jsx` is optional.

---

# Key Next.js Concepts Practiced

- Using server components and passing data as props
- Mapping arrays to JSX elements with `key` props
- Separating concerns by putting components in a `components` folder and data in a `data` folder
- Understanding when to use server vs client components
- Omitting file extensions in imports (`import BookList from './BookList'`)

---

# Possible Improvements

- Add more details to each book, such as genre or publication year
- Style the table with CSS or Tailwind for better readability
- Make the table sortable or filterable
- Convert `BookList` to a client component to allow interactivity

---

This challenge helped me understand server components in Next.js, passing data to child components, and best practices for project structure, forming a solid foundation for building dynamic, data-driven pages.
